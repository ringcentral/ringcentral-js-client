(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Client"] = factory();
	else
		root["RingCentral"] = root["RingCentral"] || {}, root["RingCentral"]["Client"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="./externals.d.ts" />
var accountClient = __webpack_require__(2);
var versioningClient = __webpack_require__(26);
var callLogClient = __webpack_require__(30);
var dictionaryClient = __webpack_require__(41);
var extensionClient = __webpack_require__(49);
var messagesClient = __webpack_require__(51);
var notificationsClient = __webpack_require__(56);
var presenceClient = __webpack_require__(59);
var ringoutClient = __webpack_require__(62);
var Client = (function () {
    function Client(sdk) {
        this._sdk = sdk;
        this._account = new accountClient.Account(sdk);
        this._versioning = new versioningClient.APIVersions(sdk);
        this._callLog = new callLogClient.CallLog(sdk);
        this._dictionary = new dictionaryClient.Dictionary(sdk);
        this._extension = new extensionClient.Extension(sdk);
        this._messages = new messagesClient.Messages(sdk);
        this._notifications = new notificationsClient.NotificationsSubscriptionAPI(sdk);
        this._presence = new presenceClient.Presence(sdk);
        this._ringout = new ringoutClient.RingOut(sdk);
    }
    Client.prototype.account = function () { return this._account; };
    Client.prototype.versioning = function () { return this._versioning; };
    Client.prototype.callLog = function () { return this._callLog; };
    Client.prototype.dictionary = function () { return this._dictionary; };
    Client.prototype.extension = function () { return this._extension; };
    Client.prototype.messages = function () { return this._messages; };
    Client.prototype.notifications = function () { return this._notifications; };
    Client.prototype.presence = function () { return this._presence; };
    Client.prototype.ringout = function () { return this._ringout; };
    Client.version = '0.1.0';
    return Client;
})();
module.exports = Client;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var getaccountinforesponse = __webpack_require__(4);
var Account = (function (_super) {
    __extends(Account, _super);
    function Account() {
        _super.apply(this, arguments);
    }
    /**
     * Get Account Info
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns basic information about a particular RingCentral customer account.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Account.prototype.load = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}', options, exports.loadOptions), getaccountinforesponse.GetAccountInfoResponse);
    };
    return Account;
})(client.Client);
exports.Account = Account;
/**
 * Definition of options for load operation
 */
exports.loadOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];


/***/ },
/* 3 */
/***/ function(module, exports) {

/// <reference path="../externals.d.ts" />
var Client = (function () {
    function Client(sdk) {
        this._sdk = sdk;
    }
    Client.prototype.parseOptions = function (method, url, options, operationParameters) {
        options = options || {};
        var request = {
            url: url,
            method: method,
            query: {},
            body: null
        };
        operationParameters.forEach(function (param) {
            if (param.required && !param.default && !options.hasOwnProperty(param.name)) {
                throw new Error('Required parameter "' + param.name + '" not found');
            }
            if (param.default && !options.hasOwnProperty(param.name)) {
                options[param.name] = param.default;
            }
            if (param.in == 'path') {
                request.url = request.url.replace('{' + param.name + '}', options[param.name]);
            }
            if (param.in == 'query' && options.hasOwnProperty(param.name)) {
                request.query[param.name] = options[param.name];
            }
            if (param.in == 'body') {
                request.body = options[param.name];
            }
        });
        return request;
    };
    Client.prototype.send = function (apiOptions, Class) {
        var _this = this;
        return this._sdk.platform()
            .send(apiOptions)
            .then(function (res) {
            //TODO Support multipart
            //TODO Think how to pass headers&stuff to outside
            if (Class && !res._isMultipart())
                return new Class(_this._sdk, res.json());
            return res;
        });
    };
    return Client;
})();
exports.Client = Client;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var getextensioninforesponse = __webpack_require__(6);
var serviceinforesponse = __webpack_require__(20);
var accountstatusinfo = __webpack_require__(25);
var GetAccountInfoResponse = (function (_super) {
    __extends(GetAccountInfoResponse, _super);
    function GetAccountInfoResponse() {
        _super.apply(this, arguments);
    }
    GetAccountInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mainNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'operator', Class: getextensioninforesponse.GetExtensionInfoResponse, isArray: false, isRequired: false },
            { property: 'partnerId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serviceInfo', Class: serviceinforesponse.ServiceInfoResponse, isArray: false, isRequired: false },
            { property: 'setupWizardState', Class: GetAccountInfoResponseSetupWizardState, isArray: false, isRequired: false },
            { property: 'status', Class: GetAccountInfoResponseStatus, isArray: false, isRequired: false },
            { property: 'statusInfo', Class: accountstatusinfo.AccountStatusInfo, isArray: false, isRequired: false }
        ];
    };
    GetAccountInfoResponse.prototype.getClassName = function () {
        return 'GetAccountInfoResponse';
    };
    return GetAccountInfoResponse;
})(model.Model);
exports.GetAccountInfoResponse = GetAccountInfoResponse;
(function (GetAccountInfoResponseSetupWizardState) {
    GetAccountInfoResponseSetupWizardState[GetAccountInfoResponseSetupWizardState["NotStarted"] = 'NotStarted'] = "NotStarted";
    GetAccountInfoResponseSetupWizardState[GetAccountInfoResponseSetupWizardState["Incomplete"] = 'Incomplete'] = "Incomplete";
    GetAccountInfoResponseSetupWizardState[GetAccountInfoResponseSetupWizardState["Completed"] = 'Completed'] = "Completed";
})(exports.GetAccountInfoResponseSetupWizardState || (exports.GetAccountInfoResponseSetupWizardState = {}));
var GetAccountInfoResponseSetupWizardState = exports.GetAccountInfoResponseSetupWizardState;
(function (GetAccountInfoResponseStatus) {
    GetAccountInfoResponseStatus[GetAccountInfoResponseStatus["Confirmed"] = 'Confirmed'] = "Confirmed";
    GetAccountInfoResponseStatus[GetAccountInfoResponseStatus["Disabled"] = 'Disabled'] = "Disabled";
})(exports.GetAccountInfoResponseStatus || (exports.GetAccountInfoResponseStatus = {}));
var GetAccountInfoResponseStatus = exports.GetAccountInfoResponseStatus;


