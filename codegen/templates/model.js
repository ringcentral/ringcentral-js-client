module.exports = function(model) {

    var res = [],
        enums = [],
        propertyMappings = [];

    res.push('/// <reference path="../externals.d.ts" />');
    res.push('');
    res.push('import model = require(\'../core/Model\');');

    model.imports.forEach(function(imp) {
        imp = imp.split('.');
        res.push('import ' + imp[0] + ' = require(\'./' + imp[1] + '\');');
    });

    res.push('');
    res.push('export class ' + model.name + ' extends model.Model {');

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

        res.push('    ' + prop.$name + ':' + prop.type + ';');

        var isPrimitive = ['number', 'string', 'string[]', 'any', 'boolean'].indexOf(prop.type) != -1;

        propertyMappings.push('{property: \'' + prop.$name + '\', ' +
                              'Class: ' + (isPrimitive ? 'null /* ' + prop.type + ' */' : prop.type.replace('[]', '')) + ', ' +
                              'isArray: ' + (prop.type.indexOf('[]') != -1 ? 'true' : 'false') + ',' +
                              'isRequired: ' + (prop.isRequired ? 'true' : 'false') + '}');

    });

    if (propertyMappings.length > 0) {
        res.push('');
        res.push('    getPropertyMappings():model.ModelPropertyMapping[] {');
        res.push('');
        res.push('        return [');
        res.push('            ' + propertyMappings.join(',\n            '));
        res.push('        ];');
        res.push('');
        res.push('    }');
    }

    res.push('');
    res.push('    getClassName() {');
    res.push('        return \'' + model.name + '\';');
    res.push('    }');
    res.push('');
    res.push('    // CUSTOM METHODS');
    res.push('    // CUSTOM METHODS');
    res.push('');
    res.push('}');

    enums.forEach(function(en) {

        res.push('');
        res.push('export enum ' + en.name + ' {');
        res.push('    ' + en.values.map(function(v) {

                var k = v.split(' ').join('');

                if (!k.match(/^[a-z]+$/i)) k = '\'' + k + '\'';

                return k + ' = <any>\'' + v + '\'';

            }).join(',\n    '));
        res.push('}');

    });

    //res.push('');
    //res.push('/**');
    //res.push(' * Swagger definition JSON used for CodeGen:');
    //res.push(' *');
    //res.push(' * ' + JSON.stringify(model, null, 4).split('\n').join('\n * '));
    //res.push(' */');

    return res.join('\n');

};