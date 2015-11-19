var beautify_html = require('js-beautify').html;

module.exports = function(tag, operations) {

    var res = [],
        imports = [],
        enums = [];

    res.push('/// <reference path="../externals.d.ts" />');
    res.push('');
    res.push('import client = require(\'../core/Client\');');

    operations.forEach(function(operation) {

        operation.imports.forEach(function(imp) {
            if (imports.indexOf(imp) == -1) imports.push(imp);
        });

    });

    imports.forEach(function(imp) {

        imp = imp.split('.');
        res.push('import ' + imp[0] + ' = require(\'../models/' + imp[1] + '\');');

    });

    res.push('');
    res.push('export class ' + tag + ' extends client.Client {');

    operations.forEach(function(operation) {

        var interfaceName = 'I' + operation.operationId.substr(0, 1).toUpperCase() + operation.operationId.substr(1),
            type = (operation.responseSchema == '.' ? 'null' : operation.responseSchema);

        res.push('');
        res.push('    /**');
        res.push('     * ' + operation.summary);
        res.push('     *');
        res.push('     * ' + beautify_html(operation.description).split('\n').join('\n     * '));
        res.push('     */');
        res.push('    ' + operation.operationId + '(options?:{');

        var params = operation.parameters.map(function(param) {

            if (param.enum) {

                param.type = interfaceName + param.name.substr(0, 1).toUpperCase() + param.name.substr(1);

                enums.push({
                    name: param.type,
                    values: param.enum
                });

            }

            res.push('        /** ' + param.description + (param.collectionFormat ? ', collection: ' + param.collectionFormat : '') + ' */');
            res.push('        \'' + param.name + '\'' + (param.required ? '' : '?') + ':' + param.type + ';');

            delete param.description;

            return param;

        });

        res.push('    }):Promise<' + (type == 'null' ? 'any' : type) + '> {');
        res.push('');
        res.push('        return this.send(this.parseOptions(\'' + operation.method.toUpperCase() + '\', \'' + operation.path + '\', options, ' + operation.operationId + 'Options),');
        res.push('                         ' + type + ');');
        res.push('');
        res.push('    }');

    });

    res.push('');
    res.push('}');

    operations.forEach(function(operation) {

        res.push('');
        res.push('/**');
        res.push(' * Definition of options for ' + operation.operationId + ' operation');
        res.push(' */');
        res.push('export var ' + operation.operationId + 'Options:client.IOperationParameter[] = ' + JSON.stringify(operation.parameters, null, 4) + ';');

    });

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
    //res.push(' * ' + JSON.stringify(operations, null, 4).split('\n').join('\n * '));
    //res.push(' */');

    return res.join('\n');

};