/***/ },
/* 5 */
/***/ function(module, exports) {

/// <reference path="../externals.d.ts" />
var Model = (function () {
    function Model(sdk, data) {
        var _this = this;
        this._sdk = sdk;
        data = data || {};
        this.getPropertyMappings().forEach(function (mapping) {
            var Class = mapping.Class, prop = mapping.property;
            if (!data.hasOwnProperty(prop)) {
                if (mapping.isRequired)
                    console.warn('Required property "' + prop + '" not defined');
                return;
            }
            var processProperty = function (dataPart) {
                if (!Class || typeof Class !== 'function') {
                    return dataPart;
                }
                else {
                    return new Class(_this._sdk, dataPart);
                }
            };
            if (mapping.isArray) {
                _this[prop] = data[prop].map(processProperty);
            }
            else {
                _this[prop] = processProperty(data[prop]);
            }
        });
    }
    Model.prototype.getPropertyMappings = function () {
        return [];
    };
    Model.prototype.getClassName = function () {
        return 'Model';
    };
    Model.prototype.getId = function () {
        return this['id'];
    };
    return Model;
})();
exports.Model = Model;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var contactinfo = __webpack_require__(7);
var departmentinfo = __webpack_require__(9);
var extensionpermissions = __webpack_require__(10);
var regionalsettingsinfo = __webpack_require__(12);
var extensionservicefeatureinfo = __webpack_require__(18);
var extensionstatusinfo = __webpack_require__(19);
var GetExtensionInfoResponse = (function (_super) {
    __extends(GetExtensionInfoResponse, _super);
    function GetExtensionInfoResponse() {
        _super.apply(this, arguments);
    }
    GetExtensionInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'contact', Class: contactinfo.ContactInfo, isArray: false, isRequired: false },
            { property: 'departments', Class: departmentinfo.DepartmentInfo, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'partnerId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'permissions', Class: extensionpermissions.ExtensionPermissions, isArray: false, isRequired: false },
            { property: 'regionalSettings', Class: regionalsettingsinfo.RegionalSettingsInfo, isArray: false, isRequired: false },
            { property: 'serviceFeatures', Class: extensionservicefeatureinfo.ExtensionServiceFeatureInfo, isArray: true, isRequired: false },
            { property: 'setupWizardState', Class: GetExtensionInfoResponseSetupWizardState, isArray: false, isRequired: false },
            { property: 'status', Class: GetExtensionInfoResponseStatus, isArray: false, isRequired: false },
            { property: 'statusInfo', Class: extensionstatusinfo.ExtensionStatusInfo, isArray: false, isRequired: false },
            { property: 'type', Class: GetExtensionInfoResponseType, isArray: false, isRequired: false }
        ];
    };
    GetExtensionInfoResponse.prototype.getClassName = function () {
        return 'GetExtensionInfoResponse';
    };
    return GetExtensionInfoResponse;
})(model.Model);
exports.GetExtensionInfoResponse = GetExtensionInfoResponse;
(function (GetExtensionInfoResponseSetupWizardState) {
    GetExtensionInfoResponseSetupWizardState[GetExtensionInfoResponseSetupWizardState["NotStarted"] = 'NotStarted'] = "NotStarted";
    GetExtensionInfoResponseSetupWizardState[GetExtensionInfoResponseSetupWizardState["Incomplete"] = 'Incomplete'] = "Incomplete";
    GetExtensionInfoResponseSetupWizardState[GetExtensionInfoResponseSetupWizardState["Completed"] = 'Completed'] = "Completed";
})(exports.GetExtensionInfoResponseSetupWizardState || (exports.GetExtensionInfoResponseSetupWizardState = {}));
var GetExtensionInfoResponseSetupWizardState = exports.GetExtensionInfoResponseSetupWizardState;
(function (GetExtensionInfoResponseStatus) {
    GetExtensionInfoResponseStatus[GetExtensionInfoResponseStatus["Enabled"] = 'Enabled'] = "Enabled";
    GetExtensionInfoResponseStatus[GetExtensionInfoResponseStatus["Disabled"] = 'Disabled'] = "Disabled";
    GetExtensionInfoResponseStatus[GetExtensionInfoResponseStatus["NotActivated"] = 'NotActivated'] = "NotActivated";
    GetExtensionInfoResponseStatus[GetExtensionInfoResponseStatus["Unassigned"] = 'Unassigned'] = "Unassigned";
})(exports.GetExtensionInfoResponseStatus || (exports.GetExtensionInfoResponseStatus = {}));
var GetExtensionInfoResponseStatus = exports.GetExtensionInfoResponseStatus;
(function (GetExtensionInfoResponseType) {
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["User"] = 'User'] = "User";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["FaxUser"] = 'Fax User'] = "FaxUser";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["VirtualUser"] = 'VirtualUser'] = "VirtualUser";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["DigitalUser"] = 'DigitalUser'] = "DigitalUser";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["Department"] = 'Department'] = "Department";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["Announcement"] = 'Announcement'] = "Announcement";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["Voicemail"] = 'Voicemail'] = "Voicemail";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["SharedLinesGroup"] = 'SharedLinesGroup'] = "SharedLinesGroup";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["PagingOnly"] = 'PagingOnly'] = "PagingOnly";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["IvrMenu"] = 'IvrMenu'] = "IvrMenu";
    GetExtensionInfoResponseType[GetExtensionInfoResponseType["ApplicationExtension"] = 'ApplicationExtension'] = "ApplicationExtension";
})(exports.GetExtensionInfoResponseType || (exports.GetExtensionInfoResponseType = {}));
var GetExtensionInfoResponseType = exports.GetExtensionInfoResponseType;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var contactaddressinfo = __webpack_require__(8);
var ContactInfo = (function (_super) {
    __extends(ContactInfo, _super);
    function ContactInfo() {
        _super.apply(this, arguments);
    }
    ContactInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'firstName', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'lastName', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'company', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'email', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'businessPhone', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'businessAddress', Class: contactaddressinfo.ContactAddressInfo, isArray: false, isRequired: false }
        ];
    };
    ContactInfo.prototype.getClassName = function () {
        return 'ContactInfo';
    };
    return ContactInfo;
})(model.Model);
exports.ContactInfo = ContactInfo;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ContactAddressInfo = (function (_super) {
    __extends(ContactAddressInfo, _super);
    function ContactAddressInfo() {
        _super.apply(this, arguments);
    }
    ContactAddressInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'country', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'state', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'city', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'street', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'zip', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    ContactAddressInfo.prototype.getClassName = function () {
        return 'ContactAddressInfo';
    };
    return ContactAddressInfo;
})(model.Model);
exports.ContactAddressInfo = ContactAddressInfo;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var DepartmentInfo = (function (_super) {
    __extends(DepartmentInfo, _super);
    function DepartmentInfo() {
        _super.apply(this, arguments);
    }
    DepartmentInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    DepartmentInfo.prototype.getClassName = function () {
        return 'DepartmentInfo';
    };
    return DepartmentInfo;
})(model.Model);
exports.DepartmentInfo = DepartmentInfo;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var permissioninfo = __webpack_require__(11);
var ExtensionPermissions = (function (_super) {
    __extends(ExtensionPermissions, _super);
    function ExtensionPermissions() {
        _super.apply(this, arguments);
    }
    ExtensionPermissions.prototype.getPropertyMappings = function () {
        return [
            { property: 'admin', Class: permissioninfo.PermissionInfo, isArray: false, isRequired: false },
            { property: 'internationalCalling', Class: permissioninfo.PermissionInfo, isArray: false, isRequired: false }
        ];
    };
    ExtensionPermissions.prototype.getClassName = function () {
        return 'ExtensionPermissions';
    };
    return ExtensionPermissions;
})(model.Model);
exports.ExtensionPermissions = ExtensionPermissions;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var PermissionInfo = (function (_super) {
    __extends(PermissionInfo, _super);
    function PermissionInfo() {
        _super.apply(this, arguments);
    }
    PermissionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'enabled', Class: null /* boolean */, isArray: false, isRequired: false }
        ];
    };
    PermissionInfo.prototype.getClassName = function () {
        return 'PermissionInfo';
    };
    return PermissionInfo;
})(model.Model);
exports.PermissionInfo = PermissionInfo;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var countryinfo = __webpack_require__(13);
var timezoneinfo = __webpack_require__(14);
var languageinfo = __webpack_require__(15);
var greetinglanguageinfo = __webpack_require__(16);
var formattinglocaleinfo = __webpack_require__(17);
var RegionalSettingsInfo = (function (_super) {
    __extends(RegionalSettingsInfo, _super);
    function RegionalSettingsInfo() {
        _super.apply(this, arguments);
    }
    RegionalSettingsInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'homeCountry', Class: countryinfo.CountryInfo, isArray: false, isRequired: false },
            { property: 'timezone', Class: timezoneinfo.TimezoneInfo, isArray: false, isRequired: false },
            { property: 'language', Class: languageinfo.LanguageInfo, isArray: false, isRequired: false },
            { property: 'greetingLanguage', Class: greetinglanguageinfo.GreetingLanguageInfo, isArray: false, isRequired: false },
            { property: 'formattingLocale', Class: formattinglocaleinfo.FormattingLocaleInfo, isArray: false, isRequired: false }
        ];
    };
    RegionalSettingsInfo.prototype.getClassName = function () {
        return 'RegionalSettingsInfo';
    };
    return RegionalSettingsInfo;
})(model.Model);
exports.RegionalSettingsInfo = RegionalSettingsInfo;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var CountryInfo = (function (_super) {
    __extends(CountryInfo, _super);
    function CountryInfo() {
        _super.apply(this, arguments);
    }
    CountryInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'callingCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'isoCode', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    CountryInfo.prototype.getClassName = function () {
        return 'CountryInfo';
    };
    return CountryInfo;
})(model.Model);
exports.CountryInfo = CountryInfo;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var TimezoneInfo = (function (_super) {
    __extends(TimezoneInfo, _super);
    function TimezoneInfo() {
        _super.apply(this, arguments);
    }
    TimezoneInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'description', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    TimezoneInfo.prototype.getClassName = function () {
        return 'TimezoneInfo';
    };
    return TimezoneInfo;
})(model.Model);
exports.TimezoneInfo = TimezoneInfo;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var LanguageInfo = (function (_super) {
    __extends(LanguageInfo, _super);
    function LanguageInfo() {
        _super.apply(this, arguments);
    }
    LanguageInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'greeting', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'formattingLocale', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'localeCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'ui', Class: null /* boolean */, isArray: false, isRequired: false }
        ];
    };
    LanguageInfo.prototype.getClassName = function () {
        return 'LanguageInfo';
    };
    return LanguageInfo;
})(model.Model);
exports.LanguageInfo = LanguageInfo;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var GreetingLanguageInfo = (function (_super) {
    __extends(GreetingLanguageInfo, _super);
    function GreetingLanguageInfo() {
        _super.apply(this, arguments);
    }
    GreetingLanguageInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'localeCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    GreetingLanguageInfo.prototype.getClassName = function () {
        return 'GreetingLanguageInfo';
    };
    return GreetingLanguageInfo;
})(model.Model);
exports.GreetingLanguageInfo = GreetingLanguageInfo;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var FormattingLocaleInfo = (function (_super) {
    __extends(FormattingLocaleInfo, _super);
    function FormattingLocaleInfo() {
        _super.apply(this, arguments);
    }
    FormattingLocaleInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'localeCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    FormattingLocaleInfo.prototype.getClassName = function () {
        return 'FormattingLocaleInfo';
    };
    return FormattingLocaleInfo;
})(model.Model);
exports.FormattingLocaleInfo = FormattingLocaleInfo;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ExtensionServiceFeatureInfo = (function (_super) {
    __extends(ExtensionServiceFeatureInfo, _super);
    function ExtensionServiceFeatureInfo() {
        _super.apply(this, arguments);
    }
    ExtensionServiceFeatureInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'enabled', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'featureName', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'reason', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    ExtensionServiceFeatureInfo.prototype.getClassName = function () {
        return 'ExtensionServiceFeatureInfo';
    };
    return ExtensionServiceFeatureInfo;
})(model.Model);
exports.ExtensionServiceFeatureInfo = ExtensionServiceFeatureInfo;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ExtensionStatusInfo = (function (_super) {
    __extends(ExtensionStatusInfo, _super);
    function ExtensionStatusInfo() {
        _super.apply(this, arguments);
    }
    ExtensionStatusInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'comment', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'reason', Class: ExtensionStatusInfoReason, isArray: false, isRequired: false }
        ];
    };
    ExtensionStatusInfo.prototype.getClassName = function () {
        return 'ExtensionStatusInfo';
    };
    return ExtensionStatusInfo;
})(model.Model);
exports.ExtensionStatusInfo = ExtensionStatusInfo;
(function (ExtensionStatusInfoReason) {
    ExtensionStatusInfoReason[ExtensionStatusInfoReason["Voluntarily"] = 'Voluntarily'] = "Voluntarily";
    ExtensionStatusInfoReason[ExtensionStatusInfoReason["Involuntarily"] = 'Involuntarily'] = "Involuntarily";
})(exports.ExtensionStatusInfoReason || (exports.ExtensionStatusInfoReason = {}));
var ExtensionStatusInfoReason = exports.ExtensionStatusInfoReason;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var billingplaninfo = __webpack_require__(21);
var brandinfo = __webpack_require__(22);
var serviceplaninfo = __webpack_require__(23);
var targetserviceplaninfo = __webpack_require__(24);
var ServiceInfoResponse = (function (_super) {
    __extends(ServiceInfoResponse, _super);
    function ServiceInfoResponse() {
        _super.apply(this, arguments);
    }
    ServiceInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'billingPlan', Class: billingplaninfo.BillingPlanInfo, isArray: false, isRequired: false },
            { property: 'brand', Class: brandinfo.BrandInfo, isArray: false, isRequired: false },
            { property: 'servicePlan', Class: serviceplaninfo.ServicePlanInfo, isArray: false, isRequired: false },
            { property: 'targetServicePlan', Class: targetserviceplaninfo.TargetServicePlanInfo, isArray: false, isRequired: false }
        ];
    };
    ServiceInfoResponse.prototype.getClassName = function () {
        return 'ServiceInfoResponse';
    };
    return ServiceInfoResponse;
})(model.Model);
exports.ServiceInfoResponse = ServiceInfoResponse;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var BillingPlanInfo = (function (_super) {
    __extends(BillingPlanInfo, _super);
    function BillingPlanInfo() {
        _super.apply(this, arguments);
    }
    BillingPlanInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'durationUnit', Class: BillingPlanInfoDurationUnit, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: BillingPlanInfoType, isArray: false, isRequired: false }
        ];
    };
    BillingPlanInfo.prototype.getClassName = function () {
        return 'BillingPlanInfo';
    };
    return BillingPlanInfo;
})(model.Model);
exports.BillingPlanInfo = BillingPlanInfo;
(function (BillingPlanInfoDurationUnit) {
    BillingPlanInfoDurationUnit[BillingPlanInfoDurationUnit["Month"] = 'Month'] = "Month";
    BillingPlanInfoDurationUnit[BillingPlanInfoDurationUnit["Day"] = 'Day'] = "Day";
})(exports.BillingPlanInfoDurationUnit || (exports.BillingPlanInfoDurationUnit = {}));
var BillingPlanInfoDurationUnit = exports.BillingPlanInfoDurationUnit;
(function (BillingPlanInfoType) {
    BillingPlanInfoType[BillingPlanInfoType["Initial"] = 'Initial'] = "Initial";
    BillingPlanInfoType[BillingPlanInfoType["Regular"] = 'Regular'] = "Regular";
    BillingPlanInfoType[BillingPlanInfoType["Suspended"] = 'Suspended'] = "Suspended";
    BillingPlanInfoType[BillingPlanInfoType["Trial"] = 'Trial'] = "Trial";
    BillingPlanInfoType[BillingPlanInfoType["TrialNoCC"] = 'TrialNoCC'] = "TrialNoCC";
    BillingPlanInfoType[BillingPlanInfoType["Free"] = 'Free'] = "Free";
})(exports.BillingPlanInfoType || (exports.BillingPlanInfoType = {}));
var BillingPlanInfoType = exports.BillingPlanInfoType;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var countryinfo = __webpack_require__(13);
var BrandInfo = (function (_super) {
    __extends(BrandInfo, _super);
    function BrandInfo() {
        _super.apply(this, arguments);
    }
    BrandInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'homeCountry', Class: countryinfo.CountryInfo, isArray: false, isRequired: false }
        ];
    };
    BrandInfo.prototype.getClassName = function () {
        return 'BrandInfo';
    };
    return BrandInfo;
})(model.Model);
exports.BrandInfo = BrandInfo;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ServicePlanInfo = (function (_super) {
    __extends(ServicePlanInfo, _super);
    function ServicePlanInfo() {
        _super.apply(this, arguments);
    }
    ServicePlanInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'edition', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    ServicePlanInfo.prototype.getClassName = function () {
        return 'ServicePlanInfo';
    };
    return ServicePlanInfo;
})(model.Model);
exports.ServicePlanInfo = ServicePlanInfo;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var TargetServicePlanInfo = (function (_super) {
    __extends(TargetServicePlanInfo, _super);
    function TargetServicePlanInfo() {
        _super.apply(this, arguments);
    }
    TargetServicePlanInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    TargetServicePlanInfo.prototype.getClassName = function () {
        return 'TargetServicePlanInfo';
    };
    return TargetServicePlanInfo;
})(model.Model);
exports.TargetServicePlanInfo = TargetServicePlanInfo;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var AccountStatusInfo = (function (_super) {
    __extends(AccountStatusInfo, _super);
    function AccountStatusInfo() {
        _super.apply(this, arguments);
    }
    AccountStatusInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'reason', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'comment', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'lifetime', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    AccountStatusInfo.prototype.getClassName = function () {
        return 'AccountStatusInfo';
    };
    return AccountStatusInfo;
})(model.Model);
exports.AccountStatusInfo = AccountStatusInfo;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var getversionsresponse = __webpack_require__(27);
var getversionresponse = __webpack_require__(29);
var APIVersions = (function (_super) {
    __extends(APIVersions, _super);
    function APIVersions() {
        _super.apply(this, arguments);
    }
    /**
     * Get API Versions
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns current API version(s) and server info.</p>
     */
    APIVersions.prototype.list = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/', options, exports.listOptions), getversionsresponse.GetVersionsResponse);
    };
    /**
     * Get Version Info
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns current API version info by apiVersion.</p>
     */
    APIVersions.prototype.load = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/{apiVersion}', options, exports.loadOptions), getversionresponse.GetVersionResponse);
    };
    return APIVersions;
})(client.Client);
exports.APIVersions = APIVersions;
/**
 * Definition of options for list operation
 */
exports.listOptions = [];
/**
 * Definition of options for load operation
 */
