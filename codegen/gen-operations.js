var isListResponse = require('./plugins/list-response');

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
        addListOperation();
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

function addListOperation() {
    
}

function resolveUrlEntity(url) {
    var parts = url.split("/");
    var last = parts[parts.length - 1];
    if (last.match(/^{(.+)}$/)) {
        return parts[parts.length - 2];
    }
    return last;
}