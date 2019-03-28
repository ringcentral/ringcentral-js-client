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
var Check_1 = __importDefault(require("./Check"));
var AuthzProfile = /** @class */ (function (_super) {
    __extends(AuthzProfile, _super);
    function AuthzProfile(prv, id, service) {
        return _super.call(this, "authz-profile", id, prv, service) || this;
    }
    /**
     *
     */
    AuthzProfile.prototype.check = function (id) {
        return new Check_1.default(this, id);
    };
    /**
     *
     */
    AuthzProfile.prototype.get = function () {
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
     *
     *  return {ApiResponse}
     */
    AuthzProfile.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return AuthzProfile;
}(PathSegment_1.default));
exports.default = AuthzProfile;
//# sourceMappingURL=AuthzProfile.js.map