exports.loadOptions = [
    {
        "name": "apiVersion",
        "type": "string",
        "in": "path",
        "required": true
    }
];


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var versioninfo = __webpack_require__(28);
var GetVersionsResponse = (function (_super) {
    __extends(GetVersionsResponse, _super);
    function GetVersionsResponse() {
        _super.apply(this, arguments);
    }
    GetVersionsResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'apiVersions', Class: versioninfo.VersionInfo, isArray: true, isRequired: false },
            { property: 'serverVersion', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serverRevision', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    GetVersionsResponse.prototype.getClassName = function () {
        return 'GetVersionsResponse';
    };
    return GetVersionsResponse;
})(model.Model);
exports.GetVersionsResponse = GetVersionsResponse;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var VersionInfo = (function (_super) {
    __extends(VersionInfo, _super);
    function VersionInfo() {
        _super.apply(this, arguments);
    }
    VersionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'versionString', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'releaseDate', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uriString', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    VersionInfo.prototype.getClassName = function () {
        return 'VersionInfo';
    };
    return VersionInfo;
})(model.Model);
exports.VersionInfo = VersionInfo;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var GetVersionResponse = (function (_super) {
    __extends(GetVersionResponse, _super);
    function GetVersionResponse() {
        _super.apply(this, arguments);
    }
    GetVersionResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'versionString', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'releaseDate', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uriString', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    GetVersionResponse.prototype.getClassName = function () {
        return 'GetVersionResponse';
    };
    return GetVersionResponse;
})(model.Model);
exports.GetVersionResponse = GetVersionResponse;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var extensionactivecallsresponse = __webpack_require__(31);
var extensioncalllogresponse = __webpack_require__(38);
var getextensioncalllogrecordresponse = __webpack_require__(39);
var getcallrecordingresponse = __webpack_require__(40);
var CallLog = (function (_super) {
    __extends(CallLog, _super);
    function CallLog() {
        _super.apply(this, arguments);
    }
    /**
     * Get Active Calls
     *
     * <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p>
     * <p>Returns records of all extension calls that are in progress, ordered by start time in descending order.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.listActiveCalls = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls', options, exports.listActiveCallsOptions), extensionactivecallsresponse.ExtensionActiveCallsResponse);
    };
    /**
     * Get Call Log Records by Filter
     *
     * <p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p>
     * <p>Returns call log records filtered by the specified parameters.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.list = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log', options, exports.listOptions), extensioncalllogresponse.ExtensionCallLogResponse);
    };
    /**
     * Get Call Log Record
     *
     * <p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p>
     * <p>Returns individual call log record by callRecordId(s).</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.load = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}', options, exports.loadOptions), getextensioncalllogrecordresponse.GetExtensionCallLogRecordResponse);
    };
    /**
     * Get Call Recording
     *
     * <p style='font-style:italic;'>Since 1.0.18</p>
     * <p>Returns call recording metadata.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadCallRecording</td>
     *             <td>Downloading call recording content</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.loadRecording = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/recording/{recordingId}', options, exports.loadRecordingOptions), getcallrecordingresponse.GetCallRecordingResponse);
    };
    return CallLog;
})(client.Client);
exports.CallLog = CallLog;
/**
 * Definition of options for listActiveCalls operation
 */
exports.listActiveCallsOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "direction",
        "type": "IListActiveCallsDirection",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Inbound",
            "Outbound"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "type",
        "type": "IListActiveCallsType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Voice",
            "Fax"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for list operation
 */
exports.listOptions = [
    {
        "name": "accountId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionNumber",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "phoneNumber",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "direction",
        "type": "IListDirection",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Inbound",
            "Outbound"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "type",
        "type": "IListType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Voice",
            "Fax"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "view",
        "type": "IListView",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Simple",
            "Detailed"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "withRecording",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "dateTo",
        "type": "Date",
        "in": "query",
        "required": false
    },
    {
        "name": "dateFrom",
        "type": "Date",
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for load operation
 */
exports.loadOptions = [
    {
        "name": "accountId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "callRecordId",
        "type": "number",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for loadRecording operation
 */
exports.loadRecordingOptions = [
    {
        "name": "accountId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "recordingId",
        "type": "number",
        "in": "path",
        "required": true
    }
];
(function (IListActiveCallsDirection) {
    IListActiveCallsDirection[IListActiveCallsDirection["Inbound"] = 'Inbound'] = "Inbound";
    IListActiveCallsDirection[IListActiveCallsDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.IListActiveCallsDirection || (exports.IListActiveCallsDirection = {}));
var IListActiveCallsDirection = exports.IListActiveCallsDirection;
(function (IListActiveCallsType) {
    IListActiveCallsType[IListActiveCallsType["Voice"] = 'Voice'] = "Voice";
    IListActiveCallsType[IListActiveCallsType["Fax"] = 'Fax'] = "Fax";
})(exports.IListActiveCallsType || (exports.IListActiveCallsType = {}));
var IListActiveCallsType = exports.IListActiveCallsType;
(function (IListDirection) {
    IListDirection[IListDirection["Inbound"] = 'Inbound'] = "Inbound";
    IListDirection[IListDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.IListDirection || (exports.IListDirection = {}));
var IListDirection = exports.IListDirection;
(function (IListType) {
    IListType[IListType["Voice"] = 'Voice'] = "Voice";
    IListType[IListType["Fax"] = 'Fax'] = "Fax";
})(exports.IListType || (exports.IListType = {}));
var IListType = exports.IListType;
(function (IListView) {
    IListView[IListView["Simple"] = 'Simple'] = "Simple";
    IListView[IListView["Detailed"] = 'Detailed'] = "Detailed";
})(exports.IListView || (exports.IListView = {}));
var IListView = exports.IListView;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogrecord = __webpack_require__(32);
var navigationinfo = __webpack_require__(36);
var paginginfo = __webpack_require__(37);
var ExtensionActiveCallsResponse = (function (_super) {
    __extends(ExtensionActiveCallsResponse, _super);
    function ExtensionActiveCallsResponse() {
        _super.apply(this, arguments);
    }
    ExtensionActiveCallsResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: calllogrecord.CallLogRecord, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: false }
        ];
    };
    ExtensionActiveCallsResponse.prototype.getClassName = function () {
        return 'ExtensionActiveCallsResponse';
    };
    return ExtensionActiveCallsResponse;
})(model.Model);
exports.ExtensionActiveCallsResponse = ExtensionActiveCallsResponse;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogcallerinfo = __webpack_require__(33);
var recordinginfo = __webpack_require__(34);
var calllogrecordleginfo = __webpack_require__(35);
var CallLogRecord = (function (_super) {
    __extends(CallLogRecord, _super);
    function CallLogRecord() {
        _super.apply(this, arguments);
    }
    CallLogRecord.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'sessionId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'type', Class: CallLogRecordType, isArray: false, isRequired: false },
            { property: 'direction', Class: CallLogRecordDirection, isArray: false, isRequired: false },
            { property: 'action', Class: CallLogRecordAction, isArray: false, isRequired: false },
            { property: 'result', Class: CallLogRecordResult, isArray: false, isRequired: false },
            { property: 'startTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'transport', Class: CallLogRecordTransport, isArray: false, isRequired: false },
            { property: 'message', Class: null /* any */, isArray: false, isRequired: false },
            { property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false, isRequired: false },
            { property: 'billing', Class: CallLogRecordBilling, isArray: false, isRequired: false },
            { property: 'legs', Class: calllogrecordleginfo.CallLogRecordLegInfo, isArray: true, isRequired: true }
        ];
    };
    CallLogRecord.prototype.getClassName = function () {
        return 'CallLogRecord';
    };
    return CallLogRecord;
})(model.Model);
exports.CallLogRecord = CallLogRecord;
(function (CallLogRecordType) {
    CallLogRecordType[CallLogRecordType["Voice"] = 'Voice'] = "Voice";
    CallLogRecordType[CallLogRecordType["Fax"] = 'Fax'] = "Fax";
})(exports.CallLogRecordType || (exports.CallLogRecordType = {}));
var CallLogRecordType = exports.CallLogRecordType;
(function (CallLogRecordDirection) {
    CallLogRecordDirection[CallLogRecordDirection["Inbound"] = 'Inbound'] = "Inbound";
    CallLogRecordDirection[CallLogRecordDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.CallLogRecordDirection || (exports.CallLogRecordDirection = {}));
var CallLogRecordDirection = exports.CallLogRecordDirection;
(function (CallLogRecordAction) {
    CallLogRecordAction[CallLogRecordAction["Unknown"] = 'Unknown'] = "Unknown";
    CallLogRecordAction[CallLogRecordAction["PhoneCall"] = 'Phone Call'] = "PhoneCall";
    CallLogRecordAction[CallLogRecordAction["PhoneLogin"] = 'Phone Login'] = "PhoneLogin";
    CallLogRecordAction[CallLogRecordAction["IncomingFax"] = 'Incoming Fax'] = "IncomingFax";
    CallLogRecordAction[CallLogRecordAction["AcceptCall"] = 'Accept Call'] = "AcceptCall";
    CallLogRecordAction[CallLogRecordAction["FindMe"] = 'FindMe'] = "FindMe";
    CallLogRecordAction[CallLogRecordAction["FollowMe"] = 'FollowMe'] = "FollowMe";
    CallLogRecordAction[CallLogRecordAction["OutgoingFax"] = 'Outgoing Fax'] = "OutgoingFax";
    CallLogRecordAction[CallLogRecordAction["CallReturn"] = 'Call Return'] = "CallReturn";
    CallLogRecordAction[CallLogRecordAction["CallingCard"] = 'Calling Card'] = "CallingCard";
    CallLogRecordAction[CallLogRecordAction["RingDirectly"] = 'Ring Directly'] = "RingDirectly";
    CallLogRecordAction[CallLogRecordAction["RingOutWeb"] = 'RingOut Web'] = "RingOutWeb";
    CallLogRecordAction[CallLogRecordAction["VoIPCall"] = 'VoIP Call'] = "VoIPCall";
    CallLogRecordAction[CallLogRecordAction["RingOutPC"] = 'RingOut PC'] = "RingOutPC";
    CallLogRecordAction[CallLogRecordAction["RingMe"] = 'RingMe'] = "RingMe";
    CallLogRecordAction[CallLogRecordAction["Transfer"] = 'Transfer'] = "Transfer";
    CallLogRecordAction[CallLogRecordAction['411Info'] = '411 Info'] = '411Info';
    CallLogRecordAction[CallLogRecordAction["Emergency"] = 'Emergency'] = "Emergency";
    CallLogRecordAction[CallLogRecordAction['E911Update'] = 'E911 Update'] = 'E911Update';
    CallLogRecordAction[CallLogRecordAction["Support"] = 'Support'] = "Support";
    CallLogRecordAction[CallLogRecordAction["RingOutMobile"] = 'RingOut Mobile'] = "RingOutMobile";
})(exports.CallLogRecordAction || (exports.CallLogRecordAction = {}));
var CallLogRecordAction = exports.CallLogRecordAction;
(function (CallLogRecordResult) {
    CallLogRecordResult[CallLogRecordResult["Unknown"] = 'Unknown'] = "Unknown";
    CallLogRecordResult[CallLogRecordResult["ResultInProgress"] = 'ResultInProgress'] = "ResultInProgress";
    CallLogRecordResult[CallLogRecordResult["Missed"] = 'Missed'] = "Missed";
    CallLogRecordResult[CallLogRecordResult["Callaccepted"] = 'Call accepted'] = "Callaccepted";
    CallLogRecordResult[CallLogRecordResult["Voicemail"] = 'Voicemail'] = "Voicemail";
    CallLogRecordResult[CallLogRecordResult["Rejected"] = 'Rejected'] = "Rejected";
    CallLogRecordResult[CallLogRecordResult["Reply"] = 'Reply'] = "Reply";
    CallLogRecordResult[CallLogRecordResult["Received"] = 'Received'] = "Received";
    CallLogRecordResult[CallLogRecordResult["ReceiveError"] = 'Receive Error'] = "ReceiveError";
    CallLogRecordResult[CallLogRecordResult["FaxonDemand"] = 'Fax on Demand'] = "FaxonDemand";
    CallLogRecordResult[CallLogRecordResult["PartialReceive"] = 'Partial Receive'] = "PartialReceive";
    CallLogRecordResult[CallLogRecordResult["Blocked"] = 'Blocked'] = "Blocked";
    CallLogRecordResult[CallLogRecordResult['Callсonnected'] = 'Call сonnected'] = 'Callсonnected';
    CallLogRecordResult[CallLogRecordResult["NoAnswer"] = 'No Answer'] = "NoAnswer";
    CallLogRecordResult[CallLogRecordResult["Busy"] = 'Busy'] = "Busy";
    CallLogRecordResult[CallLogRecordResult["SendError"] = 'Send Error'] = "SendError";
    CallLogRecordResult[CallLogRecordResult["Sent"] = 'Sent'] = "Sent";
    CallLogRecordResult[CallLogRecordResult["Nofaxmachine"] = 'No fax machine'] = "Nofaxmachine";
    CallLogRecordResult[CallLogRecordResult["ResultEmpty"] = 'ResultEmpty'] = "ResultEmpty";
    CallLogRecordResult[CallLogRecordResult["Account"] = 'Account'] = "Account";
    CallLogRecordResult[CallLogRecordResult["Suspended"] = 'Suspended'] = "Suspended";
    CallLogRecordResult[CallLogRecordResult["CallFailed"] = 'Call Failed'] = "CallFailed";
    CallLogRecordResult[CallLogRecordResult["CallFailure"] = 'Call Failure'] = "CallFailure";
    CallLogRecordResult[CallLogRecordResult["InternalError"] = 'Internal Error'] = "InternalError";
    CallLogRecordResult[CallLogRecordResult["IPPhoneoffline"] = 'IP Phone offline'] = "IPPhoneoffline";
    CallLogRecordResult[CallLogRecordResult["RestrictedNumber"] = 'Restricted Number'] = "RestrictedNumber";
    CallLogRecordResult[CallLogRecordResult["WrongNumber"] = 'Wrong Number'] = "WrongNumber";
    CallLogRecordResult[CallLogRecordResult["Stopped"] = 'Stopped'] = "Stopped";
    CallLogRecordResult[CallLogRecordResult["Hangup"] = 'Hang up'] = "Hangup";
    CallLogRecordResult[CallLogRecordResult["PoorLineQuality"] = 'Poor Line Quality'] = "PoorLineQuality";
    CallLogRecordResult[CallLogRecordResult["PartiallySent"] = 'Partially Sent'] = "PartiallySent";
    CallLogRecordResult[CallLogRecordResult["InternationalDisabled"] = 'International Disabled'] = "InternationalDisabled";
    CallLogRecordResult[CallLogRecordResult["InternationalRestriction"] = 'International Restriction'] = "InternationalRestriction";
    CallLogRecordResult[CallLogRecordResult["Abandoned"] = 'Abandoned'] = "Abandoned";
    CallLogRecordResult[CallLogRecordResult["Declined"] = 'Declined'] = "Declined";
    CallLogRecordResult[CallLogRecordResult["FaxReceiptError"] = 'Fax Receipt Error'] = "FaxReceiptError";
    CallLogRecordResult[CallLogRecordResult["FaxSendError"] = 'Fax Send Error'] = "FaxSendError";
})(exports.CallLogRecordResult || (exports.CallLogRecordResult = {}));
var CallLogRecordResult = exports.CallLogRecordResult;
(function (CallLogRecordTransport) {
    CallLogRecordTransport[CallLogRecordTransport["PSTN"] = 'PSTN'] = "PSTN";
    CallLogRecordTransport[CallLogRecordTransport["VoIP"] = 'VoIP'] = "VoIP";
})(exports.CallLogRecordTransport || (exports.CallLogRecordTransport = {}));
var CallLogRecordTransport = exports.CallLogRecordTransport;
(function (CallLogRecordBilling) {
    CallLogRecordBilling[CallLogRecordBilling["costIncluded"] = 'costIncluded'] = "costIncluded";
    CallLogRecordBilling[CallLogRecordBilling["costPurchased"] = 'costPurchased'] = "costPurchased";
})(exports.CallLogRecordBilling || (exports.CallLogRecordBilling = {}));
var CallLogRecordBilling = exports.CallLogRecordBilling;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var CallLogCallerInfo = (function (_super) {
    __extends(CallLogCallerInfo, _super);
    function CallLogCallerInfo() {
        _super.apply(this, arguments);
    }
    CallLogCallerInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'phoneNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'location', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    CallLogCallerInfo.prototype.getClassName = function () {
        return 'CallLogCallerInfo';
    };
    return CallLogCallerInfo;
})(model.Model);
exports.CallLogCallerInfo = CallLogCallerInfo;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var RecordingInfo = (function (_super) {
    __extends(RecordingInfo, _super);
    function RecordingInfo() {
        _super.apply(this, arguments);
    }
    RecordingInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: RecordingInfoType, isArray: false, isRequired: false },
            { property: 'contentUri', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    RecordingInfo.prototype.getClassName = function () {
        return 'RecordingInfo';
    };
    return RecordingInfo;
})(model.Model);
exports.RecordingInfo = RecordingInfo;
(function (RecordingInfoType) {
    RecordingInfoType[RecordingInfoType["Automatic"] = 'Automatic'] = "Automatic";
    RecordingInfoType[RecordingInfoType["OnDemand"] = 'OnDemand'] = "OnDemand";
})(exports.RecordingInfoType || (exports.RecordingInfoType = {}));
var RecordingInfoType = exports.RecordingInfoType;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogcallerinfo = __webpack_require__(33);
var recordinginfo = __webpack_require__(34);
var CallLogRecordLegInfo = (function (_super) {
    __extends(CallLogRecordLegInfo, _super);
    function CallLogRecordLegInfo() {
        _super.apply(this, arguments);
    }
    CallLogRecordLegInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'startTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'type', Class: CallLogRecordLegInfoType, isArray: false, isRequired: false },
            { property: 'direction', Class: CallLogRecordLegInfoDirection, isArray: false, isRequired: false },
            { property: 'action', Class: CallLogRecordLegInfoAction, isArray: false, isRequired: false },
            { property: 'result', Class: CallLogRecordLegInfoResult, isArray: false, isRequired: false },
            { property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'transport', Class: CallLogRecordLegInfoTransport, isArray: false, isRequired: false },
            { property: 'message', Class: null /* any */, isArray: false, isRequired: false },
            { property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false, isRequired: false },
            { property: 'billing', Class: CallLogRecordLegInfoBilling, isArray: false, isRequired: false },
            { property: 'legType', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    CallLogRecordLegInfo.prototype.getClassName = function () {
        return 'CallLogRecordLegInfo';
    };
    return CallLogRecordLegInfo;
})(model.Model);
exports.CallLogRecordLegInfo = CallLogRecordLegInfo;
(function (CallLogRecordLegInfoType) {
    CallLogRecordLegInfoType[CallLogRecordLegInfoType["Voice"] = 'Voice'] = "Voice";
    CallLogRecordLegInfoType[CallLogRecordLegInfoType["Fax"] = 'Fax'] = "Fax";
})(exports.CallLogRecordLegInfoType || (exports.CallLogRecordLegInfoType = {}));
var CallLogRecordLegInfoType = exports.CallLogRecordLegInfoType;
(function (CallLogRecordLegInfoDirection) {
    CallLogRecordLegInfoDirection[CallLogRecordLegInfoDirection["Inbound"] = 'Inbound'] = "Inbound";
    CallLogRecordLegInfoDirection[CallLogRecordLegInfoDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.CallLogRecordLegInfoDirection || (exports.CallLogRecordLegInfoDirection = {}));
var CallLogRecordLegInfoDirection = exports.CallLogRecordLegInfoDirection;
(function (CallLogRecordLegInfoAction) {
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["Unknown"] = 'Unknown'] = "Unknown";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["PhoneCall"] = 'Phone Call'] = "PhoneCall";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["PhoneLogin"] = 'Phone Login'] = "PhoneLogin";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["IncomingFax"] = 'Incoming Fax'] = "IncomingFax";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["AcceptCall"] = 'Accept Call'] = "AcceptCall";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["FindMe"] = 'FindMe'] = "FindMe";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["FollowMe"] = 'FollowMe'] = "FollowMe";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["OutgoingFax"] = 'Outgoing Fax'] = "OutgoingFax";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["CallReturn"] = 'Call Return'] = "CallReturn";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["CallingCard"] = 'Calling Card'] = "CallingCard";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["RingDirectly"] = 'Ring Directly'] = "RingDirectly";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["RingOutWeb"] = 'RingOut Web'] = "RingOutWeb";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["VoIPCall"] = 'VoIP Call'] = "VoIPCall";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["RingOutPC"] = 'RingOut PC'] = "RingOutPC";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["RingMe"] = 'RingMe'] = "RingMe";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["Transfer"] = 'Transfer'] = "Transfer";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction['411Info'] = '411 Info'] = '411Info';
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["Emergency"] = 'Emergency'] = "Emergency";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction['E911Update'] = 'E911 Update'] = 'E911Update';
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["Support"] = 'Support'] = "Support";
    CallLogRecordLegInfoAction[CallLogRecordLegInfoAction["RingOutMobile"] = 'RingOut Mobile'] = "RingOutMobile";
})(exports.CallLogRecordLegInfoAction || (exports.CallLogRecordLegInfoAction = {}));
var CallLogRecordLegInfoAction = exports.CallLogRecordLegInfoAction;
(function (CallLogRecordLegInfoResult) {
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Unknown"] = 'Unknown'] = "Unknown";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["ResultInProgress"] = 'ResultInProgress'] = "ResultInProgress";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Missed"] = 'Missed'] = "Missed";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Callaccepted"] = 'Call accepted'] = "Callaccepted";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Voicemail"] = 'Voicemail'] = "Voicemail";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Rejected"] = 'Rejected'] = "Rejected";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Reply"] = 'Reply'] = "Reply";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Received"] = 'Received'] = "Received";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["ReceiveError"] = 'Receive Error'] = "ReceiveError";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["FaxonDemand"] = 'Fax on Demand'] = "FaxonDemand";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["PartialReceive"] = 'Partial Receive'] = "PartialReceive";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Blocked"] = 'Blocked'] = "Blocked";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult['Callсonnected'] = 'Call сonnected'] = 'Callсonnected';
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["NoAnswer"] = 'No Answer'] = "NoAnswer";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Busy"] = 'Busy'] = "Busy";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["SendError"] = 'Send Error'] = "SendError";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Sent"] = 'Sent'] = "Sent";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Nofaxmachine"] = 'No fax machine'] = "Nofaxmachine";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["ResultEmpty"] = 'ResultEmpty'] = "ResultEmpty";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Account"] = 'Account'] = "Account";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Suspended"] = 'Suspended'] = "Suspended";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["CallFailed"] = 'Call Failed'] = "CallFailed";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["CallFailure"] = 'Call Failure'] = "CallFailure";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["InternalError"] = 'Internal Error'] = "InternalError";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["IPPhoneoffline"] = 'IP Phone offline'] = "IPPhoneoffline";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["RestrictedNumber"] = 'Restricted Number'] = "RestrictedNumber";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["WrongNumber"] = 'Wrong Number'] = "WrongNumber";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Stopped"] = 'Stopped'] = "Stopped";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Hangup"] = 'Hang up'] = "Hangup";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["PoorLineQuality"] = 'Poor Line Quality'] = "PoorLineQuality";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["PartiallySent"] = 'Partially Sent'] = "PartiallySent";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["InternationalDisabled"] = 'International Disabled'] = "InternationalDisabled";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["InternationalRestriction"] = 'International Restriction'] = "InternationalRestriction";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Abandoned"] = 'Abandoned'] = "Abandoned";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Declined"] = 'Declined'] = "Declined";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["FaxReceiptError"] = 'Fax Receipt Error'] = "FaxReceiptError";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["FaxSendError"] = 'Fax Send Error'] = "FaxSendError";
})(exports.CallLogRecordLegInfoResult || (exports.CallLogRecordLegInfoResult = {}));
var CallLogRecordLegInfoResult = exports.CallLogRecordLegInfoResult;
(function (CallLogRecordLegInfoTransport) {
    CallLogRecordLegInfoTransport[CallLogRecordLegInfoTransport["PSTN"] = 'PSTN'] = "PSTN";
    CallLogRecordLegInfoTransport[CallLogRecordLegInfoTransport["VoIP"] = 'VoIP'] = "VoIP";
})(exports.CallLogRecordLegInfoTransport || (exports.CallLogRecordLegInfoTransport = {}));
var CallLogRecordLegInfoTransport = exports.CallLogRecordLegInfoTransport;
(function (CallLogRecordLegInfoBilling) {
    CallLogRecordLegInfoBilling[CallLogRecordLegInfoBilling["costIncluded"] = 'costIncluded'] = "costIncluded";
    CallLogRecordLegInfoBilling[CallLogRecordLegInfoBilling["costPurchased"] = 'costPurchased'] = "costPurchased";
})(exports.CallLogRecordLegInfoBilling || (exports.CallLogRecordLegInfoBilling = {}));
var CallLogRecordLegInfoBilling = exports.CallLogRecordLegInfoBilling;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var NavigationInfo = (function (_super) {
    __extends(NavigationInfo, _super);
    function NavigationInfo() {
        _super.apply(this, arguments);
    }
    NavigationInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'firstPage', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'nextPage', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'previousPage', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'lastPage', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    NavigationInfo.prototype.getClassName = function () {
        return 'NavigationInfo';
    };
    return NavigationInfo;
})(model.Model);
exports.NavigationInfo = NavigationInfo;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var PagingInfo = (function (_super) {
    __extends(PagingInfo, _super);
    function PagingInfo() {
        _super.apply(this, arguments);
    }
    PagingInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'page', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'perPage', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'pageStart', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'pageEnd', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'totalPages', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'totalElements', Class: null /* number */, isArray: false, isRequired: false }
        ];
    };
    PagingInfo.prototype.getClassName = function () {
        return 'PagingInfo';
    };
    return PagingInfo;
})(model.Model);
exports.PagingInfo = PagingInfo;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogrecord = __webpack_require__(32);
var paginginfo = __webpack_require__(37);
var navigationinfo = __webpack_require__(36);
var ExtensionCallLogResponse = (function (_super) {
    __extends(ExtensionCallLogResponse, _super);
    function ExtensionCallLogResponse() {
        _super.apply(this, arguments);
    }
    ExtensionCallLogResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: calllogrecord.CallLogRecord, isArray: true, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true }
        ];
    };
    ExtensionCallLogResponse.prototype.getClassName = function () {
        return 'ExtensionCallLogResponse';
    };
    return ExtensionCallLogResponse;
})(model.Model);
exports.ExtensionCallLogResponse = ExtensionCallLogResponse;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogcallerinfo = __webpack_require__(33);
var recordinginfo = __webpack_require__(34);
var GetExtensionCallLogRecordResponse = (function (_super) {
    __extends(GetExtensionCallLogRecordResponse, _super);
    function GetExtensionCallLogRecordResponse() {
        _super.apply(this, arguments);
    }
    GetExtensionCallLogRecordResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'sessionId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'type', Class: GetExtensionCallLogRecordResponseType, isArray: false, isRequired: false },
            { property: 'direction', Class: GetExtensionCallLogRecordResponseDirection, isArray: false, isRequired: false },
            { property: 'action', Class: GetExtensionCallLogRecordResponseAction, isArray: false, isRequired: false },
            { property: 'result', Class: GetExtensionCallLogRecordResponseResult, isArray: false, isRequired: false },
            { property: 'startTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false, isRequired: false }
        ];
    };
    GetExtensionCallLogRecordResponse.prototype.getClassName = function () {
        return 'GetExtensionCallLogRecordResponse';
    };
    return GetExtensionCallLogRecordResponse;
})(model.Model);
exports.GetExtensionCallLogRecordResponse = GetExtensionCallLogRecordResponse;
(function (GetExtensionCallLogRecordResponseType) {
    GetExtensionCallLogRecordResponseType[GetExtensionCallLogRecordResponseType["Voice"] = 'Voice'] = "Voice";
    GetExtensionCallLogRecordResponseType[GetExtensionCallLogRecordResponseType["Fax"] = 'Fax'] = "Fax";
})(exports.GetExtensionCallLogRecordResponseType || (exports.GetExtensionCallLogRecordResponseType = {}));
var GetExtensionCallLogRecordResponseType = exports.GetExtensionCallLogRecordResponseType;
(function (GetExtensionCallLogRecordResponseDirection) {
    GetExtensionCallLogRecordResponseDirection[GetExtensionCallLogRecordResponseDirection["Inbound"] = 'Inbound'] = "Inbound";
    GetExtensionCallLogRecordResponseDirection[GetExtensionCallLogRecordResponseDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.GetExtensionCallLogRecordResponseDirection || (exports.GetExtensionCallLogRecordResponseDirection = {}));
var GetExtensionCallLogRecordResponseDirection = exports.GetExtensionCallLogRecordResponseDirection;
(function (GetExtensionCallLogRecordResponseAction) {
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["Unknown"] = 'Unknown'] = "Unknown";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["PhoneCall"] = 'Phone Call'] = "PhoneCall";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["PhoneLogin"] = 'Phone Login'] = "PhoneLogin";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["IncomingFax"] = 'Incoming Fax'] = "IncomingFax";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["AcceptCall"] = 'Accept Call'] = "AcceptCall";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["FindMe"] = 'FindMe'] = "FindMe";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["FollowMe"] = 'FollowMe'] = "FollowMe";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["OutgoingFax"] = 'Outgoing Fax'] = "OutgoingFax";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["CallReturn"] = 'Call Return'] = "CallReturn";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["CallingCard"] = 'Calling Card'] = "CallingCard";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["RingDirectly"] = 'Ring Directly'] = "RingDirectly";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["RingOutWeb"] = 'RingOut Web'] = "RingOutWeb";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["VoIPCall"] = 'VoIP Call'] = "VoIPCall";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["RingOutPC"] = 'RingOut PC'] = "RingOutPC";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["RingMe"] = 'RingMe'] = "RingMe";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["Transfer"] = 'Transfer'] = "Transfer";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction['411Info'] = '411 Info'] = '411Info';
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["Emergency"] = 'Emergency'] = "Emergency";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction['E911Update'] = 'E911 Update'] = 'E911Update';
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["Support"] = 'Support'] = "Support";
    GetExtensionCallLogRecordResponseAction[GetExtensionCallLogRecordResponseAction["RingOutMobile"] = 'RingOut Mobile'] = "RingOutMobile";
})(exports.GetExtensionCallLogRecordResponseAction || (exports.GetExtensionCallLogRecordResponseAction = {}));
var GetExtensionCallLogRecordResponseAction = exports.GetExtensionCallLogRecordResponseAction;
(function (GetExtensionCallLogRecordResponseResult) {
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Unknown"] = 'Unknown'] = "Unknown";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["ResultInProgress"] = 'ResultInProgress'] = "ResultInProgress";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Missed"] = 'Missed'] = "Missed";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Callaccepted"] = 'Call accepted'] = "Callaccepted";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Voicemail"] = 'Voicemail'] = "Voicemail";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Rejected"] = 'Rejected'] = "Rejected";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Reply"] = 'Reply'] = "Reply";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Received"] = 'Received'] = "Received";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["ReceiveError"] = 'Receive Error'] = "ReceiveError";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["FaxonDemand"] = 'Fax on Demand'] = "FaxonDemand";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["PartialReceive"] = 'Partial Receive'] = "PartialReceive";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Blocked"] = 'Blocked'] = "Blocked";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult['Callсonnected'] = 'Call сonnected'] = 'Callсonnected';
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["NoAnswer"] = 'No Answer'] = "NoAnswer";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Busy"] = 'Busy'] = "Busy";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["SendError"] = 'Send Error'] = "SendError";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Sent"] = 'Sent'] = "Sent";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Nofaxmachine"] = 'No fax machine'] = "Nofaxmachine";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["ResultEmpty"] = 'ResultEmpty'] = "ResultEmpty";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Account"] = 'Account'] = "Account";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Suspended"] = 'Suspended'] = "Suspended";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["CallFailed"] = 'Call Failed'] = "CallFailed";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["CallFailure"] = 'Call Failure'] = "CallFailure";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["InternalError"] = 'Internal Error'] = "InternalError";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["IPPhoneoffline"] = 'IP Phone offline'] = "IPPhoneoffline";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["RestrictedNumber"] = 'Restricted Number'] = "RestrictedNumber";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["WrongNumber"] = 'Wrong Number'] = "WrongNumber";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Stopped"] = 'Stopped'] = "Stopped";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Hangup"] = 'Hang up'] = "Hangup";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["PoorLineQuality"] = 'Poor Line Quality'] = "PoorLineQuality";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["PartiallySent"] = 'Partially Sent'] = "PartiallySent";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["InternationalDisabled"] = 'International Disabled'] = "InternationalDisabled";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["InternationalRestriction"] = 'International Restriction'] = "InternationalRestriction";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Abandoned"] = 'Abandoned'] = "Abandoned";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["Declined"] = 'Declined'] = "Declined";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["FaxReceiptError"] = 'Fax Receipt Error'] = "FaxReceiptError";
    GetExtensionCallLogRecordResponseResult[GetExtensionCallLogRecordResponseResult["FaxSendError"] = 'Fax Send Error'] = "FaxSendError";
})(exports.GetExtensionCallLogRecordResponseResult || (exports.GetExtensionCallLogRecordResponseResult = {}));
var GetExtensionCallLogRecordResponseResult = exports.GetExtensionCallLogRecordResponseResult;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var GetCallRecordingResponse = (function (_super) {
    __extends(GetCallRecordingResponse, _super);
    function GetCallRecordingResponse() {
        _super.apply(this, arguments);
    }
    GetCallRecordingResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'contentUri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'contentType', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false }
        ];
    };
    GetCallRecordingResponse.prototype.getClassName = function () {
        return 'GetCallRecordingResponse';
    };
    return GetCallRecordingResponse;
})(model.Model);
exports.GetCallRecordingResponse = GetCallRecordingResponse;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var getcountrylistresponse = __webpack_require__(42);
var countryinfo = __webpack_require__(13);
var languageinfo = __webpack_require__(15);
var getlocationlistresponse = __webpack_require__(43);
var getstatelistresponse = __webpack_require__(45);
var getstateinforesponse = __webpack_require__(46);
var gettimezonelistresponse = __webpack_require__(47);
var gettimezoneinforesponse = __webpack_require__(48);
var Dictionary = (function (_super) {
    __extends(Dictionary, _super);
    function Dictionary() {
        _super.apply(this, arguments);
    }
    /**
     * Get Country List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all the countries available for calling.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listCountries = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/country', options, exports.listCountriesOptions), getcountrylistresponse.GetCountryListResponse);
    };
    /**
     * Get Country
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on the required country.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.loadCountry = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/country/{countryId}', options, exports.loadCountryOptions), countryinfo.CountryInfo);
    };
    /**
     * Get Language List
     *
     * <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p>
     * <p>Returns the information about supported languages.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listLanguages = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/language', options, exports.listLanguagesOptions), null);
    };
    /**
     * Get Language
     *
     * <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p>
     * <p>Returns language by its respective ID.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.loadLanguage = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/language/{languageId}', options, exports.loadLanguageOptions), languageinfo.LanguageInfo);
    };
    /**
     * Get Location List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all the available locations for the certain state.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listLocations = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/location', options, exports.listLocationsOptions), getlocationlistresponse.GetLocationListResponse);
    };
    /**
     * Get State List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all the states for the certain country.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listStates = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/state', options, exports.listStatesOptions), getstatelistresponse.GetStateListResponse);
    };
    /**
     * Get State
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on the required state.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.loadState = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/state/{stateId}', options, exports.loadStateOptions), getstateinforesponse.GetStateInfoResponse);
    };
    /**
     * Get Timezone List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all available timezones.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listTimezones = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/timezone', options, exports.listTimezonesOptions), gettimezonelistresponse.GetTimezoneListResponse);
    };
    /**
     * Get Timezone
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on the certain timezone.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.loadTimezone = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/timezone/{timezoneId}', options, exports.loadTimezoneOptions), gettimezoneinforesponse.GetTimezoneInfoResponse);
    };
    return Dictionary;
})(client.Client);
exports.Dictionary = Dictionary;
/**
 * Definition of options for listCountries operation
 */
exports.listCountriesOptions = [
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for loadCountry operation
 */
exports.loadCountryOptions = [
    {
        "name": "countryId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for listLanguages operation
 */
exports.listLanguagesOptions = [];
/**
 * Definition of options for loadLanguage operation
 */
exports.loadLanguageOptions = [];
/**
 * Definition of options for listLocations operation
 */
exports.listLocationsOptions = [
    {
        "name": "orderBy",
        "type": "IListLocationsOrderBy",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Npa",
            "City"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "stateId",
        "type": "string",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for listStates operation
 */
exports.listStatesOptions = [
    {
        "name": "countryId",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "withPhoneNumbers",
        "type": "boolean",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for loadState operation
 */
exports.loadStateOptions = [
    {
        "name": "stateId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for listTimezones operation
 */
exports.listTimezonesOptions = [
    {
        "name": "page",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "string",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for loadTimezone operation
 */
exports.loadTimezoneOptions = [
    {
        "name": "timezoneId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    }
];
(function (IListLocationsOrderBy) {
    IListLocationsOrderBy[IListLocationsOrderBy["Npa"] = 'Npa'] = "Npa";
    IListLocationsOrderBy[IListLocationsOrderBy["City"] = 'City'] = "City";
})(exports.IListLocationsOrderBy || (exports.IListLocationsOrderBy = {}));
var IListLocationsOrderBy = exports.IListLocationsOrderBy;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var countryinfo = __webpack_require__(13);
var navigationinfo = __webpack_require__(36);
var paginginfo = __webpack_require__(37);
var GetCountryListResponse = (function (_super) {
    __extends(GetCountryListResponse, _super);
    function GetCountryListResponse() {
        _super.apply(this, arguments);
    }
    GetCountryListResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: countryinfo.CountryInfo, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    GetCountryListResponse.prototype.getClassName = function () {
        return 'GetCountryListResponse';
    };
    return GetCountryListResponse;
})(model.Model);
exports.GetCountryListResponse = GetCountryListResponse;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var locationinfo = __webpack_require__(44);
var navigationinfo = __webpack_require__(36);
var paginginfo = __webpack_require__(37);
var GetLocationListResponse = (function (_super) {
    __extends(GetLocationListResponse, _super);
    function GetLocationListResponse() {
        _super.apply(this, arguments);
    }
    GetLocationListResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: locationinfo.LocationInfo, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: false }
        ];
    };
    GetLocationListResponse.prototype.getClassName = function () {
        return 'GetLocationListResponse';
    };
    return GetLocationListResponse;
})(model.Model);
exports.GetLocationListResponse = GetLocationListResponse;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var LocationInfo = (function (_super) {
    __extends(LocationInfo, _super);
    function LocationInfo() {
        _super.apply(this, arguments);
    }
    LocationInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'city', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'npa', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'nxx', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'state', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    LocationInfo.prototype.getClassName = function () {
        return 'LocationInfo';
    };
    return LocationInfo;
})(model.Model);
exports.LocationInfo = LocationInfo;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var getstateinforesponse = __webpack_require__(46);
var navigationinfo = __webpack_require__(36);
var paginginfo = __webpack_require__(37);
var GetStateListResponse = (function (_super) {
    __extends(GetStateListResponse, _super);
    function GetStateListResponse() {
        _super.apply(this, arguments);
    }
    GetStateListResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: getstateinforesponse.GetStateInfoResponse, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: false }
        ];
    };
    GetStateListResponse.prototype.getClassName = function () {
        return 'GetStateListResponse';
    };
    return GetStateListResponse;
})(model.Model);
exports.GetStateListResponse = GetStateListResponse;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var GetStateInfoResponse = (function (_super) {
    __extends(GetStateInfoResponse, _super);
    function GetStateInfoResponse() {
        _super.apply(this, arguments);
    }
    GetStateInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'country', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'isoCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    GetStateInfoResponse.prototype.getClassName = function () {
        return 'GetStateInfoResponse';
    };
    return GetStateInfoResponse;
})(model.Model);
exports.GetStateInfoResponse = GetStateInfoResponse;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var gettimezoneinforesponse = __webpack_require__(48);
var navigationinfo = __webpack_require__(36);
var paginginfo = __webpack_require__(37);
var GetTimezoneListResponse = (function (_super) {
    __extends(GetTimezoneListResponse, _super);
    function GetTimezoneListResponse() {
        _super.apply(this, arguments);
    }
    GetTimezoneListResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: gettimezoneinforesponse.GetTimezoneInfoResponse, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: false }
        ];
    };
    GetTimezoneListResponse.prototype.getClassName = function () {
        return 'GetTimezoneListResponse';
    };
    return GetTimezoneListResponse;
})(model.Model);
exports.GetTimezoneListResponse = GetTimezoneListResponse;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var GetTimezoneInfoResponse = (function (_super) {
    __extends(GetTimezoneInfoResponse, _super);
    function GetTimezoneInfoResponse() {
        _super.apply(this, arguments);
    }
    GetTimezoneInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'description', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    GetTimezoneInfoResponse.prototype.getClassName = function () {
        return 'GetTimezoneInfoResponse';
    };
    return GetTimezoneInfoResponse;
})(model.Model);
exports.GetTimezoneInfoResponse = GetTimezoneInfoResponse;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var getextensionlistresponse = __webpack_require__(50);
var getextensioninforesponse = __webpack_require__(6);
var Extension = (function (_super) {
    __extends(Extension, _super);
    function Extension() {
        _super.apply(this, arguments);
    }
    /**
     * Get Extension List
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    Extension.prototype.list = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension', options, exports.listOptions), getextensionlistresponse.GetExtensionListResponse);
    };
    /**
     * Get Extension Info
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns basic information about a particular extension of an account.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Extension.prototype.load = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}', options, exports.loadOptions), getextensioninforesponse.GetExtensionInfoResponse);
    };
    return Extension;
})(client.Client);
exports.Extension = Extension;
/**
 * Definition of options for list operation
 */
exports.listOptions = [
    {
        "name": "accountId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "status",
        "type": "IListStatus",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Enabled",
            "Disabled",
            "NotActivated",
            "Unassigned"
        ],
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for load operation
 */
exports.loadOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];
(function (IListStatus) {
    IListStatus[IListStatus["Enabled"] = 'Enabled'] = "Enabled";
    IListStatus[IListStatus["Disabled"] = 'Disabled'] = "Disabled";
    IListStatus[IListStatus["NotActivated"] = 'NotActivated'] = "NotActivated";
    IListStatus[IListStatus["Unassigned"] = 'Unassigned'] = "Unassigned";
})(exports.IListStatus || (exports.IListStatus = {}));
var IListStatus = exports.IListStatus;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var getextensioninforesponse = __webpack_require__(6);
var navigationinfo = __webpack_require__(36);
var paginginfo = __webpack_require__(37);
var GetExtensionListResponse = (function (_super) {
    __extends(GetExtensionListResponse, _super);
    function GetExtensionListResponse() {
        _super.apply(this, arguments);
    }
    GetExtensionListResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: getextensioninforesponse.GetExtensionInfoResponse, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: false }
        ];
    };
    GetExtensionListResponse.prototype.getClassName = function () {
        return 'GetExtensionListResponse';
    };
    return GetExtensionListResponse;
})(model.Model);
exports.GetExtensionListResponse = GetExtensionListResponse;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var getmessageinforesponse = __webpack_require__(52);
var getmessagelist = __webpack_require__(55);
var Messages = (function (_super) {
    __extends(Messages, _super);
    function Messages() {
        _super.apply(this, arguments);
    }
    /**
     * Create Pager Message
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Creates and sends a pager message.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>InternalMessages</td>
     *             <td>Sending and receiving intra-company text messages</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    Messages.prototype.createPager = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager', options, exports.createPagerOptions), getmessageinforesponse.GetMessageInfoResponse);
    };
    /**
     * Create Fax Message
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Creates and sends/resends new fax message. Resend can be done if sending failed.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>Faxes</td>
     *             <td>Sending and receiving faxes</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    Messages.prototype.createFax = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax', options, exports.createFaxOptions), getmessageinforesponse.GetMessageInfoResponse);
    };
    /**
     * Create SMS Message
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Creates and sends new SMS message.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>SMS</td>
     *             <td>Sending and receiving SMS (text) messages</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    Messages.prototype.createSms = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms', options, exports.createSmsOptions), getmessageinforesponse.GetMessageInfoResponse);
    };
    /**
     * Get Message List
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns the list of messages from an extension mailbox.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Messages.prototype.list = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store', options, exports.listOptions), getmessagelist.GetMessageList);
    };
    /**
     * Get Message Info
     *
     * <p style='font-style:italic;'></p>
     * <p></p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Messages.prototype.load = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, exports.loadOptions), getmessageinforesponse.GetMessageInfoResponse);
    };
    /**
     * Update Message
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Updates an individual message or several messages. Batch request is supported. Currently, only the message read status updating is supported.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>EditMessages</td>
     *             <td>Viewing and updating user messages</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    Messages.prototype.update = function (options) {
        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, exports.updateOptions), getmessageinforesponse.GetMessageInfoResponse);
    };
    /**
     * Delete Message
     *
     * <p style='font-style:italic;'></p>
     * <p>Deletes an individual message or several messages by the given message ID(s). Batch request is supported.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>EditMessages</td>
     *             <td>Viewing and updating user messages</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    Messages.prototype.remove = function (options) {
        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, exports.removeOptions), null);
    };
    /**
     * Get Message Attachment
     *
     * <p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p>
     * <p>Returns particular message attachment data as a media stream.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    Messages.prototype.loadContent = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}', options, exports.loadContentOptions), null);
    };
    return Messages;
})(client.Client);
exports.Messages = Messages;
/**
 * Definition of options for createPager operation
 */
exports.createPagerOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "body",
        "type": "createpagermessagerequest.CreatePagerMessageRequest",
        "in": "body",
        "required": true
    }
];
/**
 * Definition of options for createFax operation
 */
exports.createFaxOptions = [
    {
        "name": "accountId",
        "in": "path",
        "notes": "",
        "paramType": "path",
        "defaultValue": "~",
        "required": true,
        "allowMultiple": false,
        "type": "string"
    },
    {
        "name": "extensionId",
        "in": "path",
        "notes": "",
        "paramType": "path",
        "defaultValue": "~",
        "required": true,
        "allowMultiple": false,
        "type": "string"
    },
    {
        "name": "Content-Type",
        "in": "header",
        "default": "multipart/mixed; boundary=Boundary_1_14413901_1361871080888",
        "type": "string"
    },
    {
        "name": "Content-Length",
        "in": "header",
        "default": "",
        "type": "string"
    },
    {
        "name": "body",
        "in": "body",
        "consumes": [
            "multipart/mixed; boundary=Boundary_1_14413901_1361871080888"
        ],
        "default": "--Boundary_1_14413901_1361871080888\nContent-Type: application/json\n\n{\n  \"to\":[{\"phoneNumber\":\"18005630003\"}],\n  \"faxResolution\":\"High\",\n  \"sendTime\":\"2013-02-26T09:31:20.882Z\"\n}\n\n--Boundary_1_14413901_1361871080888\nContent-Type: text/plain\n\nHello, World!\n\n--Boundary_1_14413901_1361871080888--",
        "type": "string"
    }
];
/**
 * Definition of options for createSms operation
 */
exports.createSmsOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "body",
        "type": "createsmsmessage.CreateSMSMessage",
        "in": "body",
        "required": true
    }
];
/**
 * Definition of options for list operation
 */
exports.listOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "availability",
        "type": "IListAvailability",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Alive",
            "Deleted",
            "Purged"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "conversationId",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "dateFrom",
        "type": "Date",
        "in": "query",
        "required": false
    },
    {
        "name": "dateTo",
        "type": "Date",
        "in": "query",
        "required": false
    },
    {
        "name": "direction",
        "type": "IListDirection",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Inbound",
            "Outbound"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "messageType",
        "type": "IListMessageType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Fax",
            "SMS",
            "VoiceMail",
            "Pager",
            "Text"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "readStatus",
        "type": "IListReadStatus",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Read",
            "Unread"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "phoneNumber",
        "type": "string",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for load operation
 */
exports.loadOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "messageId",
        "type": "number",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for update operation
 */
exports.updateOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "messageId",
        "type": "number",
        "in": "path",
        "required": true
    },
    {
        "name": "body",
        "type": "updatemessagerequest.UpdateMessageRequest",
        "in": "body",
        "required": true
    }
];
/**
 * Definition of options for remove operation
 */
