"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * UrlParts
 */
var PathSegment = /** @class */ (function () {
    function PathSegment(name, value, prv, service) {
        this._service = service;
        this.name = name;
        this.value = value || null;
        this.previous = prv;
    }
    PathSegment.prototype.toString = function (withValue) {
        if (withValue === void 0) { withValue = true; }
        var str = "/" + this.name;
        if (withValue && this.value) {
            str += "/" + this.value;
        }
        return str;
    };
    PathSegment.prototype.getEndpoint = function (withValue) {
        if (withValue === void 0) { withValue = true; }
        var end = "";
        if (this.previous) {
            end = this.previous.getEndpoint();
        }
        return end + this.toString(withValue);
    };
    PathSegment.prototype.getService = function () {
        var sec = this;
        while (sec) {
            if (sec._service) {
                return sec._service;
            }
            if (sec.previous) {
                sec = sec.previous;
            }
        }
    };
    PathSegment.prototype._send = function (_a) {
        var method = _a.method, ignoreId = _a.ignoreId, body = _a.body, query = _a.query;
        return this.getService().send({
            body: body,
            method: method,
            query: query,
            url: this.getEndpoint(ignoreId),
        });
    };
    return PathSegment;
}());
exports.default = PathSegment;
//# sourceMappingURL=PathSegment.js.map