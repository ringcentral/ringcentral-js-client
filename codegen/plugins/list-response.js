/**
 * Test if response is a list, then use PagingResult as model
 */
module.exports = function (schema) {
    var props = schema.properties;
    if (schema.type == "object" && props && props.records && props.navigation && props.paging) {
        return "PageResult";
    }
}