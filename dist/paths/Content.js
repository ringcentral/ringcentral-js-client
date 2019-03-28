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
// This is Generated Source.
var PathSegment_1 = __importDefault(require("../PathSegment"));
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content(prv, id, service) {
        return _super.call(this, "content", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.16 (Release 7.1)</p><p>Returns call recording metadata.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallRecording</td><td>Downloading call recording content</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    Content.prototype.get = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.16 (Release 7.1)</p><p>Returns call recording metadata.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallRecording</td><td>Downloading call recording content</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    Content.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Content;
}(PathSegment_1.default));
exports.default = Content;
//# sourceMappingURL=Content.js.map