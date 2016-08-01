var fs = require('fs');
var handlebars = require('handlebars');
var uppercamelcase = require('uppercamelcase');
var resolveType = require('./jsonType2Ts.js');

var tpl = handlebars.compile(fs.readFileSync(__dirname + '/templates/class.tpl')+'');
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
    var imports = {};
    var defs = [];
    var classData = {
        name: name,
        properties: {}
    };
    var stringEnums = [];   //[string]
    for (var p in schema.properties) {
        var propVal = schema.properties[p];
        var typeInfo = resolveType(propVal, uppercamelcase(p));
        classData.properties[p] = {
            type: typeInfo.type,
            comment: propVal.description
        };
        if (typeInfo.ref) {
            imports[typeInfo.ref] = 1;
        } else if (typeInfo.enum) {
            defs.push('type ' + typeInfo.type + ' = "' + typeInfo.enum.join('" | "') + '";');
        } else if (typeInfo.isObject) {
            console.error('Type of a property should not be object ', propVal);
        }
    }
    defs.push(tpl(classData));
    return {
        imports: imports,
        typeDefs: defs
    };
};