var uppercamelcase = require('uppercamelcase');
var normalizeModelName = require('./normalize-model-name');
var resolveType = require('./jsonType2Ts.js');

/*
convert json schema to TS class definition, type must be object
return {
    typeDefs: [string], // class or string enum
    imports:[]
}
*/
module.exports = function (schema, name) {
    if (schema.type != 'object') {
        console.error('Type of this schema must object.');
        return;
    }
    name = normalizeModelName(name);

    var imports = {};
    var properties = {};
    var enums = []; // [{name: strings:[]}]
    for (var p in schema.properties) {
        var propVal = schema.properties[p];
        var typeInfo = resolveType(propVal, uppercamelcase(p));
        properties[p] = {
            type: typeInfo.type,
            comment: propVal.description
        };
        if (typeInfo.ref) {
            imports[typeInfo.ref] = 1;
        } else if (typeInfo.enum) {
            enums.push({name: typeInfo.type, strings: typeInfo.enum});
        } else if (typeInfo.isObject) {
            console.error('Type of a property should not be object ', propVal);
        }
    }
    return {
        name: name,
        imports: imports,
        properties: properties,
        enums: enums
    };
};