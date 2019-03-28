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
var SipProvision_1 = __importDefault(require("./SipProvision"));
var CustomData_1 = __importDefault(require("./CustomData"));
var ClientInfo = /** @class */ (function (_super) {
    __extends(ClientInfo, _super);
    function ClientInfo(prv, id, service) {
        return _super.call(this, "client-info", id, prv, service) || this;
    }
    /**
     *
     */
    ClientInfo.prototype.sipProvision = function (id) {
        return new SipProvision_1.default(this, id);
    };
    /**
     *
     */
    ClientInfo.prototype.customData = function (id) {
        return new CustomData_1.default(this, id);
    };
    return ClientInfo;
}(PathSegment_1.default));
exports.default = ClientInfo;
//# sourceMappingURL=ClientInfo.js.map