var UrlSectionClass = require('./UrlSectionClass');

var ignoredUrlSections = ['restapi', 'v1.0'];
module.exports = function (paths, parameters) {
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
                var pathParameterName = urlPart.match(/^{(.+)}$/);
                pathParameterName && (pathParameterName = pathParameterName[1]);
                if (pathParameterName) {
                    prvSec.defaultValue = parameters[pathParameterName].default;
                    prvSec.valueDesc = parameters[pathParameterName].description;
                }
                var isValue = !!pathParameterName;
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
    return classes;
};