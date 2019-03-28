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
var ServiceProviderConfig_1 = __importDefault(require("./ServiceProviderConfig"));
var Users_1 = __importDefault(require("./Users"));
var V2 = /** @class */ (function (_super) {
    __extends(V2, _super);
    function V2(prv, id, service) {
        return _super.call(this, "v2", id, prv, service) || this;
    }
    /**
     *
     */
    V2.prototype.serviceProviderConfig = function (id) {
        return new ServiceProviderConfig_1.default(this, id);
    };
    /**
     * Internal identifier of a user
     */
    V2.prototype.users = function (id) {
        return new Users_1.default(this, id);
    };
    return V2;
}(PathSegment_1.default));
exports.default = V2;
//# sourceMappingURL=V2.js.map