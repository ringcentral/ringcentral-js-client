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
        if (getOperation) {
            addGetOperation(cls, getOperation);
        }
        var postOperation = paths[p].post;
        if (postOperation && config.postIgnore.indexOf(cls.urlName) == -1) {
            addOperation(cls, postOperation, 'post');
        }
        var putOperation = paths[p].put;
        if (putOperation && config.putIgnore.indexOf(cls.urlName) == -1) {
            console.log('@@', p)
            addOperation(cls, putOperation, 'put');
        }
    }
};

function addOperation(cls, operation, method) {
    var schema = operation.responses.default.schema;
    var operationMethod = cls[method + 'Method'] = {
        comment: operation.description
    };
    var params = operation.parameters;

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
    } else {
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
    var typeInfo = resolveType(resSchema, method + 'Response');
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
        propDefs.push(propName + "?: " + typeInfo.type + ' /*' + (props[propName].description || '') + '*/');
        typeInfo.ref && imports.push(typeInfo.ref);
    }
    return { def: '{\n' + paddingLeft + propDefs.join(',\n' + paddingLeft) + '\n\t}', imports: imports };
}

function addGetOperation(cls, getOperation) {
    if (isListResponse(getOperation.responses.default.schema)) {
        addListOperation(cls, getOperation);
        return;
    }
    cls.getMethod = {
        comment: getOperation.description
    };
    var typeInfo = resolveType(getOperation.responses.default.schema);
    if (typeInfo.ref) {
        cls.modelTypes[typeInfo.ref] = 1;
        cls.modelType = typeInfo.ref;
    }
}

function addListOperation(cls, getOperation) {
    var parameters = {};
    cls.listMethod = {
        comment: getOperation.description
    };
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