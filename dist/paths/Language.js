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
var Language = /** @class */ (function (_super) {
    __extends(Language, _super);
    function Language(prv, id, service) {
        return _super.call(this, "language", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns the information about supported languages.</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    Language.prototype.list = function () {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns the information about supported languages.</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    Language.prototype.listRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns language by its respective ID.</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    Language.prototype.get = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p><p>Returns language by its respective ID.</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    Language.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Language;
}(PathSegment_1.default));
exports.default = Language;
//# sourceMappingURL=Language.js.map