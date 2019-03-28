"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PathSegment_1 = __importDefault(require("../PathSegment"));
var Parse = /** @class */ (function (_super) {
    __extends(Parse, _super);
    function Parse(prv, id, service) {
        return _super.call(this, "parse", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p><p>Returns one or more parsed and/or formatted phone numbers that are passed as a string.</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    Parse.prototype.post = function (body, query) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: query,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p><p>Returns one or more parsed and/or formatted phone numbers that are passed as a string.</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    Parse.prototype.postRaw = function (body, query) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: query,
        });
    };
    return Parse;
}(PathSegment_1.default));
exports.default = Parse;
//# sourceMappingURL=Parse.js.map