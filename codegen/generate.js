var fs = require('fs');
var path = require('path');
var parseArgs = require('minimist');
var chalk = require('chalk');
//var Model = require('./model.js');
var handlebars = require('handlebars');
var genUrlBuilders = require('./gen-url-builders.js');
var genOperations = require('./gen-operations.js');

var args = parseArgs(process.argv.slice(2));
var outDir = args.out;
var swaggerFile = args._[0];
if (!outDir || !swaggerFile) {
    console.log('Usage: node generate.js --out path/to/generated/source path/to/api/swagger/json');
    return;
}

var modelGenerator = require('./templates/model');
var clientGenerator = require('./templates/client');
var swagger = JSON.parse(fs.readFileSync(swaggerFile));
var clientPath = outDir;

//genModels(swagger.definitions);

function genModels(definitions) {
    for (var name in definitions) {
        var m = new Model(name, definitions[name]);
    }
}

function genModel(name, definition) {
    var outFile = path.join(outDir, name + '.ts');
    console.log('Generating\t' + chalk.magenta(outFile));
}

// e.g. ExtensionInfo.Request.ContactInfo -> ExtensionInfo$Request$ContactInfo
function flatDefinitionName(name) {
    return name.replace(/\./g, '');
}

function ref2model(ref) {
    return flatDefinitionName(ref.split('/').pop());
}

function ref2modelNS(ref) {
    var model = ref2model(ref);
    return model;
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

    if (!swagger.definitions[ref2model(ref)]) throw new Error('Definition ' + chalk.magenta(ref) + ' not found');

    var type = ref2model(ref);

    if (imports.indexOf(type) == -1) imports.push(type);

    return imports;

}

var tplFile = __dirname + '/templates/UrlSection.ts.tpl';
var tpl = handlebars.compile('' + fs.readFileSync(tplFile));
var urlBuilderClasses = genUrlBuilders(Object.keys(swagger.paths), swagger.parameters);
genOperations(urlBuilderClasses, swagger.paths);
for (var k in urlBuilderClasses) {
    var cls = urlBuilderClasses[k];
    var file = outDir + '/url-builders/' + cls.name + '.ts';
    console.log('Saving ' + file, cls);
    fs.writeFileSync(file, tpl(cls));
}

var models = Object.keys(swagger.definitions)
    .map(function (key) {
        var def = swagger.definitions[key];
        def.name = flatDefinitionName(key);
        delete swagger.definitions[key];
        swagger.definitions[def.name] = def;
        return def;
    })
    .map(function (def) {
        var outFile = path.join(outDir, def.name + '.ts');
        //console.log('Generating ', chalk.magenta(outFile));

        var properties = Object.keys(def.properties).map(function (key) {
            var prop = def.properties[key];
            prop.$name = key;
            return prop;
        });

        var model = {};

        model.name = def.name;

        model.imports = [];

        model.properties = properties
            .map(function (prop) {

                prop.isRequired = def.required ? def.required.indexOf(prop.$name) != -1 : false;

                if (prop.$ref) {

                    prop.type = ref2model(prop.$ref);
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
    .forEach(function (model) {

        var file = path.join(clientPath, model.name + '.ts'),
            previousModel = fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : '',
            re = /(\/\/ CUSTOM METHODS(.|[\r\n])*?\/\/ CUSTOM METHODS)/igm,
            m = re.exec(previousModel),
            modelSource = modelGenerator(model);

        console.log('Saving model', chalk.magenta(file));

        if (m !== null) {

            if (m[0]) {
                //console.log('---------------------- Previous model definition', m[0]);
                modelSource = modelSource.replace(re, m[0]);
            }

        }

        fs.writeFileSync(file, modelSource);

    });
console.log('All data structure definitions generated.');
return;
var clients = Object.keys(swagger.paths).reduce(function (res, path) {
    console.log('res', res)
    var operations = swagger.paths[path];

    Object.keys(operations).forEach(function (method) {
        if (method == 'parameters') {
            return;
        }
        var operation = operations[method];

        console.log('Parsing operation', chalk.magenta(method), chalk.magenta(path));

        if (path.indexOf('/oauth') > -1 || path.indexOf('/{apiVersion}') > -1) {
            return;
        }
        var response = operation.responses['default'];
        if (!operation.responses || !response) {
            console.log(method, operation)
            throw new Error('Cannot find 200 response');
        }

        operation.path = '/restapi' + path;

        operation.method = method;
        if (!response.schema.$ref) console.log(response)
        operation.responseSchema = ref2modelNS(response.schema.$ref);

        operation.imports = operation.responseSchema != '.' ? [operation.responseSchema] : [];

        operation.parameters && operation.parameters.map(function (param) {

            if (param.schema) {

                param.type = ref2modelNS(param.schema.$ref); // override type with schema
                operation.imports = addToImports(operation.imports, param.schema.$ref);

                delete param.schema;

            }

            if (param.format) {
                delete param.format;
            }

            if (param.type == 'array') {
                param.type = 'string';
            }

            return renameTypes(param);

        });

        operation.tags && operation.tags.forEach(function (tag) {

            if (!res[tag]) res[tag] = [];

            res[tag].push(operation); //operation.operationId

        });

    });

    return res;

}, {});

Object.keys(clients).forEach(function (tag) {

    var operations = clients[tag];

    tag = tag.replace(/[^a-z]/igm, '');

    fs.writeFileSync(clientPath + '/clients/' + tag + '.ts', clientGenerator(tag, operations));

});

console.log("Generation Completed!");