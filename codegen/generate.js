var fs = require('fs');
var gutil = require('gulp-util');
var swagger = require('./swagger-ring.json');
var modelGenerator = require('./templates/model');
var clientGenerator = require('./templates/client');
var clientPath = __dirname + '/../src';

//console.log(swagger.definitions);

function ref2model(ref) {
    return ref.split('/').pop();
}

function ref2modelNS(ref) {
    var model = ref2model(ref);
    return model.toLowerCase() + '.' + model;
}

function renameTypes(prop) {

    if (prop.type == 'datetime') {
        prop.type = 'Date';
    }

    if (prop.type == 'integer') {
        prop.type = 'number';
    }

    //if (prop.type == 'boolean') {
    //    prop.type = 'bool';
    //}

    if (prop.type == 'null') {
        prop.type = 'any';
    }

    return prop;

}

function addToImports(imports, ref) {

    if (!swagger.definitions[ref2model(ref)]) throw new Error('Definition ' + gutil.colors.magenta(ref) + ' not found');

    var type = ref2modelNS(ref);

    if (imports.indexOf(type) == -1) imports.push(type);

    return imports;

}

var models = Object.keys(swagger.definitions)
    .map(function(key) {
        swagger.definitions[key].name = key;
        return swagger.definitions[key];
    })
    .map(function(def) {

        console.log('Parsing model', gutil.colors.magenta(def.name));

        var properties = Object.keys(def.properties).map(function(key) {
            def.properties[key].$name = key;
            return def.properties[key];
        });

        var model = {};

        model.name = def.name;

        model.imports = [];

        model.properties = properties
            .map(function(prop) {

                prop.isRequired = def.required? def.required.indexOf(prop.$name) != -1 : false;

                if (prop.$ref) {

                    prop.type = ref2modelNS(prop.$ref);
                    model.imports = addToImports(model.imports, prop.$ref);

                } else if (prop.type.indexOf('#/') != -1) {

                    prop.type = ref2modelNS(prop.type);
                    model.imports = addToImports(model.imports, prop.type);
                }

                if (prop.type == 'array') {

                    if (!prop.items.$ref && !prop.items.type) {

                        prop.description = (prop.description || '') + ' ' + prop.items.type;
                        prop.type = 'string[]';

                    } else if (prop.items.type) {

                        prop.type = prop.items.type + '[]';

                    } else if (prop.items.$ref) {

                        prop.type = ref2modelNS(prop.items.$ref) + '[]';
                        model.imports = addToImports(model.imports, prop.items.$ref);

                    }

                }

                return renameTypes(prop);

            });

        return model;

    })
    .forEach(function(model) {

        var file = clientPath + '/models/' + model.name + '.ts',
            previousModel = fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : '',
            re = /(\/\/ CUSTOM METHODS(.|[\r\n])*?\/\/ CUSTOM METHODS)/igm,
            m = re.exec(previousModel),
            modelSource = modelGenerator(model);

        console.log('Saving model', gutil.colors.magenta(file));

        if (m !== null) {

            if (m[0]) {
                //console.log('---------------------- Previous model definition', m[0]);
                modelSource = modelSource.replace(re, m[0]);
            }

        }

        fs.writeFileSync(file, modelSource);

    });

var clients = Object.keys(swagger.paths).reduce(function(res, path) {

    var operations = swagger.paths[path];

    Object.keys(operations).forEach(function(method) {

        var operation = operations[method];

        console.log('Parsing operation', gutil.colors.magenta(method), gutil.colors.magenta(path));

        if (path.indexOf('/oauth') > -1 || path.indexOf('/{apiVersion}') > -1) {
            return;
        }

        if (!operation.responses || !operation.responses['200']) {
            throw new Error('Cannot find 200 response');
        }

        operation.path = '/restapi' + path;

        operation.method = method;

        operation.responseSchema = ref2modelNS(operation.responses['200'].schema.$ref);

        operation.imports = operation.responseSchema != '.' ? [operation.responseSchema] : [];

        operation.parameters.map(function(param) {

            if (param.schema) {

                param.type = ref2modelNS(param.schema.$ref); // override type with schema
                operation.imports = addToImports(operation.imports, param.schema.$ref);

                delete param.schema;

            }

            if(param.format) {
                delete param.format;
            }

            if (param.type == 'array') {
                param.type = 'string';
            }

            return renameTypes(param);

        });

        operation.tags.forEach(function(tag) {

            if (!res[tag]) res[tag] = [];

            res[tag].push(operation); //operation.operationId

        });

    });

    return res;

}, {});

Object.keys(clients).forEach(function(tag) {

    var operations = clients[tag];

    tag = tag.replace(/[^a-z]/igm, '');

    fs.writeFileSync(clientPath + '/clients/' + tag + '.ts', clientGenerator(tag, operations));

});

console.log("Generation Completed!");