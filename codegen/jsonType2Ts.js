var normalizeModelName = require('./normalize-model-name');

// Convert json schema primitive type to TS type
module.exports = function resolveJsonType (schemaProp, typeName) {
    /*
    1. primitive type -> {type} ts primitive type name string
    2. reference type -> {type, ref:}
    3. string enum type -> {type: typeName, enum:[]}
    4. array type -> primitive[], reference[]
    5. object type  -> {type: typeName, props}
    */
    var type = {};
    if (schemaProp.type == 'integer') {
        return {type: 'number', isPrimitive: true };
    } else if (schemaProp['$ref']) {
        var n = normalizeModelName(schemaProp['$ref'].split('/').pop());
        return {type:n, ref: n};
    } if (schemaProp.type == 'string' && schemaProp.enum) {
        return {type: typeName || 'string', enum: schemaProp.enum};
    } else if (schemaProp.type == 'array') {
        var itemType = resolveJsonType(schemaProp.items);
        itemType.type += '[]';
        return itemType;
    } else if (schemaProp.type == 'object') {
        return {type: typeName, isObject: true};
    } else {
        return {type: schemaProp.type, isPrimitive: true};
    }
};