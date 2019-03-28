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
var BusinessHours = /** @class */ (function (_super) {
    __extends(BusinessHours, _super);
    function BusinessHours(prv, id, service) {
        return _super.call(this, "business-hours", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.15 (Release 7.0)</p><p>Returns the extension user hours when answering rules are to be applied.</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    BusinessHours.prototype.get = function () {
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
     *  <p style='font-style:italic;'>Since 1.0.15 (Release 7.0)</p><p>Returns the extension user hours when answering rules are to be applied.</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    BusinessHours.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Updates the extension user hours when answering rules are to be applied.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    BusinessHours.prototype.put = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Updates the extension user hours when answering rules are to be applied.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    BusinessHours.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return BusinessHours;
}(PathSegment_1.default));
exports.default = BusinessHours;
//# sourceMappingURL=BusinessHours.js.map