exports.removeOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "messageId",
        "type": "number",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for loadContent operation
 */
exports.loadContentOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "attachmentId",
        "type": "number",
        "in": "path",
        "required": true
    },
    {
        "name": "messageId",
        "type": "number",
        "in": "path",
        "required": true
    }
];
(function (IListAvailability) {
    IListAvailability[IListAvailability["Alive"] = 'Alive'] = "Alive";
    IListAvailability[IListAvailability["Deleted"] = 'Deleted'] = "Deleted";
    IListAvailability[IListAvailability["Purged"] = 'Purged'] = "Purged";
})(exports.IListAvailability || (exports.IListAvailability = {}));
var IListAvailability = exports.IListAvailability;
(function (IListDirection) {
    IListDirection[IListDirection["Inbound"] = 'Inbound'] = "Inbound";
    IListDirection[IListDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.IListDirection || (exports.IListDirection = {}));
var IListDirection = exports.IListDirection;
(function (IListMessageType) {
    IListMessageType[IListMessageType["Fax"] = 'Fax'] = "Fax";
    IListMessageType[IListMessageType["SMS"] = 'SMS'] = "SMS";
    IListMessageType[IListMessageType["VoiceMail"] = 'VoiceMail'] = "VoiceMail";
    IListMessageType[IListMessageType["Pager"] = 'Pager'] = "Pager";
    IListMessageType[IListMessageType["Text"] = 'Text'] = "Text";
})(exports.IListMessageType || (exports.IListMessageType = {}));
var IListMessageType = exports.IListMessageType;
(function (IListReadStatus) {
    IListReadStatus[IListReadStatus["Read"] = 'Read'] = "Read";
    IListReadStatus[IListReadStatus["Unread"] = 'Unread'] = "Unread";
})(exports.IListReadStatus || (exports.IListReadStatus = {}));
var IListReadStatus = exports.IListReadStatus;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var messageattachmentinfo = __webpack_require__(53);
var messagestorecallerinfo = __webpack_require__(54);
var GetMessageInfoResponse = (function (_super) {
    __extends(GetMessageInfoResponse, _super);
    function GetMessageInfoResponse() {
        _super.apply(this, arguments);
    }
    GetMessageInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'attachments', Class: messageattachmentinfo.MessageAttachmentInfo, isArray: true, isRequired: false },
            { property: 'availability', Class: GetMessageInfoResponseAvailability, isArray: false, isRequired: false },
            { property: 'conversationId', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'creationTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'deliveryErrorCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'direction', Class: GetMessageInfoResponseDirection, isArray: false, isRequired: false },
            { property: 'faxPageCount', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'faxResolution', Class: GetMessageInfoResponseFaxResolution, isArray: false, isRequired: false },
            { property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false, isRequired: false },
            { property: 'lastModifiedTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'messageStatus', Class: GetMessageInfoResponseMessageStatus, isArray: false, isRequired: false },
            { property: 'pgToDepartment', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'priority', Class: GetMessageInfoResponsePriority, isArray: false, isRequired: false },
            { property: 'readStatus', Class: GetMessageInfoResponseReadStatus, isArray: false, isRequired: false },
            { property: 'smsDeliveryTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'smsSendingAttemptsCount', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'subject', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false, isRequired: false },
            { property: 'type', Class: GetMessageInfoResponseType, isArray: false, isRequired: false },
            { property: 'vmTranscriptionStatus', Class: GetMessageInfoResponseVmTranscriptionStatus, isArray: false, isRequired: false }
        ];
    };
    GetMessageInfoResponse.prototype.getClassName = function () {
        return 'GetMessageInfoResponse';
    };
    return GetMessageInfoResponse;
})(model.Model);
exports.GetMessageInfoResponse = GetMessageInfoResponse;
(function (GetMessageInfoResponseAvailability) {
    GetMessageInfoResponseAvailability[GetMessageInfoResponseAvailability["Alive"] = 'Alive'] = "Alive";
    GetMessageInfoResponseAvailability[GetMessageInfoResponseAvailability["Deleted"] = 'Deleted'] = "Deleted";
    GetMessageInfoResponseAvailability[GetMessageInfoResponseAvailability["Purged"] = 'Purged'] = "Purged";
})(exports.GetMessageInfoResponseAvailability || (exports.GetMessageInfoResponseAvailability = {}));
var GetMessageInfoResponseAvailability = exports.GetMessageInfoResponseAvailability;
(function (GetMessageInfoResponseDirection) {
    GetMessageInfoResponseDirection[GetMessageInfoResponseDirection["Inbound"] = 'Inbound'] = "Inbound";
    GetMessageInfoResponseDirection[GetMessageInfoResponseDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.GetMessageInfoResponseDirection || (exports.GetMessageInfoResponseDirection = {}));
var GetMessageInfoResponseDirection = exports.GetMessageInfoResponseDirection;
(function (GetMessageInfoResponseFaxResolution) {
    GetMessageInfoResponseFaxResolution[GetMessageInfoResponseFaxResolution["High"] = 'High'] = "High";
    GetMessageInfoResponseFaxResolution[GetMessageInfoResponseFaxResolution["Low"] = 'Low'] = "Low";
})(exports.GetMessageInfoResponseFaxResolution || (exports.GetMessageInfoResponseFaxResolution = {}));
var GetMessageInfoResponseFaxResolution = exports.GetMessageInfoResponseFaxResolution;
(function (GetMessageInfoResponseMessageStatus) {
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["Queued"] = 'Queued'] = "Queued";
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["Sent"] = 'Sent'] = "Sent";
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["Delivered"] = 'Delivered'] = "Delivered";
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["DeliveryFailed"] = 'DeliveryFailed'] = "DeliveryFailed";
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["SendingFailed"] = 'SendingFailed'] = "SendingFailed";
    GetMessageInfoResponseMessageStatus[GetMessageInfoResponseMessageStatus["Received"] = 'Received'] = "Received";
})(exports.GetMessageInfoResponseMessageStatus || (exports.GetMessageInfoResponseMessageStatus = {}));
var GetMessageInfoResponseMessageStatus = exports.GetMessageInfoResponseMessageStatus;
(function (GetMessageInfoResponsePriority) {
    GetMessageInfoResponsePriority[GetMessageInfoResponsePriority["Normal"] = 'Normal'] = "Normal";
    GetMessageInfoResponsePriority[GetMessageInfoResponsePriority["High"] = 'High'] = "High";
})(exports.GetMessageInfoResponsePriority || (exports.GetMessageInfoResponsePriority = {}));
var GetMessageInfoResponsePriority = exports.GetMessageInfoResponsePriority;
(function (GetMessageInfoResponseReadStatus) {
    GetMessageInfoResponseReadStatus[GetMessageInfoResponseReadStatus["Read"] = 'Read'] = "Read";
    GetMessageInfoResponseReadStatus[GetMessageInfoResponseReadStatus["Unread"] = 'Unread'] = "Unread";
})(exports.GetMessageInfoResponseReadStatus || (exports.GetMessageInfoResponseReadStatus = {}));
var GetMessageInfoResponseReadStatus = exports.GetMessageInfoResponseReadStatus;
(function (GetMessageInfoResponseType) {
    GetMessageInfoResponseType[GetMessageInfoResponseType["Fax"] = 'Fax'] = "Fax";
    GetMessageInfoResponseType[GetMessageInfoResponseType["SMS"] = 'SMS'] = "SMS";
    GetMessageInfoResponseType[GetMessageInfoResponseType["VoiceMail"] = 'VoiceMail'] = "VoiceMail";
    GetMessageInfoResponseType[GetMessageInfoResponseType["Pager"] = 'Pager'] = "Pager";
    GetMessageInfoResponseType[GetMessageInfoResponseType["Text"] = 'Text'] = "Text";
})(exports.GetMessageInfoResponseType || (exports.GetMessageInfoResponseType = {}));
var GetMessageInfoResponseType = exports.GetMessageInfoResponseType;
(function (GetMessageInfoResponseVmTranscriptionStatus) {
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["NotAvailable"] = 'NotAvailable'] = "NotAvailable";
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["InProgress"] = 'InProgress'] = "InProgress";
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["TimedOut"] = 'TimedOut'] = "TimedOut";
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["Completed"] = 'Completed'] = "Completed";
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["CompletedPartially"] = 'CompletedPartially'] = "CompletedPartially";
    GetMessageInfoResponseVmTranscriptionStatus[GetMessageInfoResponseVmTranscriptionStatus["Failed"] = 'Failed'] = "Failed";
})(exports.GetMessageInfoResponseVmTranscriptionStatus || (exports.GetMessageInfoResponseVmTranscriptionStatus = {}));
var GetMessageInfoResponseVmTranscriptionStatus = exports.GetMessageInfoResponseVmTranscriptionStatus;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var MessageAttachmentInfo = (function (_super) {
    __extends(MessageAttachmentInfo, _super);
    function MessageAttachmentInfo() {
        _super.apply(this, arguments);
    }
    MessageAttachmentInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: MessageAttachmentInfoType, isArray: false, isRequired: false },
            { property: 'contentType', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'vmDuration', Class: null /* number */, isArray: false, isRequired: false }
        ];
    };
    MessageAttachmentInfo.prototype.getClassName = function () {
        return 'MessageAttachmentInfo';
    };
    return MessageAttachmentInfo;
})(model.Model);
exports.MessageAttachmentInfo = MessageAttachmentInfo;
(function (MessageAttachmentInfoType) {
    MessageAttachmentInfoType[MessageAttachmentInfoType["AutoRecording"] = 'AutoRecording'] = "AutoRecording";
    MessageAttachmentInfoType[MessageAttachmentInfoType["AutoTranscription"] = 'AutoTranscription'] = "AutoTranscription";
    MessageAttachmentInfoType[MessageAttachmentInfoType["Text"] = 'Text'] = "Text";
    MessageAttachmentInfoType[MessageAttachmentInfoType["SourceDocument"] = 'SourceDocument'] = "SourceDocument";
    MessageAttachmentInfoType[MessageAttachmentInfoType["RenderedDocument"] = 'RenderedDocument'] = "RenderedDocument";
})(exports.MessageAttachmentInfoType || (exports.MessageAttachmentInfoType = {}));
var MessageAttachmentInfoType = exports.MessageAttachmentInfoType;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var MessageStoreCallerInfo = (function (_super) {
    __extends(MessageStoreCallerInfo, _super);
    function MessageStoreCallerInfo() {
        _super.apply(this, arguments);
    }
    MessageStoreCallerInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: true },
            { property: 'location', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'messageStatus', Class: MessageStoreCallerInfoMessageStatus, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'phoneNumber', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    MessageStoreCallerInfo.prototype.getClassName = function () {
        return 'MessageStoreCallerInfo';
    };
    return MessageStoreCallerInfo;
})(model.Model);
exports.MessageStoreCallerInfo = MessageStoreCallerInfo;
(function (MessageStoreCallerInfoMessageStatus) {
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["Queued"] = 'Queued'] = "Queued";
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["Sent"] = 'Sent'] = "Sent";
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["Delivered"] = 'Delivered'] = "Delivered";
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["DeliveryFailed"] = 'DeliveryFailed'] = "DeliveryFailed";
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["SendingFailed"] = 'SendingFailed'] = "SendingFailed";
    MessageStoreCallerInfoMessageStatus[MessageStoreCallerInfoMessageStatus["Received"] = 'Received'] = "Received";
})(exports.MessageStoreCallerInfoMessageStatus || (exports.MessageStoreCallerInfoMessageStatus = {}));
var MessageStoreCallerInfoMessageStatus = exports.MessageStoreCallerInfoMessageStatus;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var getmessageinforesponse = __webpack_require__(52);
var navigationinfo = __webpack_require__(36);
var paginginfo = __webpack_require__(37);
var GetMessageList = (function (_super) {
    __extends(GetMessageList, _super);
    function GetMessageList() {
        _super.apply(this, arguments);
    }
    GetMessageList.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: getmessageinforesponse.GetMessageInfoResponse, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: false }
        ];
    };
    GetMessageList.prototype.getClassName = function () {
        return 'GetMessageList';
    };
    return GetMessageList;
})(model.Model);
exports.GetMessageList = GetMessageList;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var getsubscriptioninforesponse = __webpack_require__(57);
var NotificationsSubscriptionAPI = (function (_super) {
    __extends(NotificationsSubscriptionAPI, _super);
    function NotificationsSubscriptionAPI() {
        _super.apply(this, arguments);
    }
    /**
     * Create Subscription
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>Creates a new subscription. To call this method with APNS transport type you have to specify endpoint_id attribute in get token request at authorization.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    NotificationsSubscriptionAPI.prototype.create = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/subscription', options, exports.createOptions), getsubscriptioninforesponse.GetSubscriptionInfoResponse);
    };
    /**
     * Get Subscription
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>Returns the requested subscription.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    NotificationsSubscriptionAPI.prototype.load = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/subscription/{subscriptionId}', options, exports.loadOptions), getsubscriptioninforesponse.GetSubscriptionInfoResponse);
    };
    /**
     * Renew Subscription / Modify Event Filters
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>With empty request body - renews the existent subscription. If event filters specified - modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame
     *     of one subscription.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    NotificationsSubscriptionAPI.prototype.update = function (options) {
        return this.send(this.parseOptions('PUT', '/restapi/v1.0/subscription/{subscriptionId}', options, exports.updateOptions), getsubscriptioninforesponse.GetSubscriptionInfoResponse);
    };
    /**
     * Cancel Subscription
     *
     * <p style='font-style:italic;'></p>
     * <p>Cancels the existent subscription.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    NotificationsSubscriptionAPI.prototype.remove = function (options) {
        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/subscription/{subscriptionId}', options, exports.removeOptions), null);
    };
    return NotificationsSubscriptionAPI;
})(client.Client);
exports.NotificationsSubscriptionAPI = NotificationsSubscriptionAPI;
/**
 * Definition of options for create operation
 */
exports.createOptions = [
    {
        "name": "body",
        "type": "createsubscriptionrequest.CreateSubscriptionRequest",
        "in": "body",
        "required": true
    }
];
/**
 * Definition of options for load operation
 */
exports.loadOptions = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for update operation
 */
exports.updateOptions = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "body",
        "type": "modifysubscriptionrequest.ModifySubscriptionRequest",
        "in": "body",
        "required": true
    }
];
/**
 * Definition of options for remove operation
 */
