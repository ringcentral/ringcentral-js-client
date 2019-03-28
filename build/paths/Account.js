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
var Extension_1 = __importDefault(require("./Extension"));
var CallLog_1 = __importDefault(require("./CallLog"));
var CallLogSync_1 = __importDefault(require("./CallLogSync"));
var ActiveCalls_1 = __importDefault(require("./ActiveCalls"));
var Recording_1 = __importDefault(require("./Recording"));
var Directory_1 = __importDefault(require("./Directory"));
var Bot_1 = __importDefault(require("./Bot"));
var Presence_1 = __importDefault(require("./Presence"));
var BusinessHours_1 = __importDefault(require("./BusinessHours"));
var Greeting_1 = __importDefault(require("./Greeting"));
var AnsweringRule_1 = __importDefault(require("./AnsweringRule"));
var IvrMenus_1 = __importDefault(require("./IvrMenus"));
var IvrPrompts_1 = __importDefault(require("./IvrPrompts"));
var BusinessAddress_1 = __importDefault(require("./BusinessAddress"));
var ServiceInfo_1 = __importDefault(require("./ServiceInfo"));
var PhoneNumber_1 = __importDefault(require("./PhoneNumber"));
var Device_1 = __importDefault(require("./Device"));
var Licenses_1 = __importDefault(require("./Licenses"));
var Department_1 = __importDefault(require("./Department"));
var PagingOnlyGroups_1 = __importDefault(require("./PagingOnlyGroups"));
var ParkLocations_1 = __importDefault(require("./ParkLocations"));
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(prv, id, service) {
        return _super.call(this, "account", id || "~", prv, service) || this;
    }
    /**
     * Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
     */
    Account.prototype.extension = function (id) {
        return new Extension_1.default(this, id);
    };
    /**
     * Internal identifier of a call log record
     */
    Account.prototype.callLog = function (id) {
        return new CallLog_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.callLogSync = function (id) {
        return new CallLogSync_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.activeCalls = function (id) {
        return new ActiveCalls_1.default(this, id);
    };
    /**
     * Internal identifier of a recording (returned in Call Log)
     */
    Account.prototype.recording = function (id) {
        return new Recording_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.directory = function (id) {
        return new Directory_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.bot = function (id) {
        return new Bot_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.presence = function (id) {
        return new Presence_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.businessHours = function (id) {
        return new BusinessHours_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.greeting = function (id) {
        return new Greeting_1.default(this, id);
    };
    /**
     * Internal identifier of an answering rule. The value can be standard digital ID or specific ID - either business-hours-rule or after-hours-rule
     */
    Account.prototype.answeringRule = function (id) {
        return new AnsweringRule_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.ivrMenus = function (id) {
        return new IvrMenus_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.ivrPrompts = function (id) {
        return new IvrPrompts_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.businessAddress = function (id) {
        return new BusinessAddress_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.serviceInfo = function (id) {
        return new ServiceInfo_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.phoneNumber = function (id) {
        return new PhoneNumber_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.device = function (id) {
        return new Device_1.default(this, id);
    };
    /**
     * Internal identifier of a license
     */
    Account.prototype.licenses = function (id) {
        return new Licenses_1.default(this, id);
    };
    /**
     * Internal identifier of a Department extension (same as extensionId but only the ID of a department extension is valid)
     */
    Account.prototype.department = function (id) {
        return new Department_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.pagingOnlyGroups = function (id) {
        return new PagingOnlyGroups_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.parkLocations = function (id) {
        return new ParkLocations_1.default(this, id);
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular RingCentral customer account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    Account.prototype.get = function () {
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
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular RingCentral customer account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    Account.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Account;
}(PathSegment_1.default));
exports.default = Account;
//# sourceMappingURL=Account.js.map