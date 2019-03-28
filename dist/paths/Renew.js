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
var Renew = /** @class */ (function (_super) {
    __extends(Renew, _super);
    function Renew(prv, id, service) {
        return _super.call(this, "renew", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.26 (Release 8.12)</p><p>Renews an existent subscription by ID by posting request with an empty body..</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    Renew.prototype.post = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.26 (Release 8.12)</p><p>Renews an existent subscription by ID by posting request with an empty body..</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    Renew.prototype.postRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    return Renew;
}(PathSegment_1.default));
exports.default = Renew;
//# sourceMappingURL=Renew.js.map