exports.removeOptions = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    }
];


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var notificationdeliverymode = __webpack_require__(58);
var GetSubscriptionInfoResponse = (function (_super) {
    __extends(GetSubscriptionInfoResponse, _super);
    function GetSubscriptionInfoResponse() {
        _super.apply(this, arguments);
    }
    GetSubscriptionInfoResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'eventFilters', Class: null /* string[] */, isArray: true, isRequired: false },
            { property: 'expirationTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'expiresIn', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'status', Class: GetSubscriptionInfoResponseStatus, isArray: false, isRequired: false },
            { property: 'creationTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'deliveryMode', Class: notificationdeliverymode.NotificationDeliveryMode, isArray: false, isRequired: true }
        ];
    };
    GetSubscriptionInfoResponse.prototype.getClassName = function () {
        return 'GetSubscriptionInfoResponse';
    };
    return GetSubscriptionInfoResponse;
})(model.Model);
exports.GetSubscriptionInfoResponse = GetSubscriptionInfoResponse;
(function (GetSubscriptionInfoResponseStatus) {
    GetSubscriptionInfoResponseStatus[GetSubscriptionInfoResponseStatus["Active"] = 'Active'] = "Active";
    GetSubscriptionInfoResponseStatus[GetSubscriptionInfoResponseStatus["Suspended"] = 'Suspended'] = "Suspended";
})(exports.GetSubscriptionInfoResponseStatus || (exports.GetSubscriptionInfoResponseStatus = {}));
var GetSubscriptionInfoResponseStatus = exports.GetSubscriptionInfoResponseStatus;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var NotificationDeliveryMode = (function (_super) {
    __extends(NotificationDeliveryMode, _super);
    function NotificationDeliveryMode() {
        _super.apply(this, arguments);
    }
    NotificationDeliveryMode.prototype.getPropertyMappings = function () {
        return [
            { property: 'transportType', Class: NotificationDeliveryModeTransportType, isArray: false, isRequired: false },
            { property: 'encryption', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'address', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'subscriberKey', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'secretKey', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'encryptionAlgorithm', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'encryptionKey', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    NotificationDeliveryMode.prototype.getClassName = function () {
        return 'NotificationDeliveryMode';
    };
    return NotificationDeliveryMode;
})(model.Model);
exports.NotificationDeliveryMode = NotificationDeliveryMode;
(function (NotificationDeliveryModeTransportType) {
    NotificationDeliveryModeTransportType[NotificationDeliveryModeTransportType["PubNub"] = 'PubNub'] = "PubNub";
    NotificationDeliveryModeTransportType[NotificationDeliveryModeTransportType["APNS"] = 'APNS'] = "APNS";
})(exports.NotificationDeliveryModeTransportType || (exports.NotificationDeliveryModeTransportType = {}));
var NotificationDeliveryModeTransportType = exports.NotificationDeliveryModeTransportType;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var getpresenceinfo = __webpack_require__(60);
var Presence = (function (_super) {
    __extends(Presence, _super);
    function Presence() {
        _super.apply(this, arguments);
    }
    /**
     * Get Extension Presence Status
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns presence status of an extension or several extensions. The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not returned at all) for the following extension types: Department/Announcement
     *     Only/Take Messages Only (Voicemail)/Fax User/Paging Only Group/Shared Lines Group/IVR Menu/Application Extension. If the user requests his/her own presence status, the response contains actual presence status even if the status publication is turned
     *     off. Batch request is supported. For batch requests the number of extensions in one request is limited to 30. If more extensions are included in the request, the error code 400 Bad Request is returned with the logical error code InvalidMultipartRequest
     *     and the corresponding message 'Extension Presence Info multipart request is limited to 30 extensions'.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadPresence</td>
     *             <td>Getting user presence information</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    Presence.prototype.load = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence', options, exports.loadOptions), getpresenceinfo.GetPresenceInfo);
    };
    return Presence;
})(client.Client);
exports.Presence = Presence;
/**
 * Definition of options for load operation
 */
exports.loadOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var getpresenceextensioninfo = __webpack_require__(61);
var GetPresenceInfo = (function (_super) {
    __extends(GetPresenceInfo, _super);
    function GetPresenceInfo() {
        _super.apply(this, arguments);
    }
    GetPresenceInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'allowSeeMyPresence', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'dndStatus', Class: GetPresenceInfoDndStatus, isArray: false, isRequired: false },
            { property: 'extension', Class: getpresenceextensioninfo.GetPresenceExtensionInfo, isArray: false, isRequired: false },
            { property: 'message', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'pickUpCallsOnHold', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'presenceStatus', Class: GetPresenceInfoPresenceStatus, isArray: false, isRequired: false },
            { property: 'ringOnMonitoredCall', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'telephonyStatus', Class: GetPresenceInfoTelephonyStatus, isArray: false, isRequired: false },
            { property: 'userStatus', Class: GetPresenceInfoUserStatus, isArray: false, isRequired: false }
        ];
    };
    GetPresenceInfo.prototype.getClassName = function () {
        return 'GetPresenceInfo';
    };
    return GetPresenceInfo;
})(model.Model);
exports.GetPresenceInfo = GetPresenceInfo;
(function (GetPresenceInfoDndStatus) {
    GetPresenceInfoDndStatus[GetPresenceInfoDndStatus["TakeAllCalls"] = 'TakeAllCalls'] = "TakeAllCalls";
    GetPresenceInfoDndStatus[GetPresenceInfoDndStatus["DoNotAcceptAnyCalls"] = 'DoNotAcceptAnyCalls'] = "DoNotAcceptAnyCalls";
    GetPresenceInfoDndStatus[GetPresenceInfoDndStatus["DoNotAcceptDepartmentCalls"] = 'DoNotAcceptDepartmentCalls'] = "DoNotAcceptDepartmentCalls";
    GetPresenceInfoDndStatus[GetPresenceInfoDndStatus["TakeDepartmentCallsOnly"] = 'TakeDepartmentCallsOnly'] = "TakeDepartmentCallsOnly";
})(exports.GetPresenceInfoDndStatus || (exports.GetPresenceInfoDndStatus = {}));
var GetPresenceInfoDndStatus = exports.GetPresenceInfoDndStatus;
(function (GetPresenceInfoPresenceStatus) {
    GetPresenceInfoPresenceStatus[GetPresenceInfoPresenceStatus["Offline"] = 'Offline'] = "Offline";
    GetPresenceInfoPresenceStatus[GetPresenceInfoPresenceStatus["Busy"] = 'Busy'] = "Busy";
    GetPresenceInfoPresenceStatus[GetPresenceInfoPresenceStatus["Available"] = 'Available'] = "Available";
})(exports.GetPresenceInfoPresenceStatus || (exports.GetPresenceInfoPresenceStatus = {}));
var GetPresenceInfoPresenceStatus = exports.GetPresenceInfoPresenceStatus;
(function (GetPresenceInfoTelephonyStatus) {
    GetPresenceInfoTelephonyStatus[GetPresenceInfoTelephonyStatus["NoCall"] = 'NoCall'] = "NoCall";
    GetPresenceInfoTelephonyStatus[GetPresenceInfoTelephonyStatus["CallConnected"] = 'CallConnected'] = "CallConnected";
    GetPresenceInfoTelephonyStatus[GetPresenceInfoTelephonyStatus["Ringing"] = 'Ringing'] = "Ringing";
    GetPresenceInfoTelephonyStatus[GetPresenceInfoTelephonyStatus["OnHold"] = 'OnHold'] = "OnHold";
    GetPresenceInfoTelephonyStatus[GetPresenceInfoTelephonyStatus["ParkedCall"] = 'ParkedCall'] = "ParkedCall";
})(exports.GetPresenceInfoTelephonyStatus || (exports.GetPresenceInfoTelephonyStatus = {}));
var GetPresenceInfoTelephonyStatus = exports.GetPresenceInfoTelephonyStatus;
(function (GetPresenceInfoUserStatus) {
    GetPresenceInfoUserStatus[GetPresenceInfoUserStatus["Offline"] = 'Offline'] = "Offline";
    GetPresenceInfoUserStatus[GetPresenceInfoUserStatus["Busy"] = 'Busy'] = "Busy";
    GetPresenceInfoUserStatus[GetPresenceInfoUserStatus["Available"] = 'Available'] = "Available";
})(exports.GetPresenceInfoUserStatus || (exports.GetPresenceInfoUserStatus = {}));
var GetPresenceInfoUserStatus = exports.GetPresenceInfoUserStatus;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var GetPresenceExtensionInfo = (function (_super) {
    __extends(GetPresenceExtensionInfo, _super);
    function GetPresenceExtensionInfo() {
        _super.apply(this, arguments);
    }
    GetPresenceExtensionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    GetPresenceExtensionInfo.prototype.getClassName = function () {
        return 'GetPresenceExtensionInfo';
    };
    return GetPresenceExtensionInfo;
})(model.Model);
exports.GetPresenceExtensionInfo = GetPresenceExtensionInfo;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var getringoutstatusresponse = __webpack_require__(63);
var RingOut = (function (_super) {
    __extends(RingOut, _super);
    function RingOut() {
        _super.apply(this, arguments);
    }
    /**
     * Make RingOut Call
     *
     * <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p>
     * <p></p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>RingOut</td>
     *             <td>Performing two-legged ring-out phone calls</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    RingOut.prototype.create = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout', options, exports.createOptions), getringoutstatusresponse.GetRingOutStatusResponse);
    };
    /**
     * Get Status of RingOut Call
     *
     * <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p>
     * <p>Returns the status of a 2-leg RingOut call.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>RingOut</td>
     *             <td>Performing two-legged ring-out phone calls</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    RingOut.prototype.load = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}', options, exports.loadOptions), getringoutstatusresponse.GetRingOutStatusResponse);
    };
    /**
     * Cancel RingOut Call
     *
     * <p style='font-style:italic;'></p>
     * <p>Cancels the 2-leg RingOut call.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>RingOut</td>
     *             <td>Performing two-legged ring-out phone calls</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>accountId</td>
     *             <td>string</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>extensionId</td>
     *             <td>string</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ringoutId</td>
     *             <td>string</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    RingOut.prototype.remove = function (options) {
        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}', options, exports.removeOptions), null);
    };
    return RingOut;
})(client.Client);
exports.RingOut = RingOut;
/**
 * Definition of options for create operation
 */
exports.createOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "body",
        "type": "makeringoutrequest.MakeRingOutRequest",
        "in": "body",
        "required": true
    }
];
/**
 * Definition of options for load operation
 */
exports.loadOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "ringoutId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for remove operation
 */
exports.removeOptions = [];


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ringoutstatusinfo = __webpack_require__(64);
var GetRingOutStatusResponse = (function (_super) {
    __extends(GetRingOutStatusResponse, _super);
    function GetRingOutStatusResponse() {
        _super.apply(this, arguments);
    }
    GetRingOutStatusResponse.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'status', Class: ringoutstatusinfo.RingOutStatusInfo, isArray: false, isRequired: false }
        ];
    };
    GetRingOutStatusResponse.prototype.getClassName = function () {
        return 'GetRingOutStatusResponse';
    };
    return GetRingOutStatusResponse;
})(model.Model);
exports.GetRingOutStatusResponse = GetRingOutStatusResponse;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var RingOutStatusInfo = (function (_super) {
    __extends(RingOutStatusInfo, _super);
    function RingOutStatusInfo() {
        _super.apply(this, arguments);
    }
    RingOutStatusInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'callStatus', Class: RingOutStatusInfoCallStatus, isArray: false, isRequired: false },
            { property: 'callerStatus', Class: RingOutStatusInfoCallerStatus, isArray: false, isRequired: false },
            { property: 'calleeStatus', Class: RingOutStatusInfoCalleeStatus, isArray: false, isRequired: false }
        ];
    };
    RingOutStatusInfo.prototype.getClassName = function () {
        return 'RingOutStatusInfo';
    };
    return RingOutStatusInfo;
})(model.Model);
exports.RingOutStatusInfo = RingOutStatusInfo;
(function (RingOutStatusInfoCallStatus) {
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["Invalid"] = 'Invalid'] = "Invalid";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["Success"] = 'Success'] = "Success";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["InProgress"] = 'InProgress'] = "InProgress";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["Busy"] = 'Busy'] = "Busy";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["NoAnswer"] = 'NoAnswer'] = "NoAnswer";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["Rejected"] = 'Rejected'] = "Rejected";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["GenericError"] = 'GenericError'] = "GenericError";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["Finished"] = 'Finished'] = "Finished";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["InternationalDisabled"] = 'InternationalDisabled'] = "InternationalDisabled";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["DestinationBlocked"] = 'DestinationBlocked'] = "DestinationBlocked";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["NotEnoughFunds"] = 'NotEnoughFunds'] = "NotEnoughFunds";
    RingOutStatusInfoCallStatus[RingOutStatusInfoCallStatus["NoSuchUser"] = 'NoSuchUser'] = "NoSuchUser";
})(exports.RingOutStatusInfoCallStatus || (exports.RingOutStatusInfoCallStatus = {}));
var RingOutStatusInfoCallStatus = exports.RingOutStatusInfoCallStatus;
(function (RingOutStatusInfoCallerStatus) {
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["Invalid"] = 'Invalid'] = "Invalid";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["Success"] = 'Success'] = "Success";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["InProgress"] = 'InProgress'] = "InProgress";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["Busy"] = 'Busy'] = "Busy";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["NoAnswer"] = 'NoAnswer'] = "NoAnswer";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["Rejected"] = 'Rejected'] = "Rejected";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["GenericError"] = 'GenericError'] = "GenericError";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["Finished"] = 'Finished'] = "Finished";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["InternationalDisabled"] = 'InternationalDisabled'] = "InternationalDisabled";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["DestinationBlocked"] = 'DestinationBlocked'] = "DestinationBlocked";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["NotEnoughFunds"] = 'NotEnoughFunds'] = "NotEnoughFunds";
    RingOutStatusInfoCallerStatus[RingOutStatusInfoCallerStatus["NoSuchUser"] = 'NoSuchUser'] = "NoSuchUser";
})(exports.RingOutStatusInfoCallerStatus || (exports.RingOutStatusInfoCallerStatus = {}));
var RingOutStatusInfoCallerStatus = exports.RingOutStatusInfoCallerStatus;
(function (RingOutStatusInfoCalleeStatus) {
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["Invalid"] = 'Invalid'] = "Invalid";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["Success"] = 'Success'] = "Success";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["InProgress"] = 'InProgress'] = "InProgress";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["Busy"] = 'Busy'] = "Busy";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["NoAnswer"] = 'NoAnswer'] = "NoAnswer";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["Rejected"] = 'Rejected'] = "Rejected";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["GenericError"] = 'GenericError'] = "GenericError";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["Finished"] = 'Finished'] = "Finished";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["InternationalDisabled"] = 'InternationalDisabled'] = "InternationalDisabled";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["DestinationBlocked"] = 'DestinationBlocked'] = "DestinationBlocked";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["NotEnoughFunds"] = 'NotEnoughFunds'] = "NotEnoughFunds";
    RingOutStatusInfoCalleeStatus[RingOutStatusInfoCalleeStatus["NoSuchUser"] = 'NoSuchUser'] = "NoSuchUser";
})(exports.RingOutStatusInfoCalleeStatus || (exports.RingOutStatusInfoCalleeStatus = {}));
var RingOutStatusInfoCalleeStatus = exports.RingOutStatusInfoCalleeStatus;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ringcentral-client.js.map