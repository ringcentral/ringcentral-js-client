var handlebars = require('handlebars');
var fs = require('fs');
var uppercamelcase = require('uppercamelcase');
var tplFile = __dirname + '/templates/UrlSection.ts.tpl';

var ignoredUrlSections = ['restapi', 'v1.0'];
var tpl = handlebars.compile('' + fs.readFileSync(tplFile));
module.exports = function (paths, outDir) {
    var classes = {}; // url part -> UrlSectionClass
    var classNames = [];
    for(var i = 0; i < paths.length; i++) {
        var prvSec = null;
        var prvPartIsValue = false;
        var parts = paths[i].substring(1).split('/');
        for(var j = 0; j < parts.length; j++) {
            var urlPart = parts[j];
            if (ignoredUrlSections.indexOf(urlPart) > -1) {
                continue;
            }
            if (prvSec) {
                var isValue = urlPart.match(/^{.+}$/);
                if (isValue && !prvPartIsValue) {
                    prvSec.allowValue();
                } else if (!isValue && !prvPartIsValue) {
                    prvSec.forbidValue();
                }
                prvPartIsValue = isValue;
                if (isValue) {
                    continue;
                }
            }
            
            var cls = classes[urlPart];
            if (!cls) {
                cls = new UrlSectionClass(urlPart);
                if (classNames.indexOf(cls.urlName) > -1) {
                    console.error('Url ' + urlPart + ' and ' + existingUrl.urlName + ' will result into same className which is a conflict.');
                    break;
                }
                classes[urlPart] = cls;
                classNames.push(cls.urlName);
            }
            if (prvSec && prvSec.subSections.indexOf(cls) == -1) {
                prvSec.subSections.push(cls);
            }
            prvSec = cls;
        }
        if (prvSec && !prvPartIsValue) {
            prvSec.forbidValue();
        }
    }
    
    for(var k in classes) {
        var cls = classes[k];
        var file = outDir + '/' + cls.name + '.ts';
        console.log('Saving ' + file);
      	fs.writeFileSync(file, tpl(cls));
    }
};

var urlSectionValuePresences = ['optional', 'required', 'forbidden'];
function UrlSectionClass(urlName) {
    this.urlName = urlName;
    this.name = uppercamelcase(urlName);
    this.valuePresence = '';
    this.methodName = lowercaseFirstLetter(this.name);
    this.subSections = [];  // UrlSectionClass[]
}

// When value appears
UrlSectionClass.prototype.allowValue = function() {
    if (!this.valuePresence) {
        this.valuePresence = 'required';
    } else if (this.valuePresence == 'forbidden') {
        this.valuePresence = 'optional';
    }
};

// When no value
UrlSectionClass.prototype.forbidValue = function() {
    if (!this.valuePresence) {
        this.valuePresence = 'forbidden';
    } else if (this.valuePresence == 'required') {
        this.valuePresence = 'optional';
    }
};

function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
}