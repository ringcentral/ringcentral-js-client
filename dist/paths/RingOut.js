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
var RingOut = /** @class */ (function (_super) {
    __extends(RingOut, _super);
    function RingOut(prv, id, service) {
        return _super.call(this, "ring-out", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p>Makes a 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    RingOut.prototype.post = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p>Makes a 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    RingOut.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p>Returns the status of a 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    RingOut.prototype.get = function () {
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
     *  <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p>Returns the status of a 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    RingOut.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'></p><p>Cancels the 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    RingOut.prototype.delete = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'></p><p>Cancels the 2-leg RingOut call.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>RingOut</td><td>Performing two-legged ring-out phone calls</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    RingOut.prototype.deleteRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    return RingOut;
}(PathSegment_1.default));
exports.default = RingOut;
//# sourceMappingURL=RingOut.js.map