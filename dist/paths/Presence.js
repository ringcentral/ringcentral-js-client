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
var Presence = /** @class */ (function (_super) {
    __extends(Presence, _super);
    function Presence(prv, id, service) {
        return _super.call(this, "presence", id, prv, service) || this;
    }
    /**
     *
     */
    Presence.prototype.list = function () {
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
     *
     *  return {ApiResponse}
     */
    Presence.prototype.listRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.2</p><p>Returns presence status of an extension or several extensions by their ID(s). Batch request is supported, see Batch Requests for details.The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not returned at all) for the following extension types: Department/Announcement Only/Take Messages Only (Voicemail)/Fax User/Paging Only Group/Shared Lines Group/IVR Menu/Application Extension/Park Location.If the user requests his/her own presence status, the response contains actual presence status even if the status publication is turned off.Batch request is supported. For batch requests the number of extensions in one request is limited to 30. If more extensions are included in the request, the error code 400 Bad Request is returned with the logical error code InvalidMultipartRequest and the corresponding message 'Extension Presence Info multipart request is limited to 30 extensions'.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadPresence</td><td>Getting user presence information</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    Presence.prototype.get = function () {
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
     *  <p style='font-style:italic;'>Since 1.0.2</p><p>Returns presence status of an extension or several extensions by their ID(s). Batch request is supported, see Batch Requests for details.The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not returned at all) for the following extension types: Department/Announcement Only/Take Messages Only (Voicemail)/Fax User/Paging Only Group/Shared Lines Group/IVR Menu/Application Extension/Park Location.If the user requests his/her own presence status, the response contains actual presence status even if the status publication is turned off.Batch request is supported. For batch requests the number of extensions in one request is limited to 30. If more extensions are included in the request, the error code 400 Bad Request is returned with the logical error code InvalidMultipartRequest and the corresponding message 'Extension Presence Info multipart request is limited to 30 extensions'.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadPresence</td><td>Getting user presence information</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    Presence.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *
     */
    Presence.prototype.put = function (body) {
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
     *
     *  return {ApiResponse}
     */
    Presence.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return Presence;
}(PathSegment_1.default));
exports.default = Presence;
//# sourceMappingURL=Presence.js.map