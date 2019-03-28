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
var Status = /** @class */ (function (_super) {
    __extends(Status, _super);
    function Status(prv, id, service) {
        return _super.call(this, "status", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.27 (Release 8.3)</p><p>Returns the API status; status '200' means the API is working fine, and '503' means it is temporary unavailable.</p><h4>API Group</h4><p>Light</p>
     */
    Status.prototype.get = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.27 (Release 8.3)</p><p>Returns the API status; status '200' means the API is working fine, and '503' means it is temporary unavailable.</p><h4>API Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    Status.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Status;
}(PathSegment_1.default));
exports.default = Status;
//# sourceMappingURL=Status.js.map