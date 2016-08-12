var normalizeModelName = require('./normalize-model-name');

// Convert json schema primitive type to TS type
module.exports = function resolveJsonType (schemaProp, typeName) {
    /*
    1. primitive type -> {type} ts primitive type name string
    2. reference type -> {type, ref:}
    3. enum type -> {type: t1 | t2 | t3, enum:[]}, TS union type
    4. array type -> primitive[], reference[]
    5. object type  -> {type: typeName, props}
    */
    var type = {};
    if (schemaProp.type == 'integer') {
        return {type: 'number', isPrimitive: true };
    } else if (schemaProp['$ref']) {
        var n = normalizeModelName(schemaProp['$ref'].split('/').pop());
        return {type:n, ref: n};
    } if (schemaProp.enum) {
        if (schemaProp.type == 'string') {
            return {type: '"' + schemaProp.enum.join('" | "') + '"'};
        } else if (schemaProp.type == 'object') {
            var types = [], refs = [];
            schemaProp.enum.forEach(function(t) {
                var ti = resolveJsonType(t);
                types.push(ti.type);
                ti.ref && refs.push(ti.ref);
            });
            return {type: types.join(' | '), refs: refs};
        } else {
            console.error("Unexpected enum type")
        }
    } else if (schemaProp.type == 'array') {
        var itemType = resolveJsonType(schemaProp.items);
        itemType.type += '[]';
        return itemType;
    } else if (schemaProp.type == 'object') {
        return {type: typeName, isObject: true};
    } else if (schemaProp.format == 'binary') {
        return {type:'ArrayBuffer', isBinary: true};
    } else {
        return {type: schemaProp.type, isPrimitive: true};
    }
};