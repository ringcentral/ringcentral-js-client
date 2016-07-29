var isListResponse = require('./plugins/list-response');
var jsonType2TsType = require('./jsonType2Ts.js');

/* Get CRUD operation method. */
module.exports = function (classes, paths) {
    for(var p in paths) {
        var cls = classes[resolveUrlEntity(p)];
        if(!cls) {
            continue;
        }
        var getOperation = paths[p].get;
        if (getOperation) {
            addGetOperation(cls, getOperation);
        }
    }
};

function addGetOperation(cls, getOperation) {
    if (isListResponse(getOperation.responses.default.schema)) {
        addListOperation(cls, getOperation);
        return;
    }
    cls.getMethod = {
        comment: getOperation.description
    };
    var modelType = getOperation.responses.default.schema['$ref'];
    if (modelType) {
        cls.modelType = modelType.split('/').pop();
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
            type: jsonType2TsType(p.type),
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