var uppercamelcase = require('uppercamelcase');
var isListResponse = require('./plugins/list-response');
var resolveType = require('./jsonType2Ts');
var genModel = require('./gen-model-class');
var config = require('./config.json');

/* Get CRUD operation method. */
module.exports = function (classes, paths) {
    for (var p in paths) {
        var cls = classes[resolveUrlEntity(p)];
        if (!cls) {
            console.warn('No class found for ' + p);
            continue;
        }
        var getOperation = paths[p].get;
        if (getOperation && config.getIngore.indexOf(cls.urlName) == -1) {
            addGetOperation(cls, getOperation);
        }
        var postOperation = paths[p].post;
        if (postOperation && config.postIgnore.indexOf(cls.urlName) == -1) {
            addOperation(cls, postOperation, 'post');
        }
        var putOperation = paths[p].put;
        if (putOperation && config.putIgnore.indexOf(cls.urlName) == -1) {
            addOperation(cls, putOperation, 'put');
        }
        var deleteOperation = paths[p]['delete'];
        if (deleteOperation) {
            addOperation(cls, deleteOperation, 'delete');
        }
    }
};

function addOperation(cls, operation, method) {
    var schema = operation.responses.default.schema;
    var operationMethod = cls[method + 'Method'] = {
        comment: operation.description
    };
    var params = operation.parameters;
    if (!params) {
        operationMethod.queryParams = '{}';
        operationMethod.bodyParams = '{}';
        return;
    }

    // Body parameter type: object, ref, primitive type(string)
    var bodyParams = [];
    var queryParams = {};
    for (var i = 0; i < params.length; i++) {
        var p = params[i];
        if (p['in'] == 'body') {
            bodyParams.push(p);
        } else if (p['in'] == 'query') {
            if (queryParams[p.name]) {
                console.error('Duplicated query parameter ' + p.name, postOperation);
            }
            queryParams[p.name] = p;
        } else {
            console.error('Unexpected ' + method + ' request parameter in ' + p['in'], p);
        }
    }

    // 1. bodyParams
    if (bodyParams.length == 1) {
        bodyParams = bodyParams[0];
        var typeInfo = resolveType(bodyParams.schema);
        if (typeInfo.ref) {
            operationMethod.bodyParams = typeInfo.type;
            operationMethod.isExternalResType = true;
            cls.modelTypes[typeInfo.ref] = 1;
        } else if (typeInfo.isObject) {
            var bodyDef = toOptionsDef(bodyParams.schema.properties, '        ');
            operationMethod.bodyParams = bodyDef.def;
            var imports = bodyDef.imports;
            imports.forEach(function (imp) {
                cls.modelTypes[imp] = 1;
            });
        } else {
            console.error("Unexpected body parameter type", bodyParams);
        }
    } else if (method != 'delete') {
        console.error("Number of " + method + " body parameters must be 1, the " + method + " operation.", operation)
    }

    // 2. queryParams
    var queryDef = toOptionsDef(queryParams, '        ');
    operationMethod.queryParams = queryDef.def;
    // Since queryParams are primitives, no imports
    if (queryDef.imports.length > 0) {
        console.error('Type query parameter must be primitive', getOperation);
    }

    // Handle Response
    var resSchema = operation.responses.default.schema;
    if (!resSchema) {
        return;
    }
    var typeInfo = resolveType(resSchema, uppercamelcase(method + 'Response'));
    if (typeInfo.ref) {
        cls.modelTypes[typeInfo.ref] = 1;
        operationMethod.resType = typeInfo.ref;
    } else if (typeInfo.isObject) {
        operationMethod.resType = typeInfo.type;
        var modelDef = genModel(resSchema, typeInfo.type);
        cls.innerTypes = cls.innerTypes.concat(modelDef.typeDefs);
        for (var imp in modelDef.imports) {
            cls.modelTypes[imp] = 1;
        }
    } else {
        console.error("Unexpected " + method + " response type", operation);
    }
}

// return {def:string, imports:}
function toOptionsDef(props, paddingLeft) {
    var imports = [];
    var propDefs = [];
    for (var propName in props) {
        var typeInfo = resolveType(props[propName]);
        propDefs.push(' /** ' + (props[propName].description || '') + ' */');
        propDefs.push(propName + "?: " + typeInfo.type + ';');
        typeInfo.ref && imports.push(typeInfo.ref);
    }
    if (propDefs.length < 1) {
        return { def: '{}', imports: imports };
    }
    return { def: '{\n' + paddingLeft + propDefs.join('\n' + paddingLeft) + '\n    }', imports: imports };
}

function addGetOperation(cls, getOperation) {
    if (isListResponse(getOperation.responses.default.schema)) {
        addListOperation(cls, getOperation);
        return;
    }
    cls.getMethod = {
        comment: getOperation.description
    };
    var typeInfo = resolveType(getOperation.responses.default.schema, 'GetResponse');
    if (typeInfo.ref) {
        cls.modelTypes[typeInfo.ref] = 1;
        cls.modelType = typeInfo.type;
    } else if (typeInfo.isObject) {
        if (cls.modelType) {
            console.warn('Model type exists for ', cls);
            return;
        }
        cls.modelType = typeInfo.type;
        var modelDef = genModel(getOperation.responses.default.schema, typeInfo.type);
        cls.innerTypes = cls.innerTypes.concat(modelDef.typeDefs);
        for (var imp in modelDef.imports) {
            cls.modelTypes[imp] = 1;
        }
    } else {
        console.error('Unknown get response type.', getOperation.responses.default);
    }
}

function addListOperation(cls, getOperation) {
    var parameters = {};
    cls.listMethod = {
        comment: getOperation.description
    };
    if (!cls.modelType) {
        cls.modelType = resolveType(getOperation.responses.default.schema.properties.records).ref;
        cls.modelTypes[cls.modelType] = 1;
    }
    if (!getOperation.parameters) {
        return;
    }
    var parameters = cls.listMethod.parameters = {};
    getOperation.parameters.forEach(function (p) {
        if (p.in != 'query') {
            console.warn('List Operation allow none query parameters', p);
            return;
        }
        parameters[p.name] = {
            type: resolveType(p).type,
            comment: p.description
        };
    });
}

function resolveUrlEntity(url) {
    var parts = url.split("/");
    var last = parts[parts.length - 1];
    if (last.match(/^{(.+)}$/)) {
        return parts[parts.length - 2];
    }
    return last;
}