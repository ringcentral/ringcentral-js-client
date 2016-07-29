// Convert json schema type to TS type
module.exports = function (jsonType) {
    var type = {};
    if (jsonType == 'integer') {
        return 'number';
    } else if (jsonType.charAt(0)!='#') {
        return jsonType;
    } else {
        console.warn('Can not convert reference type.');
    }
};