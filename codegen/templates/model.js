module.exports = function(model) {

    var res = [],
        enums = [],
        propertyMappings = [];

    //res.push('/// <reference path="../externals.d.ts" />');
    //res.push('');
    res.push('import * as model from "../core/Model";');

    model.imports.forEach(function(imp) {
        res.push('import ' + imp + ' from "./' + imp + '";');
    });

    res.push('');
    res.push('export default class ' + model.name + ' {');

    model.properties.forEach(function(prop) {

        if (prop.enum) { //TODO Bring it back
            
            prop.type = model.name + prop.$name.substr(0, 1).toUpperCase() + prop.$name.substr(1);

            enums.push({
                name: prop.type,
                values: prop.enum
            });

        }

        res.push('');

        if (prop.description) {
            res.push('    /**');
            res.push('     * ' + prop.description);
            res.push('     */');
        }

        res.push('    ' + prop.$name + ': ' + prop.type + ';');

        var isPrimitive = ['number', 'string', 'string[]', 'any', 'boolean'].indexOf(prop.type) != -1;

        propertyMappings.push('{property: "' + prop.$name + '", ' +
                              'Class: ' + (isPrimitive || prop.enum ? 'null /* ' + prop.type + ' */' : prop.type.replace('[]', '')) + ', ' +
                              'isArray: ' + (prop.type.indexOf('[]') != -1 ? 'true' : 'false') + ', ' +
                              'isRequired: ' + (prop.isRequired ? 'true' : 'false') + '}');

    });

    if (propertyMappings.length > 0) {
        res.push('');
        res.push('    getPropertyMappings(): model.ModelPropertyMapping[] {');
        res.push('');
        res.push('        return [');
        res.push('            ' + propertyMappings.join(',\n            '));
        res.push('        ];');
        res.push('');
        res.push('    }');
    }

    res.push('');
    res.push('    getClassName() {');
    res.push('        return "' + model.name + '";');
    res.push('    }');
    res.push('');
    res.push('    // CUSTOM METHODS');
    res.push('    // CUSTOM METHODS');
    res.push('');
    res.push('}');

    enums.forEach(function(en) {
        res.push('');
        res.push('export type ' + en.name + ' = "' + en.values.join('" | "') + '";');
    });

    //res.push('');
    //res.push('/**');
    //res.push(' * Swagger definition JSON used for CodeGen:');
    //res.push(' *');
    //res.push(' * ' + JSON.stringify(model, null, 4).split('\n').join('\n * '));
    //res.push(' */');

    return res.join('\n');

};