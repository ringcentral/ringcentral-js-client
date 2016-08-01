var uppercamelcase = require('uppercamelcase');

var urlSectionValuePresences = ['optional', 'required', 'forbidden'];
function UrlSectionClass(urlName) {
    this.urlName = urlName;
    this.name = uppercamelcase(urlName);
    this.defaultValue = null;
    this.valueDesc = null;
    this.valuePresence = '';
    this.methodName = lowercaseFirstLetter(this.name);
    this.subSections = [];  // UrlSectionClass[]
    this.modelTypes = {};   // Keys are model type name
    this.getMethod = null;
    this.innerTypes = []; //[string], class for string enum definitions
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

module.exports = UrlSectionClass;