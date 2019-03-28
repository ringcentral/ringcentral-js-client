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
var SipProvision = /** @class */ (function (_super) {
    __extends(SipProvision, _super);
    function SipProvision(prv, id, service) {
        return _super.call(this, "sip-provision", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.16 (Release 7.1)</p><p>Creates SIP registration of a device/application (WebPhone, Mobile, softphone)</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>VoipCalling</td><td>Registering as VoIP device and making VoIP calls</td></tr></tbody></table><h4>API Group</h4><p>Heavy</p>
     */
    SipProvision.prototype.post = function (body) {
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
     *  <p style='font-style:italic;'>Since 1.0.16 (Release 7.1)</p><p>Creates SIP registration of a device/application (WebPhone, Mobile, softphone)</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>VoipCalling</td><td>Registering as VoIP device and making VoIP calls</td></tr></tbody></table><h4>API Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    SipProvision.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    return SipProvision;
}(PathSegment_1.default));
exports.default = SipProvision;
//# sourceMappingURL=SipProvision.js.map