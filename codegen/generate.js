var fs = require('fs');
var path = require('path');
var parseArgs = require('minimist');
var chalk = require('chalk');
var handlebars = require('handlebars');
var genUrlBuilders = require('./gen-url-builders.js');
var genOperations = require('./gen-operations.js');
var genModel = require('./gen-model-class.js');

var args = parseArgs(process.argv.slice(2));
var outDir = args.out;
var swaggerFile = args._[0];
if (!outDir || !swaggerFile) {
    console.log('Usage: node generate.js --out path/to/generated/source path/to/api/swagger/json');
    return;
}

var swagger = JSON.parse(fs.readFileSync(swaggerFile));

var tplFile = __dirname + '/templates/UrlSection.ts.tpl';
var tpl = handlebars.compile('' + fs.readFileSync(tplFile));
genUrlBuildersWithOperationApi(swagger, tpl);

genModels(swagger.definitions);


function genUrlBuildersWithOperationApi(swagger, tpl) {
    var urlBuilderClasses = genUrlBuilders(Object.keys(swagger.paths), swagger.parameters);
    genOperations(urlBuilderClasses, swagger.paths);
    for (var k in urlBuilderClasses) {
        var cls = urlBuilderClasses[k];
        var file = outDir + '/url-builders/' + cls.name + '.ts';
        console.log('Saving ' + chalk.magenta(file));
        fs.writeFileSync(file, tpl(cls));
    }
}

function genModels(keyedDefinitions) {
    for (var name in keyedDefinitions) {
        var model = genModel(keyedDefinitions[name], name);
        var modelSrc = '';
        for (var imp in model.imports) {
            modelSrc += 'import {' + imp + '} from "./' + imp + '";\n'
        }
        modelSrc += '\n';
        for (var i = 0; i < model.typeDefs.length; i++) {
            modelSrc += 'export ' + model.typeDefs[i] + '\n';
        }
        var file = outDir + '/' + model.name + '.ts';
        console.log('Saving ' + chalk.magenta(file));
        fs.writeFileSync(file, modelSrc);
    }
}