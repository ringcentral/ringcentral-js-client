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
"use strict";
var accountClient = __webpack_require__(2);
var callLogClient = __webpack_require__(40);
var dictionaryClient = __webpack_require__(55);
var extensionClient = __webpack_require__(70);
var messagesClient = __webpack_require__(77);
var notificationsClient = __webpack_require__(84);
var presenceClient = __webpack_require__(87);
var ringoutClient = __webpack_require__(93);
var Client = (function () {
    function Client(sdk) {
        this._sdk = sdk;
        this._account = new accountClient.Account(sdk);
        this._callLog = new callLogClient.CallLog(sdk);
        this._dictionary = new dictionaryClient.Dictionary(sdk);
        this._extension = new extensionClient.Extension(sdk);
        this._messages = new messagesClient.Messages(sdk);
        this._notifications = new notificationsClient.NotificationsSubscriptionAPI(sdk);
        this._presence = new presenceClient.Presence(sdk);
        this._ringout = new ringoutClient.RingOut(sdk);
    }
    Client.prototype.account = function () { return this._account; };
    Client.prototype.callLog = function () { return this._callLog; };
    Client.prototype.dictionary = function () { return this._dictionary; };
    Client.prototype.extension = function () { return this._extension; };
    Client.prototype.messages = function () { return this._messages; };
    Client.prototype.notifications = function () { return this._notifications; };
    Client.prototype.presence = function () { return this._presence; };
    Client.prototype.ringout = function () { return this._ringout; };
    Client.version = '0.1.0';
    return Client;
}());
module.exports = Client;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var accountinfo = __webpack_require__(4);
var accountbusinessaddress = __webpack_require__(28);
var dialingplaninfo = __webpack_require__(30);
var phonenumberinfo = __webpack_require__(34);
var accountphonenumbers = __webpack_require__(36);
var accountserviceinfo = __webpack_require__(37);
var Account = (function (_super) {
    __extends(Account, _super);
    function Account() {
        _super.apply(this, arguments);
    }
    /**
     * Create Account
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Creates the account in Initial state.</p>
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
     *             <td class='code'>Accounts</td>
     *             <td>Managing accounts: creating new accounts, viewing and updating account information, deleting existing accounts</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>EditAccounts</td>
     *             <td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Account.prototype.createAccount = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account', options, exports.createAccountOptions), accountinfo.AccountInfo);
    };
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Account.prototype.loadAccount = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}', options, exports.loadAccountOptions), accountinfo.AccountInfo);
    };
    /**
     * Get Account Business Address
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
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Account.prototype.loadAccountBusinessAddress = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/business-address', options, exports.loadAccountBusinessAddressOptions), accountinfo.AccountInfo);
    };
    /**
     * Update Account Business Address
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
     *             <td class='code'>EditAccounts</td>
     *             <td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Account.prototype.updateAccountBusinessAddress = function (options) {
        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/business-address', options, exports.updateAccountBusinessAddressOptions), accountbusinessaddress.AccountBusinessAddress);
    };
    /**
     * Get Account Dialing Plan
     *
     * <p style='font-style:italic;'></p>
     * <p>Returns list of countries which can be selected for a dialing plan (to call short numbers and special services).</p>
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    Account.prototype.listDialingPlans = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/dialing-plan', options, exports.listDialingPlansOptions), dialingplaninfo.DialingPlanInfo);
    };
    /**
     * Provision Phone Numbers
     *
     * <p style='font-style:italic;'>Since 1.0.11 (Release 6.3)</p>
     * <p>Provisions a phone number.</p>
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
     *             <td class='code'>EditAccounts</td>
     *             <td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Account.prototype.provisionPhoneNumber = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/phone-number', options, exports.provisionPhoneNumberOptions), phonenumberinfo.PhoneNumberInfo);
    };
    /**
     * Get Account Phone Numbers
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns the list of phone numbers assigned to the RingCentral customer account. Both company-level and extension-level numbers are returned.</p>
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    Account.prototype.listAccountPhoneNumbers = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/phone-number', options, exports.listAccountPhoneNumbersOptions), accountphonenumbers.AccountPhoneNumbers);
    };
    /**
     * Get Phone Number(s) by ID
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
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Account.prototype.loadAccountPhoneNumber = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}', options, exports.loadAccountPhoneNumberOptions), phonenumberinfo.PhoneNumberInfo);
    };
    /**
     * Get Account Service Info
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns the information about service plan, available features and limitations for a particular RingCentral customer account.</p>
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Account.prototype.loadServiceInfo = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/service-info', options, exports.loadServiceInfoOptions), accountserviceinfo.AccountServiceInfo);
    };
    return Account;
}(client.Client));
exports.Account = Account;
/**
 * Definition of options for createAccount operation
 */
exports.createAccountOptions = [
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "createaccountrequest.CreateAccountRequest"
    }
];
/**
 * Definition of options for loadAccount operation
 */
exports.loadAccountOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];
/**
 * Definition of options for loadAccountBusinessAddress operation
 */
exports.loadAccountBusinessAddressOptions = [];
/**
 * Definition of options for updateAccountBusinessAddress operation
 */
exports.updateAccountBusinessAddressOptions = [
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "modifyaccountbusinessaddressrequest.ModifyAccountBusinessAddressRequest"
    }
];
/**
 * Definition of options for listDialingPlans operation
 */
exports.listDialingPlansOptions = [
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
 * Definition of options for provisionPhoneNumber operation
 */
exports.provisionPhoneNumberOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "provisionphonenumbers.ProvisionPhoneNumbers"
    }
];
/**
 * Definition of options for listAccountPhoneNumbers operation
 */
exports.listAccountPhoneNumbersOptions = [
    {
        "name": "accountId",
        "type": "string",
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
        "name": "usageType",
        "type": "IListAccountPhoneNumbersUsageType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "MainCompanyNumber",
            "AdditionalCompanyNumber",
            "CompanyNumber",
            "DirectNumber",
            "CompanyFaxNumber",
            "ForwardedNumber"
        ],
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for loadAccountPhoneNumber operation
 */
exports.loadAccountPhoneNumberOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "phoneNumberId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for loadServiceInfo operation
 */
exports.loadServiceInfoOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];
(function (IListAccountPhoneNumbersUsageType) {
    IListAccountPhoneNumbersUsageType[IListAccountPhoneNumbersUsageType["MainCompanyNumber"] = 'MainCompanyNumber'] = "MainCompanyNumber";
    IListAccountPhoneNumbersUsageType[IListAccountPhoneNumbersUsageType["AdditionalCompanyNumber"] = 'AdditionalCompanyNumber'] = "AdditionalCompanyNumber";
    IListAccountPhoneNumbersUsageType[IListAccountPhoneNumbersUsageType["CompanyNumber"] = 'CompanyNumber'] = "CompanyNumber";
    IListAccountPhoneNumbersUsageType[IListAccountPhoneNumbersUsageType["DirectNumber"] = 'DirectNumber'] = "DirectNumber";
    IListAccountPhoneNumbersUsageType[IListAccountPhoneNumbersUsageType["CompanyFaxNumber"] = 'CompanyFaxNumber'] = "CompanyFaxNumber";
    IListAccountPhoneNumbersUsageType[IListAccountPhoneNumbersUsageType["ForwardedNumber"] = 'ForwardedNumber'] = "ForwardedNumber";
})(exports.IListAccountPhoneNumbersUsageType || (exports.IListAccountPhoneNumbersUsageType = {}));
var IListAccountPhoneNumbersUsageType = exports.IListAccountPhoneNumbersUsageType;


/***/ },
/* 3 */
/***/ function(module, exports) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}());
exports.Client = Client;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var extensioninfo = __webpack_require__(6);
var serviceinfo = __webpack_require__(22);
var accountstatusinfo = __webpack_require__(27);
var AccountInfo = (function (_super) {
    __extends(AccountInfo, _super);
    function AccountInfo() {
        _super.apply(this, arguments);
    }
    AccountInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'mainNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'operator', Class: extensioninfo.ExtensionInfo, isArray: false, isRequired: false },
            { property: 'partnerId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serviceInfo', Class: serviceinfo.ServiceInfo, isArray: false, isRequired: false },
            { property: 'setupWizardState', Class: AccountInfoSetupWizardState, isArray: false, isRequired: false },
            { property: 'status', Class: AccountInfoStatus, isArray: false, isRequired: false },
            { property: 'statusInfo', Class: accountstatusinfo.AccountStatusInfo, isArray: false, isRequired: false }
        ];
    };
    AccountInfo.prototype.getClassName = function () {
        return 'AccountInfo';
    };
    return AccountInfo;
}(model.Model));
exports.AccountInfo = AccountInfo;
(function (AccountInfoSetupWizardState) {
    AccountInfoSetupWizardState[AccountInfoSetupWizardState["NotStarted"] = 'NotStarted'] = "NotStarted";
    AccountInfoSetupWizardState[AccountInfoSetupWizardState["Incomplete"] = 'Incomplete'] = "Incomplete";
    AccountInfoSetupWizardState[AccountInfoSetupWizardState["Completed"] = 'Completed'] = "Completed";
})(exports.AccountInfoSetupWizardState || (exports.AccountInfoSetupWizardState = {}));
var AccountInfoSetupWizardState = exports.AccountInfoSetupWizardState;
(function (AccountInfoStatus) {
    AccountInfoStatus[AccountInfoStatus["Confirmed"] = 'Confirmed'] = "Confirmed";
    AccountInfoStatus[AccountInfoStatus["Disabled"] = 'Disabled'] = "Disabled";
})(exports.AccountInfoStatus || (exports.AccountInfoStatus = {}));
var AccountInfoStatus = exports.AccountInfoStatus;


/***/ },
/* 5 */
/***/ function(module, exports) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}());
exports.Model = Model;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var contactinfo = __webpack_require__(7);
var departmentinfo = __webpack_require__(9);
var extensionpermissions = __webpack_require__(10);
var profileimageinfo = __webpack_require__(12);
var referenceinfo = __webpack_require__(13);
var regionalsettings = __webpack_require__(14);
var extensionservicefeatureinfo = __webpack_require__(20);
var extensionstatusinfo = __webpack_require__(21);
var ExtensionInfo = (function (_super) {
    __extends(ExtensionInfo, _super);
    function ExtensionInfo() {
        _super.apply(this, arguments);
    }
    ExtensionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: true },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: true },
            { property: 'contact', Class: contactinfo.ContactInfo, isArray: false, isRequired: false },
            { property: 'departments', Class: departmentinfo.DepartmentInfo, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'partnerId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'permissions', Class: extensionpermissions.ExtensionPermissions, isArray: false, isRequired: false },
            { property: 'profileImage', Class: profileimageinfo.ProfileImageInfo, isArray: false, isRequired: true },
            { property: 'references', Class: referenceinfo.ReferenceInfo, isArray: true, isRequired: false },
            { property: 'regionalSettings', Class: regionalsettings.RegionalSettings, isArray: false, isRequired: false },
            { property: 'serviceFeatures', Class: extensionservicefeatureinfo.ExtensionServiceFeatureInfo, isArray: true, isRequired: false },
            { property: 'setupWizardState', Class: ExtensionInfoSetupWizardState, isArray: false, isRequired: false },
            { property: 'status', Class: ExtensionInfoStatus, isArray: false, isRequired: true },
            { property: 'statusInfo', Class: extensionstatusinfo.ExtensionStatusInfo, isArray: false, isRequired: false },
            { property: 'type', Class: ExtensionInfoType, isArray: false, isRequired: true }
        ];
    };
    ExtensionInfo.prototype.getClassName = function () {
        return 'ExtensionInfo';
    };
    return ExtensionInfo;
}(model.Model));
exports.ExtensionInfo = ExtensionInfo;
(function (ExtensionInfoSetupWizardState) {
    ExtensionInfoSetupWizardState[ExtensionInfoSetupWizardState["NotStarted"] = 'NotStarted'] = "NotStarted";
    ExtensionInfoSetupWizardState[ExtensionInfoSetupWizardState["Incomplete"] = 'Incomplete'] = "Incomplete";
    ExtensionInfoSetupWizardState[ExtensionInfoSetupWizardState["Completed"] = 'Completed'] = "Completed";
})(exports.ExtensionInfoSetupWizardState || (exports.ExtensionInfoSetupWizardState = {}));
var ExtensionInfoSetupWizardState = exports.ExtensionInfoSetupWizardState;
(function (ExtensionInfoStatus) {
    ExtensionInfoStatus[ExtensionInfoStatus["Enabled"] = 'Enabled'] = "Enabled";
    ExtensionInfoStatus[ExtensionInfoStatus["Disabled"] = 'Disabled'] = "Disabled";
    ExtensionInfoStatus[ExtensionInfoStatus["NotActivated"] = 'NotActivated'] = "NotActivated";
    ExtensionInfoStatus[ExtensionInfoStatus["Unassigned"] = 'Unassigned'] = "Unassigned";
})(exports.ExtensionInfoStatus || (exports.ExtensionInfoStatus = {}));
var ExtensionInfoStatus = exports.ExtensionInfoStatus;
(function (ExtensionInfoType) {
    ExtensionInfoType[ExtensionInfoType["User"] = 'User'] = "User";
    ExtensionInfoType[ExtensionInfoType["FaxUser"] = 'FaxUser'] = "FaxUser";
    ExtensionInfoType[ExtensionInfoType["VirtualUser"] = 'VirtualUser'] = "VirtualUser";
    ExtensionInfoType[ExtensionInfoType["DigitalUser"] = 'DigitalUser'] = "DigitalUser";
    ExtensionInfoType[ExtensionInfoType["Department"] = 'Department'] = "Department";
    ExtensionInfoType[ExtensionInfoType["Announcement"] = 'Announcement'] = "Announcement";
    ExtensionInfoType[ExtensionInfoType["Voicemail"] = 'Voicemail'] = "Voicemail";
    ExtensionInfoType[ExtensionInfoType["SharedLinesGroup"] = 'SharedLinesGroup'] = "SharedLinesGroup";
    ExtensionInfoType[ExtensionInfoType["PagingOnlyGroup"] = 'PagingOnlyGroup'] = "PagingOnlyGroup";
    ExtensionInfoType[ExtensionInfoType["IvrMenu"] = 'IvrMenu'] = "IvrMenu";
    ExtensionInfoType[ExtensionInfoType["ApplicationExtension"] = 'ApplicationExtension'] = "ApplicationExtension";
    ExtensionInfoType[ExtensionInfoType["ParkLocation"] = 'ParkLocation'] = "ParkLocation";
})(exports.ExtensionInfoType || (exports.ExtensionInfoType = {}));
var ExtensionInfoType = exports.ExtensionInfoType;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.ContactInfo = ContactInfo;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.ContactAddressInfo = ContactAddressInfo;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.DepartmentInfo = DepartmentInfo;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.ExtensionPermissions = ExtensionPermissions;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.PermissionInfo = PermissionInfo;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ProfileImageInfo = (function (_super) {
    __extends(ProfileImageInfo, _super);
    function ProfileImageInfo() {
        _super.apply(this, arguments);
    }
    ProfileImageInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: true },
            { property: 'etag', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'lastModified', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'contentType', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'scales', Class: null /* string[] */, isArray: true, isRequired: false }
        ];
    };
    ProfileImageInfo.prototype.getClassName = function () {
        return 'ProfileImageInfo';
    };
    return ProfileImageInfo;
}(model.Model));
exports.ProfileImageInfo = ProfileImageInfo;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ReferenceInfo = (function (_super) {
    __extends(ReferenceInfo, _super);
    function ReferenceInfo() {
        _super.apply(this, arguments);
    }
    ReferenceInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'ref', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: ReferenceInfoType, isArray: false, isRequired: false }
        ];
    };
    ReferenceInfo.prototype.getClassName = function () {
        return 'ReferenceInfo';
    };
    return ReferenceInfo;
}(model.Model));
exports.ReferenceInfo = ReferenceInfo;
(function (ReferenceInfoType) {
    ReferenceInfoType[ReferenceInfoType["PartnerId"] = 'PartnerId'] = "PartnerId";
    ReferenceInfoType[ReferenceInfoType["CustomerDirectoryId"] = 'CustomerDirectoryId'] = "CustomerDirectoryId";
})(exports.ReferenceInfoType || (exports.ReferenceInfoType = {}));
var ReferenceInfoType = exports.ReferenceInfoType;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var countryinfo = __webpack_require__(15);
var timezoneinfo = __webpack_require__(16);
var languageinfo = __webpack_require__(17);
var greetinglanguageinfo = __webpack_require__(18);
var formattinglocaleinfo = __webpack_require__(19);
var RegionalSettings = (function (_super) {
    __extends(RegionalSettings, _super);
    function RegionalSettings() {
        _super.apply(this, arguments);
    }
    RegionalSettings.prototype.getPropertyMappings = function () {
        return [
            { property: 'homeCountry', Class: countryinfo.CountryInfo, isArray: false, isRequired: false },
            { property: 'timezone', Class: timezoneinfo.TimezoneInfo, isArray: false, isRequired: false },
            { property: 'language', Class: languageinfo.LanguageInfo, isArray: false, isRequired: false },
            { property: 'greetingLanguage', Class: greetinglanguageinfo.GreetingLanguageInfo, isArray: false, isRequired: false },
            { property: 'formattingLocale', Class: formattinglocaleinfo.FormattingLocaleInfo, isArray: false, isRequired: false }
        ];
    };
    RegionalSettings.prototype.getClassName = function () {
        return 'RegionalSettings';
    };
    return RegionalSettings;
}(model.Model));
exports.RegionalSettings = RegionalSettings;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    CountryInfo.prototype.getClassName = function () {
        return 'CountryInfo';
    };
    return CountryInfo;
}(model.Model));
exports.CountryInfo = CountryInfo;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.TimezoneInfo = TimezoneInfo;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.LanguageInfo = LanguageInfo;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.GreetingLanguageInfo = GreetingLanguageInfo;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.FormattingLocaleInfo = FormattingLocaleInfo;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.ExtensionServiceFeatureInfo = ExtensionServiceFeatureInfo;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.ExtensionStatusInfo = ExtensionStatusInfo;
(function (ExtensionStatusInfoReason) {
    ExtensionStatusInfoReason[ExtensionStatusInfoReason["Voluntarily"] = 'Voluntarily'] = "Voluntarily";
    ExtensionStatusInfoReason[ExtensionStatusInfoReason["Involuntarily"] = 'Involuntarily'] = "Involuntarily";
})(exports.ExtensionStatusInfoReason || (exports.ExtensionStatusInfoReason = {}));
var ExtensionStatusInfoReason = exports.ExtensionStatusInfoReason;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var billingplaninfo = __webpack_require__(23);
var brandinfo = __webpack_require__(24);
var serviceplaninfo = __webpack_require__(25);
var targetserviceplaninfo = __webpack_require__(26);
var ServiceInfo = (function (_super) {
    __extends(ServiceInfo, _super);
    function ServiceInfo() {
        _super.apply(this, arguments);
    }
    ServiceInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'billingPlan', Class: billingplaninfo.BillingPlanInfo, isArray: false, isRequired: false },
            { property: 'brand', Class: brandinfo.BrandInfo, isArray: false, isRequired: false },
            { property: 'servicePlan', Class: serviceplaninfo.ServicePlanInfo, isArray: false, isRequired: false },
            { property: 'targetServicePlan', Class: targetserviceplaninfo.TargetServicePlanInfo, isArray: false, isRequired: false }
        ];
    };
    ServiceInfo.prototype.getClassName = function () {
        return 'ServiceInfo';
    };
    return ServiceInfo;
}(model.Model));
exports.ServiceInfo = ServiceInfo;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var countryinfo = __webpack_require__(15);
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
}(model.Model));
exports.BrandInfo = BrandInfo;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.ServicePlanInfo = ServicePlanInfo;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.TargetServicePlanInfo = TargetServicePlanInfo;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
            { property: 'comment', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'reason', Class: AccountStatusInfoReason, isArray: false, isRequired: false }
        ];
    };
    AccountStatusInfo.prototype.getClassName = function () {
        return 'AccountStatusInfo';
    };
    return AccountStatusInfo;
}(model.Model));
exports.AccountStatusInfo = AccountStatusInfo;
(function (AccountStatusInfoReason) {
    AccountStatusInfoReason[AccountStatusInfoReason["Voluntarily"] = 'Voluntarily'] = "Voluntarily";
    AccountStatusInfoReason[AccountStatusInfoReason["Involuntarily"] = 'Involuntarily'] = "Involuntarily";
})(exports.AccountStatusInfoReason || (exports.AccountStatusInfoReason = {}));
var AccountStatusInfoReason = exports.AccountStatusInfoReason;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var businessaddressinfo = __webpack_require__(29);
var AccountBusinessAddress = (function (_super) {
    __extends(AccountBusinessAddress, _super);
    function AccountBusinessAddress() {
        _super.apply(this, arguments);
    }
    AccountBusinessAddress.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'company', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'email', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'businessAddress', Class: businessaddressinfo.BusinessAddressInfo, isArray: false, isRequired: true }
        ];
    };
    AccountBusinessAddress.prototype.getClassName = function () {
        return 'AccountBusinessAddress';
    };
    return AccountBusinessAddress;
}(model.Model));
exports.AccountBusinessAddress = AccountBusinessAddress;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var BusinessAddressInfo = (function (_super) {
    __extends(BusinessAddressInfo, _super);
    function BusinessAddressInfo() {
        _super.apply(this, arguments);
    }
    BusinessAddressInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'country', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'state', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'city', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'street', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'zip', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    BusinessAddressInfo.prototype.getClassName = function () {
        return 'BusinessAddressInfo';
    };
    return BusinessAddressInfo;
}(model.Model));
exports.BusinessAddressInfo = BusinessAddressInfo;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var dialingplancountryinfo = __webpack_require__(31);
var paginginfo = __webpack_require__(32);
var navigationinfo = __webpack_require__(33);
var DialingPlanInfo = (function (_super) {
    __extends(DialingPlanInfo, _super);
    function DialingPlanInfo() {
        _super.apply(this, arguments);
    }
    DialingPlanInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: dialingplancountryinfo.DialingPlanCountryInfo, isArray: true, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true }
        ];
    };
    DialingPlanInfo.prototype.getClassName = function () {
        return 'DialingPlanInfo';
    };
    return DialingPlanInfo;
}(model.Model));
exports.DialingPlanInfo = DialingPlanInfo;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var DialingPlanCountryInfo = (function (_super) {
    __extends(DialingPlanCountryInfo, _super);
    function DialingPlanCountryInfo() {
        _super.apply(this, arguments);
    }
    DialingPlanCountryInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'callingCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'isoCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    DialingPlanCountryInfo.prototype.getClassName = function () {
        return 'DialingPlanCountryInfo';
    };
    return DialingPlanCountryInfo;
}(model.Model));
exports.DialingPlanCountryInfo = DialingPlanCountryInfo;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.PagingInfo = PagingInfo;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.NavigationInfo = NavigationInfo;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var countryinfo = __webpack_require__(15);
var phonenumbersextensioninfo = __webpack_require__(35);
var PhoneNumberInfo = (function (_super) {
    __extends(PhoneNumberInfo, _super);
    function PhoneNumberInfo() {
        _super.apply(this, arguments);
    }
    PhoneNumberInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'country', Class: countryinfo.CountryInfo, isArray: false, isRequired: false },
            { property: 'extension', Class: phonenumbersextensioninfo.PhoneNumbersExtensionInfo, isArray: false, isRequired: false },
            { property: 'features', Class: null /* string[] */, isArray: true, isRequired: false },
            { property: 'location', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'paymentType', Class: PhoneNumberInfoPaymentType, isArray: false, isRequired: false },
            { property: 'phoneNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'status', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: PhoneNumberInfoType, isArray: false, isRequired: false },
            { property: 'usageType', Class: PhoneNumberInfoUsageType, isArray: false, isRequired: false }
        ];
    };
    PhoneNumberInfo.prototype.getClassName = function () {
        return 'PhoneNumberInfo';
    };
    return PhoneNumberInfo;
}(model.Model));
exports.PhoneNumberInfo = PhoneNumberInfo;
(function (PhoneNumberInfoPaymentType) {
    PhoneNumberInfoPaymentType[PhoneNumberInfoPaymentType["External"] = 'External'] = "External";
    PhoneNumberInfoPaymentType[PhoneNumberInfoPaymentType["TollFree"] = 'TollFree'] = "TollFree";
    PhoneNumberInfoPaymentType[PhoneNumberInfoPaymentType["Local"] = 'Local'] = "Local";
})(exports.PhoneNumberInfoPaymentType || (exports.PhoneNumberInfoPaymentType = {}));
var PhoneNumberInfoPaymentType = exports.PhoneNumberInfoPaymentType;
(function (PhoneNumberInfoType) {
    PhoneNumberInfoType[PhoneNumberInfoType["VoiceFax"] = 'VoiceFax'] = "VoiceFax";
    PhoneNumberInfoType[PhoneNumberInfoType["FaxOnly"] = 'FaxOnly'] = "FaxOnly";
    PhoneNumberInfoType[PhoneNumberInfoType["VoiceOnly"] = 'VoiceOnly'] = "VoiceOnly";
})(exports.PhoneNumberInfoType || (exports.PhoneNumberInfoType = {}));
var PhoneNumberInfoType = exports.PhoneNumberInfoType;
(function (PhoneNumberInfoUsageType) {
    PhoneNumberInfoUsageType[PhoneNumberInfoUsageType["MainCompanyNumber"] = 'MainCompanyNumber'] = "MainCompanyNumber";
    PhoneNumberInfoUsageType[PhoneNumberInfoUsageType["AdditionalCompanyNumber"] = 'AdditionalCompanyNumber'] = "AdditionalCompanyNumber";
    PhoneNumberInfoUsageType[PhoneNumberInfoUsageType["CompanyNumber"] = 'CompanyNumber'] = "CompanyNumber";
    PhoneNumberInfoUsageType[PhoneNumberInfoUsageType["DirectNumber"] = 'DirectNumber'] = "DirectNumber";
    PhoneNumberInfoUsageType[PhoneNumberInfoUsageType["CompanyFaxNumber"] = 'CompanyFaxNumber'] = "CompanyFaxNumber";
    PhoneNumberInfoUsageType[PhoneNumberInfoUsageType["ForwardedNumber"] = 'ForwardedNumber'] = "ForwardedNumber";
})(exports.PhoneNumberInfoUsageType || (exports.PhoneNumberInfoUsageType = {}));
var PhoneNumberInfoUsageType = exports.PhoneNumberInfoUsageType;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var PhoneNumbersExtensionInfo = (function (_super) {
    __extends(PhoneNumbersExtensionInfo, _super);
    function PhoneNumbersExtensionInfo() {
        _super.apply(this, arguments);
    }
    PhoneNumbersExtensionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'partnerId', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    PhoneNumbersExtensionInfo.prototype.getClassName = function () {
        return 'PhoneNumbersExtensionInfo';
    };
    return PhoneNumbersExtensionInfo;
}(model.Model));
exports.PhoneNumbersExtensionInfo = PhoneNumbersExtensionInfo;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var phonenumberinfo = __webpack_require__(34);
var paginginfo = __webpack_require__(32);
var navigationinfo = __webpack_require__(33);
var AccountPhoneNumbers = (function (_super) {
    __extends(AccountPhoneNumbers, _super);
    function AccountPhoneNumbers() {
        _super.apply(this, arguments);
    }
    AccountPhoneNumbers.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: phonenumberinfo.PhoneNumberInfo, isArray: true, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true }
        ];
    };
    AccountPhoneNumbers.prototype.getClassName = function () {
        return 'AccountPhoneNumbers';
    };
    return AccountPhoneNumbers;
}(model.Model));
exports.AccountPhoneNumbers = AccountPhoneNumbers;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var servicefeatureinfo = __webpack_require__(38);
var accountlimits = __webpack_require__(39);
var AccountServiceInfo = (function (_super) {
    __extends(AccountServiceInfo, _super);
    function AccountServiceInfo() {
        _super.apply(this, arguments);
    }
    AccountServiceInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'servicePlanName', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'serviceFeatures', Class: servicefeatureinfo.ServiceFeatureInfo, isArray: true, isRequired: false },
            { property: 'limits', Class: accountlimits.AccountLimits, isArray: true, isRequired: false }
        ];
    };
    AccountServiceInfo.prototype.getClassName = function () {
        return 'AccountServiceInfo';
    };
    return AccountServiceInfo;
}(model.Model));
exports.AccountServiceInfo = AccountServiceInfo;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ServiceFeatureInfo = (function (_super) {
    __extends(ServiceFeatureInfo, _super);
    function ServiceFeatureInfo() {
        _super.apply(this, arguments);
    }
    ServiceFeatureInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'featureName', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'enabled', Class: ServiceFeatureInfoEnabled, isArray: false, isRequired: false }
        ];
    };
    ServiceFeatureInfo.prototype.getClassName = function () {
        return 'ServiceFeatureInfo';
    };
    return ServiceFeatureInfo;
}(model.Model));
exports.ServiceFeatureInfo = ServiceFeatureInfo;
(function (ServiceFeatureInfoEnabled) {
    ServiceFeatureInfoEnabled[ServiceFeatureInfoEnabled["True"] = 'True'] = "True";
    ServiceFeatureInfoEnabled[ServiceFeatureInfoEnabled["False"] = 'False'] = "False";
})(exports.ServiceFeatureInfoEnabled || (exports.ServiceFeatureInfoEnabled = {}));
var ServiceFeatureInfoEnabled = exports.ServiceFeatureInfoEnabled;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var AccountLimits = (function (_super) {
    __extends(AccountLimits, _super);
    function AccountLimits() {
        _super.apply(this, arguments);
    }
    AccountLimits.prototype.getPropertyMappings = function () {
        return [
            { property: 'freeSoftPhoneLinesPerExtension', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'meetingSize', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'maxMonitoredExtensionsPerUser', Class: null /* number */, isArray: false, isRequired: false }
        ];
    };
    AccountLimits.prototype.getClassName = function () {
        return 'AccountLimits';
    };
    return AccountLimits;
}(model.Model));
exports.AccountLimits = AccountLimits;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var accountactivecalls = __webpack_require__(41);
var accountcalllog = __webpack_require__(47);
var accountcalllogrecord = __webpack_require__(48);
var extensionactivecalls = __webpack_require__(49);
var extensioncalllog = __webpack_require__(50);
var extensioncalllogrecord = __webpack_require__(51);
var calllogsync = __webpack_require__(52);
var callrecording = __webpack_require__(54);
var CallLog = (function (_super) {
    __extends(CallLog, _super);
    function CallLog() {
        _super.apply(this, arguments);
    }
    /**
     * Get Account Active Calls
     *
     * <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p>
     * <p>Returns records of all calls that are in progress, ordered by start time in descending order.</p>
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.listAccountActiveCalls = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/active-calls', options, exports.listAccountActiveCallsOptions), accountactivecalls.AccountActiveCalls);
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.loadAccountCallLog = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/call-log', options, exports.loadAccountCallLogOptions), accountcalllog.AccountCallLog);
    };
    /**
     * Delete Call Log Records by Filter
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
     *             <td class='code'>EditCallLog</td>
     *             <td>Viewing and updating user call logs</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.deleteAccountCallLog = function (options) {
        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/call-log', options, exports.deleteAccountCallLogOptions), null);
    };
    /**
     * Get Account Call Log Record(s) by ID
     *
     * <p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p>
     * <p>Returns individual call log record(s) by ID(s). Batch request is supported, see Batch Requests for details.</p>
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.loadAccountCallLogRecord = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/call-log/{callRecordId}', options, exports.loadAccountCallLogRecordOptions), accountcalllogrecord.AccountCallLogRecord);
    };
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.listExtensionActiveCalls = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls', options, exports.listExtensionActiveCallsOptions), extensionactivecalls.ExtensionActiveCalls);
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.loadExtensionCallLog = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log', options, exports.loadExtensionCallLogOptions), extensioncalllog.ExtensionCallLog);
    };
    /**
     * Delete Call Log Records by Filter
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
     *             <td class='code'>EditCallLog</td>
     *             <td>Viewing and updating user call logs</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.deleteExtensionCallLog = function (options) {
        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log', options, exports.deleteExtensionCallLogOptions), null);
    };
    /**
     * Get Extension Call Log Record(s) by ID
     *
     * <p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p>
     * <p>Returns call log record(s) by their ID(s). Batch request is supported, see Batch Requests for details.</p>
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.loadExtensionCallLogRecord = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}', options, exports.loadExtensionCallLogRecordOptions), extensioncalllogrecord.ExtensionCallLogRecord);
    };
    /**
     * Call Log Synchronization
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
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.syncExtensionCallLog = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync', options, exports.syncExtensionCallLogOptions), calllogsync.CallLogSync);
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.loadCallRecordingMetadata = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/recording/{recordingId}', options, exports.loadCallRecordingMetadataOptions), callrecording.CallRecording);
    };
    /**
     * Get Call Recording Data
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
     *             <td class='code'>ReadCallRecording</td>
     *             <td>Downloading call recording content</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    CallLog.prototype.loadCallRecordingContent = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/recording/{recordingId}/content', options, exports.loadCallRecordingContentOptions), null);
    };
    return CallLog;
}(client.Client));
exports.CallLog = CallLog;
/**
 * Definition of options for listAccountActiveCalls operation
 */
exports.listAccountActiveCallsOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "direction",
        "type": "IListAccountActiveCallsDirection",
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
        "type": "IListAccountActiveCallsType",
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
 * Definition of options for loadAccountCallLog operation
 */
exports.loadAccountCallLogOptions = [
    {
        "name": "accountId",
        "type": "string",
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
        "type": "ILoadAccountCallLogDirection",
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
        "type": "ILoadAccountCallLogType",
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
        "type": "ILoadAccountCallLogView",
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
        "name": "dateFrom",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "dateTo",
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
    }
];
/**
 * Definition of options for deleteAccountCallLog operation
 */
exports.deleteAccountCallLogOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "dateTo",
        "type": "string",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for loadAccountCallLogRecord operation
 */
exports.loadAccountCallLogRecordOptions = [
    {
        "name": "accountId",
        "type": "string",
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
 * Definition of options for listExtensionActiveCalls operation
 */
exports.listExtensionActiveCallsOptions = [
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
        "type": "IListExtensionActiveCallsDirection",
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
        "type": "IListExtensionActiveCallsType",
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
 * Definition of options for loadExtensionCallLog operation
 */
exports.loadExtensionCallLogOptions = [
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
        "type": "ILoadExtensionCallLogDirection",
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
        "type": "ILoadExtensionCallLogType",
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
        "type": "ILoadExtensionCallLogView",
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
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "dateFrom",
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
    }
];
/**
 * Definition of options for deleteExtensionCallLog operation
 */
exports.deleteExtensionCallLogOptions = [
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
        "name": "dateTo",
        "type": "string",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for loadExtensionCallLogRecord operation
 */
exports.loadExtensionCallLogRecordOptions = [
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
        "name": "callRecordId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for syncExtensionCallLog operation
 */
exports.syncExtensionCallLogOptions = [
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
        "name": "syncType",
        "type": "ISyncExtensionCallLogSyncType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "FSync",
            "ISync"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "syncToken",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "dateFrom",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "recordCount",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "statusGroup",
        "type": "ISyncExtensionCallLogStatusGroup",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Missed",
            "All"
        ],
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for loadCallRecordingMetadata operation
 */
exports.loadCallRecordingMetadataOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "recordingId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for loadCallRecordingContent operation
 */
exports.loadCallRecordingContentOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "recordingId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
(function (IListAccountActiveCallsDirection) {
    IListAccountActiveCallsDirection[IListAccountActiveCallsDirection["Inbound"] = 'Inbound'] = "Inbound";
    IListAccountActiveCallsDirection[IListAccountActiveCallsDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.IListAccountActiveCallsDirection || (exports.IListAccountActiveCallsDirection = {}));
var IListAccountActiveCallsDirection = exports.IListAccountActiveCallsDirection;
(function (IListAccountActiveCallsType) {
    IListAccountActiveCallsType[IListAccountActiveCallsType["Voice"] = 'Voice'] = "Voice";
    IListAccountActiveCallsType[IListAccountActiveCallsType["Fax"] = 'Fax'] = "Fax";
})(exports.IListAccountActiveCallsType || (exports.IListAccountActiveCallsType = {}));
var IListAccountActiveCallsType = exports.IListAccountActiveCallsType;
(function (ILoadAccountCallLogDirection) {
    ILoadAccountCallLogDirection[ILoadAccountCallLogDirection["Inbound"] = 'Inbound'] = "Inbound";
    ILoadAccountCallLogDirection[ILoadAccountCallLogDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.ILoadAccountCallLogDirection || (exports.ILoadAccountCallLogDirection = {}));
var ILoadAccountCallLogDirection = exports.ILoadAccountCallLogDirection;
(function (ILoadAccountCallLogType) {
    ILoadAccountCallLogType[ILoadAccountCallLogType["Voice"] = 'Voice'] = "Voice";
    ILoadAccountCallLogType[ILoadAccountCallLogType["Fax"] = 'Fax'] = "Fax";
})(exports.ILoadAccountCallLogType || (exports.ILoadAccountCallLogType = {}));
var ILoadAccountCallLogType = exports.ILoadAccountCallLogType;
(function (ILoadAccountCallLogView) {
    ILoadAccountCallLogView[ILoadAccountCallLogView["Simple"] = 'Simple'] = "Simple";
    ILoadAccountCallLogView[ILoadAccountCallLogView["Detailed"] = 'Detailed'] = "Detailed";
})(exports.ILoadAccountCallLogView || (exports.ILoadAccountCallLogView = {}));
var ILoadAccountCallLogView = exports.ILoadAccountCallLogView;
(function (IListExtensionActiveCallsDirection) {
    IListExtensionActiveCallsDirection[IListExtensionActiveCallsDirection["Inbound"] = 'Inbound'] = "Inbound";
    IListExtensionActiveCallsDirection[IListExtensionActiveCallsDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.IListExtensionActiveCallsDirection || (exports.IListExtensionActiveCallsDirection = {}));
var IListExtensionActiveCallsDirection = exports.IListExtensionActiveCallsDirection;
(function (IListExtensionActiveCallsType) {
    IListExtensionActiveCallsType[IListExtensionActiveCallsType["Voice"] = 'Voice'] = "Voice";
    IListExtensionActiveCallsType[IListExtensionActiveCallsType["Fax"] = 'Fax'] = "Fax";
})(exports.IListExtensionActiveCallsType || (exports.IListExtensionActiveCallsType = {}));
var IListExtensionActiveCallsType = exports.IListExtensionActiveCallsType;
(function (ILoadExtensionCallLogDirection) {
    ILoadExtensionCallLogDirection[ILoadExtensionCallLogDirection["Inbound"] = 'Inbound'] = "Inbound";
    ILoadExtensionCallLogDirection[ILoadExtensionCallLogDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.ILoadExtensionCallLogDirection || (exports.ILoadExtensionCallLogDirection = {}));
var ILoadExtensionCallLogDirection = exports.ILoadExtensionCallLogDirection;
(function (ILoadExtensionCallLogType) {
    ILoadExtensionCallLogType[ILoadExtensionCallLogType["Voice"] = 'Voice'] = "Voice";
    ILoadExtensionCallLogType[ILoadExtensionCallLogType["Fax"] = 'Fax'] = "Fax";
})(exports.ILoadExtensionCallLogType || (exports.ILoadExtensionCallLogType = {}));
var ILoadExtensionCallLogType = exports.ILoadExtensionCallLogType;
(function (ILoadExtensionCallLogView) {
    ILoadExtensionCallLogView[ILoadExtensionCallLogView["Simple"] = 'Simple'] = "Simple";
    ILoadExtensionCallLogView[ILoadExtensionCallLogView["Detailed"] = 'Detailed'] = "Detailed";
})(exports.ILoadExtensionCallLogView || (exports.ILoadExtensionCallLogView = {}));
var ILoadExtensionCallLogView = exports.ILoadExtensionCallLogView;
(function (ISyncExtensionCallLogSyncType) {
    ISyncExtensionCallLogSyncType[ISyncExtensionCallLogSyncType["FSync"] = 'FSync'] = "FSync";
    ISyncExtensionCallLogSyncType[ISyncExtensionCallLogSyncType["ISync"] = 'ISync'] = "ISync";
})(exports.ISyncExtensionCallLogSyncType || (exports.ISyncExtensionCallLogSyncType = {}));
var ISyncExtensionCallLogSyncType = exports.ISyncExtensionCallLogSyncType;
(function (ISyncExtensionCallLogStatusGroup) {
    ISyncExtensionCallLogStatusGroup[ISyncExtensionCallLogStatusGroup["Missed"] = 'Missed'] = "Missed";
    ISyncExtensionCallLogStatusGroup[ISyncExtensionCallLogStatusGroup["All"] = 'All'] = "All";
})(exports.ISyncExtensionCallLogStatusGroup || (exports.ISyncExtensionCallLogStatusGroup = {}));
var ISyncExtensionCallLogStatusGroup = exports.ISyncExtensionCallLogStatusGroup;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogrecord = __webpack_require__(42);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var AccountActiveCalls = (function (_super) {
    __extends(AccountActiveCalls, _super);
    function AccountActiveCalls() {
        _super.apply(this, arguments);
    }
    AccountActiveCalls.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: calllogrecord.CallLogRecord, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    AccountActiveCalls.prototype.getClassName = function () {
        return 'AccountActiveCalls';
    };
    return AccountActiveCalls;
}(model.Model));
exports.AccountActiveCalls = AccountActiveCalls;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogcallerinfo = __webpack_require__(43);
var recordinginfo = __webpack_require__(44);
var calllogrecordleginfo = __webpack_require__(45);
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
            { property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false, isRequired: false },
            { property: 'lastModifiedTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'transport', Class: CallLogRecordTransport, isArray: false, isRequired: false },
            { property: 'legs', Class: calllogrecordleginfo.CallLogRecordLegInfo, isArray: true, isRequired: true }
        ];
    };
    CallLogRecord.prototype.getClassName = function () {
        return 'CallLogRecord';
    };
    return CallLogRecord;
}(model.Model));
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
    CallLogRecordResult[CallLogRecordResult["Callconnected"] = 'Call connected'] = "Callconnected";
    CallLogRecordResult[CallLogRecordResult["NoAnswer"] = 'No Answer'] = "NoAnswer";
    CallLogRecordResult[CallLogRecordResult["InternationalDisabled"] = 'International Disabled'] = "InternationalDisabled";
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


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.CallLogCallerInfo = CallLogCallerInfo;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: RecordingInfoType, isArray: false, isRequired: false },
            { property: 'contentUri', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    RecordingInfo.prototype.getClassName = function () {
        return 'RecordingInfo';
    };
    return RecordingInfo;
}(model.Model));
exports.RecordingInfo = RecordingInfo;
(function (RecordingInfoType) {
    RecordingInfoType[RecordingInfoType["Automatic"] = 'Automatic'] = "Automatic";
    RecordingInfoType[RecordingInfoType["OnDemand"] = 'OnDemand'] = "OnDemand";
})(exports.RecordingInfoType || (exports.RecordingInfoType = {}));
var RecordingInfoType = exports.RecordingInfoType;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var extensioninfocalllog = __webpack_require__(46);
var calllogcallerinfo = __webpack_require__(43);
var recordinginfo = __webpack_require__(44);
var CallLogRecordLegInfo = (function (_super) {
    __extends(CallLogRecordLegInfo, _super);
    function CallLogRecordLegInfo() {
        _super.apply(this, arguments);
    }
    CallLogRecordLegInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'action', Class: CallLogRecordLegInfoAction, isArray: false, isRequired: false },
            { property: 'direction', Class: CallLogRecordLegInfoDirection, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'extension', Class: extensioninfocalllog.ExtensionInfoCallLog, isArray: false, isRequired: false },
            { property: 'legType', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'startTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: CallLogRecordLegInfoType, isArray: false, isRequired: false },
            { property: 'result', Class: CallLogRecordLegInfoResult, isArray: false, isRequired: false },
            { property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'transport', Class: CallLogRecordLegInfoTransport, isArray: false, isRequired: false },
            { property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false, isRequired: false }
        ];
    };
    CallLogRecordLegInfo.prototype.getClassName = function () {
        return 'CallLogRecordLegInfo';
    };
    return CallLogRecordLegInfo;
}(model.Model));
exports.CallLogRecordLegInfo = CallLogRecordLegInfo;
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
(function (CallLogRecordLegInfoDirection) {
    CallLogRecordLegInfoDirection[CallLogRecordLegInfoDirection["Inbound"] = 'Inbound'] = "Inbound";
    CallLogRecordLegInfoDirection[CallLogRecordLegInfoDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.CallLogRecordLegInfoDirection || (exports.CallLogRecordLegInfoDirection = {}));
var CallLogRecordLegInfoDirection = exports.CallLogRecordLegInfoDirection;
(function (CallLogRecordLegInfoType) {
    CallLogRecordLegInfoType[CallLogRecordLegInfoType["Voice"] = 'Voice'] = "Voice";
    CallLogRecordLegInfoType[CallLogRecordLegInfoType["Fax"] = 'Fax'] = "Fax";
})(exports.CallLogRecordLegInfoType || (exports.CallLogRecordLegInfoType = {}));
var CallLogRecordLegInfoType = exports.CallLogRecordLegInfoType;
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
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["Callconnected"] = 'Call connected'] = "Callconnected";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["NoAnswer"] = 'No Answer'] = "NoAnswer";
    CallLogRecordLegInfoResult[CallLogRecordLegInfoResult["InternationalDisabled"] = 'International Disabled'] = "InternationalDisabled";
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


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ExtensionInfoCallLog = (function (_super) {
    __extends(ExtensionInfoCallLog, _super);
    function ExtensionInfoCallLog() {
        _super.apply(this, arguments);
    }
    ExtensionInfoCallLog.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    ExtensionInfoCallLog.prototype.getClassName = function () {
        return 'ExtensionInfoCallLog';
    };
    return ExtensionInfoCallLog;
}(model.Model));
exports.ExtensionInfoCallLog = ExtensionInfoCallLog;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogrecord = __webpack_require__(42);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var AccountCallLog = (function (_super) {
    __extends(AccountCallLog, _super);
    function AccountCallLog() {
        _super.apply(this, arguments);
    }
    AccountCallLog.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: calllogrecord.CallLogRecord, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    AccountCallLog.prototype.getClassName = function () {
        return 'AccountCallLog';
    };
    return AccountCallLog;
}(model.Model));
exports.AccountCallLog = AccountCallLog;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogcallerinfo = __webpack_require__(43);
var recordinginfo = __webpack_require__(44);
var AccountCallLogRecord = (function (_super) {
    __extends(AccountCallLogRecord, _super);
    function AccountCallLogRecord() {
        _super.apply(this, arguments);
    }
    AccountCallLogRecord.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'sessionId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'type', Class: AccountCallLogRecordType, isArray: false, isRequired: false },
            { property: 'direction', Class: AccountCallLogRecordDirection, isArray: false, isRequired: false },
            { property: 'action', Class: AccountCallLogRecordAction, isArray: false, isRequired: false },
            { property: 'result', Class: AccountCallLogRecordResult, isArray: false, isRequired: false },
            { property: 'startTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false, isRequired: false }
        ];
    };
    AccountCallLogRecord.prototype.getClassName = function () {
        return 'AccountCallLogRecord';
    };
    return AccountCallLogRecord;
}(model.Model));
exports.AccountCallLogRecord = AccountCallLogRecord;
(function (AccountCallLogRecordType) {
    AccountCallLogRecordType[AccountCallLogRecordType["Voice"] = 'Voice'] = "Voice";
    AccountCallLogRecordType[AccountCallLogRecordType["Fax"] = 'Fax'] = "Fax";
})(exports.AccountCallLogRecordType || (exports.AccountCallLogRecordType = {}));
var AccountCallLogRecordType = exports.AccountCallLogRecordType;
(function (AccountCallLogRecordDirection) {
    AccountCallLogRecordDirection[AccountCallLogRecordDirection["Inbound"] = 'Inbound'] = "Inbound";
    AccountCallLogRecordDirection[AccountCallLogRecordDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.AccountCallLogRecordDirection || (exports.AccountCallLogRecordDirection = {}));
var AccountCallLogRecordDirection = exports.AccountCallLogRecordDirection;
(function (AccountCallLogRecordAction) {
    AccountCallLogRecordAction[AccountCallLogRecordAction["Unknown"] = 'Unknown'] = "Unknown";
    AccountCallLogRecordAction[AccountCallLogRecordAction["PhoneCall"] = 'Phone Call'] = "PhoneCall";
    AccountCallLogRecordAction[AccountCallLogRecordAction["PhoneLogin"] = 'Phone Login'] = "PhoneLogin";
    AccountCallLogRecordAction[AccountCallLogRecordAction["IncomingFax"] = 'Incoming Fax'] = "IncomingFax";
    AccountCallLogRecordAction[AccountCallLogRecordAction["AcceptCall"] = 'Accept Call'] = "AcceptCall";
    AccountCallLogRecordAction[AccountCallLogRecordAction["FindMe"] = 'FindMe'] = "FindMe";
    AccountCallLogRecordAction[AccountCallLogRecordAction["FollowMe"] = 'FollowMe'] = "FollowMe";
    AccountCallLogRecordAction[AccountCallLogRecordAction["OutgoingFax"] = 'Outgoing Fax'] = "OutgoingFax";
    AccountCallLogRecordAction[AccountCallLogRecordAction["CallReturn"] = 'Call Return'] = "CallReturn";
    AccountCallLogRecordAction[AccountCallLogRecordAction["CallingCard"] = 'Calling Card'] = "CallingCard";
    AccountCallLogRecordAction[AccountCallLogRecordAction["RingDirectly"] = 'Ring Directly'] = "RingDirectly";
    AccountCallLogRecordAction[AccountCallLogRecordAction["RingOutWeb"] = 'RingOut Web'] = "RingOutWeb";
    AccountCallLogRecordAction[AccountCallLogRecordAction["VoIPCall"] = 'VoIP Call'] = "VoIPCall";
    AccountCallLogRecordAction[AccountCallLogRecordAction["RingOutPC"] = 'RingOut PC'] = "RingOutPC";
    AccountCallLogRecordAction[AccountCallLogRecordAction["RingMe"] = 'RingMe'] = "RingMe";
    AccountCallLogRecordAction[AccountCallLogRecordAction["Transfer"] = 'Transfer'] = "Transfer";
    AccountCallLogRecordAction[AccountCallLogRecordAction['411Info'] = '411 Info'] = '411Info';
    AccountCallLogRecordAction[AccountCallLogRecordAction["Emergency"] = 'Emergency'] = "Emergency";
    AccountCallLogRecordAction[AccountCallLogRecordAction['E911Update'] = 'E911 Update'] = 'E911Update';
    AccountCallLogRecordAction[AccountCallLogRecordAction["Support"] = 'Support'] = "Support";
    AccountCallLogRecordAction[AccountCallLogRecordAction["RingOutMobile"] = 'RingOut Mobile'] = "RingOutMobile";
})(exports.AccountCallLogRecordAction || (exports.AccountCallLogRecordAction = {}));
var AccountCallLogRecordAction = exports.AccountCallLogRecordAction;
(function (AccountCallLogRecordResult) {
    AccountCallLogRecordResult[AccountCallLogRecordResult["Unknown"] = 'Unknown'] = "Unknown";
    AccountCallLogRecordResult[AccountCallLogRecordResult["ResultInProgress"] = 'ResultInProgress'] = "ResultInProgress";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Missed"] = 'Missed'] = "Missed";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Callaccepted"] = 'Call accepted'] = "Callaccepted";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Voicemail"] = 'Voicemail'] = "Voicemail";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Rejected"] = 'Rejected'] = "Rejected";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Reply"] = 'Reply'] = "Reply";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Received"] = 'Received'] = "Received";
    AccountCallLogRecordResult[AccountCallLogRecordResult["ReceiveError"] = 'Receive Error'] = "ReceiveError";
    AccountCallLogRecordResult[AccountCallLogRecordResult["FaxonDemand"] = 'Fax on Demand'] = "FaxonDemand";
    AccountCallLogRecordResult[AccountCallLogRecordResult["PartialReceive"] = 'Partial Receive'] = "PartialReceive";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Blocked"] = 'Blocked'] = "Blocked";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Callconnected"] = 'Call connected'] = "Callconnected";
    AccountCallLogRecordResult[AccountCallLogRecordResult["NoAnswer"] = 'No Answer'] = "NoAnswer";
    AccountCallLogRecordResult[AccountCallLogRecordResult["InternationalDisabled"] = 'International Disabled'] = "InternationalDisabled";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Busy"] = 'Busy'] = "Busy";
    AccountCallLogRecordResult[AccountCallLogRecordResult["SendError"] = 'Send Error'] = "SendError";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Sent"] = 'Sent'] = "Sent";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Nofaxmachine"] = 'No fax machine'] = "Nofaxmachine";
    AccountCallLogRecordResult[AccountCallLogRecordResult["ResultEmpty"] = 'ResultEmpty'] = "ResultEmpty";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Account"] = 'Account'] = "Account";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Suspended"] = 'Suspended'] = "Suspended";
    AccountCallLogRecordResult[AccountCallLogRecordResult["CallFailed"] = 'Call Failed'] = "CallFailed";
    AccountCallLogRecordResult[AccountCallLogRecordResult["CallFailure"] = 'Call Failure'] = "CallFailure";
    AccountCallLogRecordResult[AccountCallLogRecordResult["InternalError"] = 'Internal Error'] = "InternalError";
    AccountCallLogRecordResult[AccountCallLogRecordResult["IPPhoneoffline"] = 'IP Phone offline'] = "IPPhoneoffline";
    AccountCallLogRecordResult[AccountCallLogRecordResult["RestrictedNumber"] = 'Restricted Number'] = "RestrictedNumber";
    AccountCallLogRecordResult[AccountCallLogRecordResult["WrongNumber"] = 'Wrong Number'] = "WrongNumber";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Stopped"] = 'Stopped'] = "Stopped";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Hangup"] = 'Hang up'] = "Hangup";
    AccountCallLogRecordResult[AccountCallLogRecordResult["PoorLineQuality"] = 'Poor Line Quality'] = "PoorLineQuality";
    AccountCallLogRecordResult[AccountCallLogRecordResult["PartiallySent"] = 'Partially Sent'] = "PartiallySent";
    AccountCallLogRecordResult[AccountCallLogRecordResult["InternationalRestriction"] = 'International Restriction'] = "InternationalRestriction";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Abandoned"] = 'Abandoned'] = "Abandoned";
    AccountCallLogRecordResult[AccountCallLogRecordResult["Declined"] = 'Declined'] = "Declined";
    AccountCallLogRecordResult[AccountCallLogRecordResult["FaxReceiptError"] = 'Fax Receipt Error'] = "FaxReceiptError";
    AccountCallLogRecordResult[AccountCallLogRecordResult["FaxSendError"] = 'Fax Send Error'] = "FaxSendError";
})(exports.AccountCallLogRecordResult || (exports.AccountCallLogRecordResult = {}));
var AccountCallLogRecordResult = exports.AccountCallLogRecordResult;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogrecord = __webpack_require__(42);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var ExtensionActiveCalls = (function (_super) {
    __extends(ExtensionActiveCalls, _super);
    function ExtensionActiveCalls() {
        _super.apply(this, arguments);
    }
    ExtensionActiveCalls.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: calllogrecord.CallLogRecord, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    ExtensionActiveCalls.prototype.getClassName = function () {
        return 'ExtensionActiveCalls';
    };
    return ExtensionActiveCalls;
}(model.Model));
exports.ExtensionActiveCalls = ExtensionActiveCalls;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogrecord = __webpack_require__(42);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var ExtensionCallLog = (function (_super) {
    __extends(ExtensionCallLog, _super);
    function ExtensionCallLog() {
        _super.apply(this, arguments);
    }
    ExtensionCallLog.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: calllogrecord.CallLogRecord, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    ExtensionCallLog.prototype.getClassName = function () {
        return 'ExtensionCallLog';
    };
    return ExtensionCallLog;
}(model.Model));
exports.ExtensionCallLog = ExtensionCallLog;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogcallerinfo = __webpack_require__(43);
var recordinginfo = __webpack_require__(44);
var ExtensionCallLogRecord = (function (_super) {
    __extends(ExtensionCallLogRecord, _super);
    function ExtensionCallLogRecord() {
        _super.apply(this, arguments);
    }
    ExtensionCallLogRecord.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'sessionId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false, isRequired: false },
            { property: 'type', Class: ExtensionCallLogRecordType, isArray: false, isRequired: false },
            { property: 'direction', Class: ExtensionCallLogRecordDirection, isArray: false, isRequired: false },
            { property: 'action', Class: ExtensionCallLogRecordAction, isArray: false, isRequired: false },
            { property: 'result', Class: ExtensionCallLogRecordResult, isArray: false, isRequired: false },
            { property: 'startTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false, isRequired: false }
        ];
    };
    ExtensionCallLogRecord.prototype.getClassName = function () {
        return 'ExtensionCallLogRecord';
    };
    return ExtensionCallLogRecord;
}(model.Model));
exports.ExtensionCallLogRecord = ExtensionCallLogRecord;
(function (ExtensionCallLogRecordType) {
    ExtensionCallLogRecordType[ExtensionCallLogRecordType["Voice"] = 'Voice'] = "Voice";
    ExtensionCallLogRecordType[ExtensionCallLogRecordType["Fax"] = 'Fax'] = "Fax";
})(exports.ExtensionCallLogRecordType || (exports.ExtensionCallLogRecordType = {}));
var ExtensionCallLogRecordType = exports.ExtensionCallLogRecordType;
(function (ExtensionCallLogRecordDirection) {
    ExtensionCallLogRecordDirection[ExtensionCallLogRecordDirection["Inbound"] = 'Inbound'] = "Inbound";
    ExtensionCallLogRecordDirection[ExtensionCallLogRecordDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.ExtensionCallLogRecordDirection || (exports.ExtensionCallLogRecordDirection = {}));
var ExtensionCallLogRecordDirection = exports.ExtensionCallLogRecordDirection;
(function (ExtensionCallLogRecordAction) {
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["Unknown"] = 'Unknown'] = "Unknown";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["PhoneCall"] = 'Phone Call'] = "PhoneCall";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["PhoneLogin"] = 'Phone Login'] = "PhoneLogin";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["IncomingFax"] = 'Incoming Fax'] = "IncomingFax";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["AcceptCall"] = 'Accept Call'] = "AcceptCall";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["FindMe"] = 'FindMe'] = "FindMe";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["FollowMe"] = 'FollowMe'] = "FollowMe";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["OutgoingFax"] = 'Outgoing Fax'] = "OutgoingFax";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["CallReturn"] = 'Call Return'] = "CallReturn";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["CallingCard"] = 'Calling Card'] = "CallingCard";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["RingDirectly"] = 'Ring Directly'] = "RingDirectly";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["RingOutWeb"] = 'RingOut Web'] = "RingOutWeb";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["VoIPCall"] = 'VoIP Call'] = "VoIPCall";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["RingOutPC"] = 'RingOut PC'] = "RingOutPC";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["RingMe"] = 'RingMe'] = "RingMe";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["Transfer"] = 'Transfer'] = "Transfer";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction['411Info'] = '411 Info'] = '411Info';
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["Emergency"] = 'Emergency'] = "Emergency";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction['E911Update'] = 'E911 Update'] = 'E911Update';
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["Support"] = 'Support'] = "Support";
    ExtensionCallLogRecordAction[ExtensionCallLogRecordAction["RingOutMobile"] = 'RingOut Mobile'] = "RingOutMobile";
})(exports.ExtensionCallLogRecordAction || (exports.ExtensionCallLogRecordAction = {}));
var ExtensionCallLogRecordAction = exports.ExtensionCallLogRecordAction;
(function (ExtensionCallLogRecordResult) {
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Unknown"] = 'Unknown'] = "Unknown";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["ResultInProgress"] = 'ResultInProgress'] = "ResultInProgress";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Missed"] = 'Missed'] = "Missed";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Callaccepted"] = 'Call accepted'] = "Callaccepted";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Voicemail"] = 'Voicemail'] = "Voicemail";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Rejected"] = 'Rejected'] = "Rejected";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Reply"] = 'Reply'] = "Reply";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Received"] = 'Received'] = "Received";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["ReceiveError"] = 'Receive Error'] = "ReceiveError";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["FaxonDemand"] = 'Fax on Demand'] = "FaxonDemand";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["PartialReceive"] = 'Partial Receive'] = "PartialReceive";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Blocked"] = 'Blocked'] = "Blocked";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Callconnected"] = 'Call connected'] = "Callconnected";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["NoAnswer"] = 'No Answer'] = "NoAnswer";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["InternationalDisabled"] = 'International Disabled'] = "InternationalDisabled";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Busy"] = 'Busy'] = "Busy";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["SendError"] = 'Send Error'] = "SendError";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Sent"] = 'Sent'] = "Sent";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Nofaxmachine"] = 'No fax machine'] = "Nofaxmachine";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["ResultEmpty"] = 'ResultEmpty'] = "ResultEmpty";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Account"] = 'Account'] = "Account";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Suspended"] = 'Suspended'] = "Suspended";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["CallFailed"] = 'Call Failed'] = "CallFailed";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["CallFailure"] = 'Call Failure'] = "CallFailure";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["InternalError"] = 'Internal Error'] = "InternalError";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["IPPhoneoffline"] = 'IP Phone offline'] = "IPPhoneoffline";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["RestrictedNumber"] = 'Restricted Number'] = "RestrictedNumber";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["WrongNumber"] = 'Wrong Number'] = "WrongNumber";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Stopped"] = 'Stopped'] = "Stopped";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Hangup"] = 'Hang up'] = "Hangup";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["PoorLineQuality"] = 'Poor Line Quality'] = "PoorLineQuality";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["PartiallySent"] = 'Partially Sent'] = "PartiallySent";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["InternationalRestriction"] = 'International Restriction'] = "InternationalRestriction";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Abandoned"] = 'Abandoned'] = "Abandoned";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["Declined"] = 'Declined'] = "Declined";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["FaxReceiptError"] = 'Fax Receipt Error'] = "FaxReceiptError";
    ExtensionCallLogRecordResult[ExtensionCallLogRecordResult["FaxSendError"] = 'Fax Send Error'] = "FaxSendError";
})(exports.ExtensionCallLogRecordResult || (exports.ExtensionCallLogRecordResult = {}));
var ExtensionCallLogRecordResult = exports.ExtensionCallLogRecordResult;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var calllogrecord = __webpack_require__(42);
var syncinfocalllog = __webpack_require__(53);
var CallLogSync = (function (_super) {
    __extends(CallLogSync, _super);
    function CallLogSync() {
        _super.apply(this, arguments);
    }
    CallLogSync.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: calllogrecord.CallLogRecord, isArray: true, isRequired: true },
            { property: 'syncInfo', Class: syncinfocalllog.SyncInfoCallLog, isArray: false, isRequired: false }
        ];
    };
    CallLogSync.prototype.getClassName = function () {
        return 'CallLogSync';
    };
    return CallLogSync;
}(model.Model));
exports.CallLogSync = CallLogSync;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var SyncInfoCallLog = (function (_super) {
    __extends(SyncInfoCallLog, _super);
    function SyncInfoCallLog() {
        _super.apply(this, arguments);
    }
    SyncInfoCallLog.prototype.getPropertyMappings = function () {
        return [
            { property: 'syncType', Class: SyncInfoCallLogSyncType, isArray: false, isRequired: false },
            { property: 'syncToken', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'syncTime', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    SyncInfoCallLog.prototype.getClassName = function () {
        return 'SyncInfoCallLog';
    };
    return SyncInfoCallLog;
}(model.Model));
exports.SyncInfoCallLog = SyncInfoCallLog;
(function (SyncInfoCallLogSyncType) {
    SyncInfoCallLogSyncType[SyncInfoCallLogSyncType["FSync"] = 'FSync'] = "FSync";
    SyncInfoCallLogSyncType[SyncInfoCallLogSyncType["ISync"] = 'ISync'] = "ISync";
})(exports.SyncInfoCallLogSyncType || (exports.SyncInfoCallLogSyncType = {}));
var SyncInfoCallLogSyncType = exports.SyncInfoCallLogSyncType;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var CallRecording = (function (_super) {
    __extends(CallRecording, _super);
    function CallRecording() {
        _super.apply(this, arguments);
    }
    CallRecording.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'contentUri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'contentType', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'duration', Class: null /* number */, isArray: false, isRequired: false }
        ];
    };
    CallRecording.prototype.getClassName = function () {
        return 'CallRecording';
    };
    return CallRecording;
}(model.Model));
exports.CallRecording = CallRecording;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var countrylist = __webpack_require__(56);
var dictionarycountryinfo = __webpack_require__(57);
var languagelist = __webpack_require__(58);
var languageinfo = __webpack_require__(17);
var dictionarylocationlist = __webpack_require__(59);
var dictionarysecretquestionlist = __webpack_require__(61);
var secretquestioninfo = __webpack_require__(62);
var dictionaryshippingoptions = __webpack_require__(63);
var dictionarystatelist = __webpack_require__(65);
var dictionarystateinfo = __webpack_require__(66);
var dictionarytimezonelist = __webpack_require__(68);
var dictionarytimezoneinfo = __webpack_require__(69);
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listCountries = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/country', options, exports.listCountriesOptions), countrylist.CountryList);
    };
    /**
     * Get Country
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on the required country.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.loadCountry = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/country/{countryId}', options, exports.loadCountryOptions), dictionarycountryinfo.DictionaryCountryInfo);
    };
    /**
     * Get Language List
     *
     * <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p>
     * <p>Returns the information about supported languages.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listLanguages = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/language', options, exports.listLanguagesOptions), languagelist.LanguageList);
    };
    /**
     * Get Language
     *
     * <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p>
     * <p>Returns language by its respective ID.</p>
     * <h4>API Group</h4>
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listLocations = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/location', options, exports.listLocationsOptions), dictionarylocationlist.DictionaryLocationList);
    };
    /**
     * Get Secret Question List
     *
     * <p style='font-style:italic;'>Since 1.0.20 (Release 7.4)</p>
     * <p>Returns the list of secret questions for a specific language.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listSecretQuestions = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/secret-question', options, exports.listSecretQuestionsOptions), dictionarysecretquestionlist.DictionarySecretQuestionList);
    };
    /**
     * Get Secret Question
     *
     * <p style='font-style:italic;'>Since 1.0.20 (Release 7.4)</p>
     * <p>Returns a particular secret question in specific language by question ID.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.loadSecretQuestion = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/secret-question/questionId', options, exports.loadSecretQuestionOptions), secretquestioninfo.SecretQuestionInfo);
    };
    /**
     * Get Shipping Options
     *
     * <p style='font-style:italic;'>Since 1.0.16 (Release 7.1)</p>
     * <p>Returns the list of device shipping options with their prices, according to brand, tier, number of ordered devices.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listShippingOptions = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/shipping-options', options, exports.listShippingOptionsOptions), dictionaryshippingoptions.DictionaryShippingOptions);
    };
    /**
     * Get State List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all the states for a certain country.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.loadlistStates = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/state', options, exports.loadlistStatesOptions), dictionarystatelist.DictionaryStateList);
    };
    /**
     * Get State
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on the required state.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.loadState = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/state/{stateId}', options, exports.loadStateOptions), dictionarystateinfo.DictionaryStateInfo);
    };
    /**
     * Get Timezone List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all available timezones.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.listTimezones = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/timezone', options, exports.listTimezonesOptions), dictionarytimezonelist.DictionaryTimezoneList);
    };
    /**
     * Get Timezone
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on a certain timezone.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Dictionary.prototype.loadTimezone = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/timezone/{timezoneId}', options, exports.loadTimezoneOptions), dictionarytimezoneinfo.DictionaryTimezoneInfo);
    };
    return Dictionary;
}(client.Client));
exports.Dictionary = Dictionary;
/**
 * Definition of options for listCountries operation
 */
exports.listCountriesOptions = [
    {
        "name": "loginAllowed",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "numberSelling",
        "type": "boolean",
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
exports.loadLanguageOptions = [
    {
        "name": "languageId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
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
    },
    {
        "name": "withNxx",
        "type": "boolean",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for listSecretQuestions operation
 */
exports.listSecretQuestionsOptions = [];
/**
 * Definition of options for loadSecretQuestion operation
 */
exports.loadSecretQuestionOptions = [
    {
        "name": "questionId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for listShippingOptions operation
 */
exports.listShippingOptionsOptions = [];
/**
 * Definition of options for loadlistStates operation
 */
exports.loadlistStatesOptions = [
    {
        "name": "countryId",
        "type": "number",
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var dictionarycountryinfo = __webpack_require__(57);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var CountryList = (function (_super) {
    __extends(CountryList, _super);
    function CountryList() {
        _super.apply(this, arguments);
    }
    CountryList.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: dictionarycountryinfo.DictionaryCountryInfo, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    CountryList.prototype.getClassName = function () {
        return 'CountryList';
    };
    return CountryList;
}(model.Model));
exports.CountryList = CountryList;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var DictionaryCountryInfo = (function (_super) {
    __extends(DictionaryCountryInfo, _super);
    function DictionaryCountryInfo() {
        _super.apply(this, arguments);
    }
    DictionaryCountryInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'callingCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'emergencyCalling', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'isoCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'numberSelling', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'loginAllowed', Class: null /* boolean */, isArray: false, isRequired: false }
        ];
    };
    DictionaryCountryInfo.prototype.getClassName = function () {
        return 'DictionaryCountryInfo';
    };
    return DictionaryCountryInfo;
}(model.Model));
exports.DictionaryCountryInfo = DictionaryCountryInfo;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var languageinfo = __webpack_require__(17);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var LanguageList = (function (_super) {
    __extends(LanguageList, _super);
    function LanguageList() {
        _super.apply(this, arguments);
    }
    LanguageList.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: true },
            { property: 'records', Class: languageinfo.LanguageInfo, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    LanguageList.prototype.getClassName = function () {
        return 'LanguageList';
    };
    return LanguageList;
}(model.Model));
exports.LanguageList = LanguageList;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var locationinfo = __webpack_require__(60);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var DictionaryLocationList = (function (_super) {
    __extends(DictionaryLocationList, _super);
    function DictionaryLocationList() {
        _super.apply(this, arguments);
    }
    DictionaryLocationList.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: locationinfo.LocationInfo, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    DictionaryLocationList.prototype.getClassName = function () {
        return 'DictionaryLocationList';
    };
    return DictionaryLocationList;
}(model.Model));
exports.DictionaryLocationList = DictionaryLocationList;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
            { property: 'areaCode', Class: null /* string */, isArray: false, isRequired: false },
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
}(model.Model));
exports.LocationInfo = LocationInfo;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var secretquestioninfo = __webpack_require__(62);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var DictionarySecretQuestionList = (function (_super) {
    __extends(DictionarySecretQuestionList, _super);
    function DictionarySecretQuestionList() {
        _super.apply(this, arguments);
    }
    DictionarySecretQuestionList.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'records', Class: secretquestioninfo.SecretQuestionInfo, isArray: true, isRequired: false },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: false },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: false }
        ];
    };
    DictionarySecretQuestionList.prototype.getClassName = function () {
        return 'DictionarySecretQuestionList';
    };
    return DictionarySecretQuestionList;
}(model.Model));
exports.DictionarySecretQuestionList = DictionarySecretQuestionList;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var SecretQuestionInfo = (function (_super) {
    __extends(SecretQuestionInfo, _super);
    function SecretQuestionInfo() {
        _super.apply(this, arguments);
    }
    SecretQuestionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'questionType', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'languageId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'questionText', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'showInSignUp', Class: null /* boolean */, isArray: false, isRequired: false }
        ];
    };
    SecretQuestionInfo.prototype.getClassName = function () {
        return 'SecretQuestionInfo';
    };
    return SecretQuestionInfo;
}(model.Model));
exports.SecretQuestionInfo = SecretQuestionInfo;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var shippingmethodinfo = __webpack_require__(64);
var DictionaryShippingOptions = (function (_super) {
    __extends(DictionaryShippingOptions, _super);
    function DictionaryShippingOptions() {
        _super.apply(this, arguments);
    }
    DictionaryShippingOptions.prototype.getPropertyMappings = function () {
        return [
            { property: 'quantity', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'price', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'method', Class: shippingmethodinfo.ShippingMethodInfo, isArray: false, isRequired: true }
        ];
    };
    DictionaryShippingOptions.prototype.getClassName = function () {
        return 'DictionaryShippingOptions';
    };
    return DictionaryShippingOptions;
}(model.Model));
exports.DictionaryShippingOptions = DictionaryShippingOptions;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ShippingMethodInfo = (function (_super) {
    __extends(ShippingMethodInfo, _super);
    function ShippingMethodInfo() {
        _super.apply(this, arguments);
    }
    ShippingMethodInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    ShippingMethodInfo.prototype.getClassName = function () {
        return 'ShippingMethodInfo';
    };
    return ShippingMethodInfo;
}(model.Model));
exports.ShippingMethodInfo = ShippingMethodInfo;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var dictionarystateinfo = __webpack_require__(66);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var DictionaryStateList = (function (_super) {
    __extends(DictionaryStateList, _super);
    function DictionaryStateList() {
        _super.apply(this, arguments);
    }
    DictionaryStateList.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: dictionarystateinfo.DictionaryStateInfo, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    DictionaryStateList.prototype.getClassName = function () {
        return 'DictionaryStateList';
    };
    return DictionaryStateList;
}(model.Model));
exports.DictionaryStateList = DictionaryStateList;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var statecountryinfo = __webpack_require__(67);
var DictionaryStateInfo = (function (_super) {
    __extends(DictionaryStateInfo, _super);
    function DictionaryStateInfo() {
        _super.apply(this, arguments);
    }
    DictionaryStateInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'country', Class: statecountryinfo.StateCountryInfo, isArray: false, isRequired: false },
            { property: 'isoCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    DictionaryStateInfo.prototype.getClassName = function () {
        return 'DictionaryStateInfo';
    };
    return DictionaryStateInfo;
}(model.Model));
exports.DictionaryStateInfo = DictionaryStateInfo;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var StateCountryInfo = (function (_super) {
    __extends(StateCountryInfo, _super);
    function StateCountryInfo() {
        _super.apply(this, arguments);
    }
    StateCountryInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    StateCountryInfo.prototype.getClassName = function () {
        return 'StateCountryInfo';
    };
    return StateCountryInfo;
}(model.Model));
exports.StateCountryInfo = StateCountryInfo;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var dictionarytimezoneinfo = __webpack_require__(69);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var DictionaryTimezoneList = (function (_super) {
    __extends(DictionaryTimezoneList, _super);
    function DictionaryTimezoneList() {
        _super.apply(this, arguments);
    }
    DictionaryTimezoneList.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: dictionarytimezoneinfo.DictionaryTimezoneInfo, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    DictionaryTimezoneList.prototype.getClassName = function () {
        return 'DictionaryTimezoneList';
    };
    return DictionaryTimezoneList;
}(model.Model));
exports.DictionaryTimezoneList = DictionaryTimezoneList;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var DictionaryTimezoneInfo = (function (_super) {
    __extends(DictionaryTimezoneInfo, _super);
    function DictionaryTimezoneInfo() {
        _super.apply(this, arguments);
    }
    DictionaryTimezoneInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'description', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    DictionaryTimezoneInfo.prototype.getClassName = function () {
        return 'DictionaryTimezoneInfo';
    };
    return DictionaryTimezoneInfo;
}(model.Model));
exports.DictionaryTimezoneInfo = DictionaryTimezoneInfo;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var extensionlist = __webpack_require__(71);
var extensioninfo = __webpack_require__(6);
var extensionphonenumbers = __webpack_require__(72);
var extensiongrantlist = __webpack_require__(73);
var departmentmembers = __webpack_require__(76);
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
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Extension.prototype.listExtensions = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension', options, exports.listExtensionsOptions), extensionlist.ExtensionList);
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Extension.prototype.loadExtensionInfo = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}', options, exports.loadExtensionInfoOptions), extensioninfo.ExtensionInfo);
    };
    /**
     * Get Extension Phone Number List
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns the list of phone numbers that are used by a particular extension, and can be filtered by the phone number type. The returned list contains all numbers which are directly mapped to a given extension plus the features and also company-level numbers
     *     which may be used when performing different operations on behalf of this extension.</p>
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Extension.prototype.listExtensionPhoneNumbers = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number', options, exports.listExtensionPhoneNumbersOptions), extensionphonenumbers.ExtensionPhoneNumbers);
    };
    /**
     * Get Extension Grant List
     *
     * <p style='font-style:italic;'></p>
     * <p>Returns the list of extension grants.</p>
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Extension.prototype.listExtensionGrants = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/grant', options, exports.listExtensionGrantsOptions), extensiongrantlist.ExtensionGrantList);
    };
    /**
     * Get Extension Profile Image
     *
     * <p style='font-style:italic;'></p>
     * <p>Returns the extension profile image.</p>
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
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Extension.prototype.loadExtensionProfileImage = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image', options, exports.loadExtensionProfileImageOptions), null);
    };
    /**
     * Create Extension Profile Image
     *
     * <p style='font-style:italic;'></p>
     * <p>Returns the extension profile image.</p>
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
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>High</p>
     */
    Extension.prototype.createExtensionProfileImage = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image', options, exports.createExtensionProfileImageOptions), null);
    };
    /**
     * Update Extension Profile Image
     *
     * <p style='font-style:italic;'></p>
     * <p>Updates the extension profile image.</p>
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
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>High</p>
     */
    Extension.prototype.updateExtensionProfileImage = function (options) {
        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image', options, exports.updateExtensionProfileImageOptions), null);
    };
    /**
     * Get Extension Profile Image
     *
     * <p style='font-style:italic;'></p>
     * <p>Returns the scaled profile image of an extension.</p>
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
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Extension.prototype.loadExtensionScaledProfileImage = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}', options, exports.loadExtensionScaledProfileImageOptions), null);
    };
    /**
     * Get Department Member List
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
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Extension.prototype.listDepartmentMembers = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/department/{departmentId}/members', options, exports.listDepartmentMembersOptions), departmentmembers.DepartmentMembers);
    };
    return Extension;
}(client.Client));
exports.Extension = Extension;
/**
 * Definition of options for listExtensions operation
 */
exports.listExtensionsOptions = [
    {
        "name": "accountId",
        "type": "string",
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
        "type": "IListExtensionsStatus",
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
    },
    {
        "name": "type",
        "type": "IListExtensionsType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "User",
            "FaxUser",
            "VirtualUser",
            "DigitalUser",
            "Department",
            "Announcement",
            "Voicemail",
            "SharedLinesGroup",
            "PagingOnlyGroup",
            "IvrMenu",
            "ApplicationExtension",
            "ParkLocation"
        ],
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for loadExtensionInfo operation
 */
exports.loadExtensionInfoOptions = [
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
/**
 * Definition of options for listExtensionPhoneNumbers operation
 */
exports.listExtensionPhoneNumbersOptions = [
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
        "name": "usageType",
        "type": "IListExtensionPhoneNumbersUsageType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "MainCompanyNumber",
            "AdditionalCompanyNumber",
            "CompanyNumber",
            "DirectNumber",
            "CompanyFaxNumber",
            "ForwardedNumber"
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
 * Definition of options for listExtensionGrants operation
 */
exports.listExtensionGrantsOptions = [
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
 * Definition of options for loadExtensionProfileImage operation
 */
exports.loadExtensionProfileImageOptions = [
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
/**
 * Definition of options for createExtensionProfileImage operation
 */
exports.createExtensionProfileImageOptions = [
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
/**
 * Definition of options for updateExtensionProfileImage operation
 */
exports.updateExtensionProfileImageOptions = [
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
/**
 * Definition of options for loadExtensionScaledProfileImage operation
 */
exports.loadExtensionScaledProfileImageOptions = [
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
        "name": "scaleSize",
        "type": "string",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for listDepartmentMembers operation
 */
exports.listDepartmentMembersOptions = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "departmentId",
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
(function (IListExtensionsStatus) {
    IListExtensionsStatus[IListExtensionsStatus["Enabled"] = 'Enabled'] = "Enabled";
    IListExtensionsStatus[IListExtensionsStatus["Disabled"] = 'Disabled'] = "Disabled";
    IListExtensionsStatus[IListExtensionsStatus["NotActivated"] = 'NotActivated'] = "NotActivated";
    IListExtensionsStatus[IListExtensionsStatus["Unassigned"] = 'Unassigned'] = "Unassigned";
})(exports.IListExtensionsStatus || (exports.IListExtensionsStatus = {}));
var IListExtensionsStatus = exports.IListExtensionsStatus;
(function (IListExtensionsType) {
    IListExtensionsType[IListExtensionsType["User"] = 'User'] = "User";
    IListExtensionsType[IListExtensionsType["FaxUser"] = 'FaxUser'] = "FaxUser";
    IListExtensionsType[IListExtensionsType["VirtualUser"] = 'VirtualUser'] = "VirtualUser";
    IListExtensionsType[IListExtensionsType["DigitalUser"] = 'DigitalUser'] = "DigitalUser";
    IListExtensionsType[IListExtensionsType["Department"] = 'Department'] = "Department";
    IListExtensionsType[IListExtensionsType["Announcement"] = 'Announcement'] = "Announcement";
    IListExtensionsType[IListExtensionsType["Voicemail"] = 'Voicemail'] = "Voicemail";
    IListExtensionsType[IListExtensionsType["SharedLinesGroup"] = 'SharedLinesGroup'] = "SharedLinesGroup";
    IListExtensionsType[IListExtensionsType["PagingOnlyGroup"] = 'PagingOnlyGroup'] = "PagingOnlyGroup";
    IListExtensionsType[IListExtensionsType["IvrMenu"] = 'IvrMenu'] = "IvrMenu";
    IListExtensionsType[IListExtensionsType["ApplicationExtension"] = 'ApplicationExtension'] = "ApplicationExtension";
    IListExtensionsType[IListExtensionsType["ParkLocation"] = 'ParkLocation'] = "ParkLocation";
})(exports.IListExtensionsType || (exports.IListExtensionsType = {}));
var IListExtensionsType = exports.IListExtensionsType;
(function (IListExtensionPhoneNumbersUsageType) {
    IListExtensionPhoneNumbersUsageType[IListExtensionPhoneNumbersUsageType["MainCompanyNumber"] = 'MainCompanyNumber'] = "MainCompanyNumber";
    IListExtensionPhoneNumbersUsageType[IListExtensionPhoneNumbersUsageType["AdditionalCompanyNumber"] = 'AdditionalCompanyNumber'] = "AdditionalCompanyNumber";
    IListExtensionPhoneNumbersUsageType[IListExtensionPhoneNumbersUsageType["CompanyNumber"] = 'CompanyNumber'] = "CompanyNumber";
    IListExtensionPhoneNumbersUsageType[IListExtensionPhoneNumbersUsageType["DirectNumber"] = 'DirectNumber'] = "DirectNumber";
    IListExtensionPhoneNumbersUsageType[IListExtensionPhoneNumbersUsageType["CompanyFaxNumber"] = 'CompanyFaxNumber'] = "CompanyFaxNumber";
    IListExtensionPhoneNumbersUsageType[IListExtensionPhoneNumbersUsageType["ForwardedNumber"] = 'ForwardedNumber'] = "ForwardedNumber";
})(exports.IListExtensionPhoneNumbersUsageType || (exports.IListExtensionPhoneNumbersUsageType = {}));
var IListExtensionPhoneNumbersUsageType = exports.IListExtensionPhoneNumbersUsageType;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var extensioninfo = __webpack_require__(6);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var ExtensionList = (function (_super) {
    __extends(ExtensionList, _super);
    function ExtensionList() {
        _super.apply(this, arguments);
    }
    ExtensionList.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: extensioninfo.ExtensionInfo, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    ExtensionList.prototype.getClassName = function () {
        return 'ExtensionList';
    };
    return ExtensionList;
}(model.Model));
exports.ExtensionList = ExtensionList;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var phonenumberinfo = __webpack_require__(34);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var ExtensionPhoneNumbers = (function (_super) {
    __extends(ExtensionPhoneNumbers, _super);
    function ExtensionPhoneNumbers() {
        _super.apply(this, arguments);
    }
    ExtensionPhoneNumbers.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: phonenumberinfo.PhoneNumberInfo, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    ExtensionPhoneNumbers.prototype.getClassName = function () {
        return 'ExtensionPhoneNumbers';
    };
    return ExtensionPhoneNumbers;
}(model.Model));
exports.ExtensionPhoneNumbers = ExtensionPhoneNumbers;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var grantinfo = __webpack_require__(74);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var ExtensionGrantList = (function (_super) {
    __extends(ExtensionGrantList, _super);
    function ExtensionGrantList() {
        _super.apply(this, arguments);
    }
    ExtensionGrantList.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: grantinfo.GrantInfo, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    ExtensionGrantList.prototype.getClassName = function () {
        return 'ExtensionGrantList';
    };
    return ExtensionGrantList;
}(model.Model));
exports.ExtensionGrantList = ExtensionGrantList;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var extensioninfogrants = __webpack_require__(75);
var GrantInfo = (function (_super) {
    __extends(GrantInfo, _super);
    function GrantInfo() {
        _super.apply(this, arguments);
    }
    GrantInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extension', Class: extensioninfogrants.ExtensionInfoGrants, isArray: false, isRequired: false },
            { property: 'callPickup', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'callMonitoring', Class: null /* boolean */, isArray: false, isRequired: false }
        ];
    };
    GrantInfo.prototype.getClassName = function () {
        return 'GrantInfo';
    };
    return GrantInfo;
}(model.Model));
exports.GrantInfo = GrantInfo;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ExtensionInfoGrants = (function (_super) {
    __extends(ExtensionInfoGrants, _super);
    function ExtensionInfoGrants() {
        _super.apply(this, arguments);
    }
    ExtensionInfoGrants.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: ExtensionInfoGrantsType, isArray: false, isRequired: false }
        ];
    };
    ExtensionInfoGrants.prototype.getClassName = function () {
        return 'ExtensionInfoGrants';
    };
    return ExtensionInfoGrants;
}(model.Model));
exports.ExtensionInfoGrants = ExtensionInfoGrants;
(function (ExtensionInfoGrantsType) {
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["User"] = 'User'] = "User";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["FaxUser"] = 'Fax User'] = "FaxUser";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["VirtualUser"] = 'VirtualUser'] = "VirtualUser";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["DigitalUser"] = 'DigitalUser'] = "DigitalUser";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["Department"] = 'Department'] = "Department";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["Announcement"] = 'Announcement'] = "Announcement";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["Voicemail"] = 'Voicemail'] = "Voicemail";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["SharedLinesGroup"] = 'SharedLinesGroup'] = "SharedLinesGroup";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["PagingOnly"] = 'PagingOnly'] = "PagingOnly";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["IvrMenu"] = 'IvrMenu'] = "IvrMenu";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["ApplicationExtension"] = 'ApplicationExtension'] = "ApplicationExtension";
    ExtensionInfoGrantsType[ExtensionInfoGrantsType["ParkLocation"] = 'Park Location'] = "ParkLocation";
})(exports.ExtensionInfoGrantsType || (exports.ExtensionInfoGrantsType = {}));
var ExtensionInfoGrantsType = exports.ExtensionInfoGrantsType;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var extensioninfo = __webpack_require__(6);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var DepartmentMembers = (function (_super) {
    __extends(DepartmentMembers, _super);
    function DepartmentMembers() {
        _super.apply(this, arguments);
    }
    DepartmentMembers.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: extensioninfo.ExtensionInfo, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    DepartmentMembers.prototype.getClassName = function () {
        return 'DepartmentMembers';
    };
    return DepartmentMembers;
}(model.Model));
exports.DepartmentMembers = DepartmentMembers;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var messageinfo = __webpack_require__(78);
var messagelist = __webpack_require__(81);
var messagesync = __webpack_require__(82);
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
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Messages.prototype.sendInternalMessage = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager', options, exports.sendInternalMessageOptions), messageinfo.MessageInfo);
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    Messages.prototype.sendFaxMessage = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax', options, exports.sendFaxMessageOptions), messageinfo.MessageInfo);
    };
    /**
     * Create SMS Message
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Creates and sends new SMS message. Sending SMS messages simultaneously to different recipients is limited up to 50 requests per minute; relevant for all client applications.</p>
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
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Messages.prototype.sendSMS = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms', options, exports.sendSMSOptions), messageinfo.MessageInfo);
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Messages.prototype.listMessages = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store', options, exports.listMessagesOptions), messagelist.MessageList);
    };
    /**
     * Get Message(s) by ID
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns individual message record(s) by the given message ID(s). The length of inbound messages is unlimited. Batch request is supported, see Batch Requests for details.</p>
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Messages.prototype.loadMessage = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, exports.loadMessageOptions), messageinfo.MessageInfo);
    };
    /**
     * Update Message(s) by ID
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Updates message(s) by ID(s). Batch request is supported, see Batch Requests for details. Currently, only the message read status updating is supported.</p>
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
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Messages.prototype.updateMessage = function (options) {
        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, exports.updateMessageOptions), messageinfo.MessageInfo);
    };
    /**
     * Delete Message(s) by ID
     *
     * <p style='font-style:italic;'></p>
     * <p>Deletes message(s) by the given message ID(s). The first call of this method transfers the message to the 'Delete' status. The second call transfers the deleted message to the 'Purged' status. If it is required to make the message 'Purged' immediately
     *     (from the first call), then set the query parameter purge to 'True'. Batch request is supported.</p>
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
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Messages.prototype.deleteMessage = function (options) {
        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, exports.deleteMessageOptions), null);
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
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    Messages.prototype.loadMessageAttachment = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}', options, exports.loadMessageAttachmentOptions), null);
    };
    /**
     * Get Message Sync
     *
     * <p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p>
     * <p>Provides facilities to synchronize mailbox content stored externally with server state.</p>
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Messages.prototype.syncMessages = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync', options, exports.syncMessagesOptions), messagesync.MessageSync);
    };
    return Messages;
}(client.Client));
exports.Messages = Messages;
/**
 * Definition of options for sendInternalMessage operation
 */
exports.sendInternalMessageOptions = [
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
        "in": "body",
        "required": true,
        "type": "createpagermessagerequest.CreatePagerMessageRequest"
    }
];
/**
 * Definition of options for sendFaxMessage operation
 */
exports.sendFaxMessageOptions = [
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
 * Definition of options for sendSMS operation
 */
exports.sendSMSOptions = [
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
        "in": "body",
        "required": true,
        "type": "createsmsmessage.CreateSMSMessage"
    }
];
/**
 * Definition of options for listMessages operation
 */
exports.listMessagesOptions = [
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
        "type": "IListMessagesAvailability",
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
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "dateTo",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "direction",
        "type": "IListMessagesDirection",
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
        "name": "distinctConversations",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "messageType",
        "type": "IListMessagesMessageType",
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
        "type": "IListMessagesReadStatus",
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
 * Definition of options for loadMessage operation
 */
exports.loadMessageOptions = [
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
 * Definition of options for updateMessage operation
 */
exports.updateMessageOptions = [
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
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "updatemessagerequest.UpdateMessageRequest"
    }
];
/**
 * Definition of options for deleteMessage operation
 */
exports.deleteMessageOptions = [
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
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "purge",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "conversationId",
        "type": "number",
        "in": "query",
        "required": false
    }
];
/**
 * Definition of options for loadMessageAttachment operation
 */
exports.loadMessageAttachmentOptions = [
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
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "messageId",
        "type": "string",
        "in": "path",
        "required": true
    }
];
/**
 * Definition of options for syncMessages operation
 */
exports.syncMessagesOptions = [
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
        "name": "conversationId",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "dateFrom",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "dateTo",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "direction",
        "type": "ISyncMessagesDirection",
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
        "name": "distinctConversations",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "messageType",
        "type": "ISyncMessagesMessageType",
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
        "name": "recordCount",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "syncToken",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "syncType",
        "type": "ISyncMessagesSyncType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "FSync",
            "ISync"
        ],
        "in": "query",
        "required": false
    }
];
(function (IListMessagesAvailability) {
    IListMessagesAvailability[IListMessagesAvailability["Alive"] = 'Alive'] = "Alive";
    IListMessagesAvailability[IListMessagesAvailability["Deleted"] = 'Deleted'] = "Deleted";
    IListMessagesAvailability[IListMessagesAvailability["Purged"] = 'Purged'] = "Purged";
})(exports.IListMessagesAvailability || (exports.IListMessagesAvailability = {}));
var IListMessagesAvailability = exports.IListMessagesAvailability;
(function (IListMessagesDirection) {
    IListMessagesDirection[IListMessagesDirection["Inbound"] = 'Inbound'] = "Inbound";
    IListMessagesDirection[IListMessagesDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.IListMessagesDirection || (exports.IListMessagesDirection = {}));
var IListMessagesDirection = exports.IListMessagesDirection;
(function (IListMessagesMessageType) {
    IListMessagesMessageType[IListMessagesMessageType["Fax"] = 'Fax'] = "Fax";
    IListMessagesMessageType[IListMessagesMessageType["SMS"] = 'SMS'] = "SMS";
    IListMessagesMessageType[IListMessagesMessageType["VoiceMail"] = 'VoiceMail'] = "VoiceMail";
    IListMessagesMessageType[IListMessagesMessageType["Pager"] = 'Pager'] = "Pager";
    IListMessagesMessageType[IListMessagesMessageType["Text"] = 'Text'] = "Text";
})(exports.IListMessagesMessageType || (exports.IListMessagesMessageType = {}));
var IListMessagesMessageType = exports.IListMessagesMessageType;
(function (IListMessagesReadStatus) {
    IListMessagesReadStatus[IListMessagesReadStatus["Read"] = 'Read'] = "Read";
    IListMessagesReadStatus[IListMessagesReadStatus["Unread"] = 'Unread'] = "Unread";
})(exports.IListMessagesReadStatus || (exports.IListMessagesReadStatus = {}));
var IListMessagesReadStatus = exports.IListMessagesReadStatus;
(function (ISyncMessagesDirection) {
    ISyncMessagesDirection[ISyncMessagesDirection["Inbound"] = 'Inbound'] = "Inbound";
    ISyncMessagesDirection[ISyncMessagesDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.ISyncMessagesDirection || (exports.ISyncMessagesDirection = {}));
var ISyncMessagesDirection = exports.ISyncMessagesDirection;
(function (ISyncMessagesMessageType) {
    ISyncMessagesMessageType[ISyncMessagesMessageType["Fax"] = 'Fax'] = "Fax";
    ISyncMessagesMessageType[ISyncMessagesMessageType["SMS"] = 'SMS'] = "SMS";
    ISyncMessagesMessageType[ISyncMessagesMessageType["VoiceMail"] = 'VoiceMail'] = "VoiceMail";
    ISyncMessagesMessageType[ISyncMessagesMessageType["Pager"] = 'Pager'] = "Pager";
    ISyncMessagesMessageType[ISyncMessagesMessageType["Text"] = 'Text'] = "Text";
})(exports.ISyncMessagesMessageType || (exports.ISyncMessagesMessageType = {}));
var ISyncMessagesMessageType = exports.ISyncMessagesMessageType;
(function (ISyncMessagesSyncType) {
    ISyncMessagesSyncType[ISyncMessagesSyncType["FSync"] = 'FSync'] = "FSync";
    ISyncMessagesSyncType[ISyncMessagesSyncType["ISync"] = 'ISync'] = "ISync";
})(exports.ISyncMessagesSyncType || (exports.ISyncMessagesSyncType = {}));
var ISyncMessagesSyncType = exports.ISyncMessagesSyncType;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var messageattachmentinfo = __webpack_require__(79);
var messagestorecallerinfo = __webpack_require__(80);
var MessageInfo = (function (_super) {
    __extends(MessageInfo, _super);
    function MessageInfo() {
        _super.apply(this, arguments);
    }
    MessageInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'attachments', Class: messageattachmentinfo.MessageAttachmentInfo, isArray: true, isRequired: false },
            { property: 'availability', Class: MessageInfoAvailability, isArray: false, isRequired: false },
            { property: 'conversationId', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'creationTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'deliveryErrorCode', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'direction', Class: MessageInfoDirection, isArray: false, isRequired: false },
            { property: 'faxPageCount', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'faxResolution', Class: MessageInfoFaxResolution, isArray: false, isRequired: false },
            { property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false, isRequired: false },
            { property: 'lastModifiedTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'messageStatus', Class: MessageInfoMessageStatus, isArray: false, isRequired: false },
            { property: 'pgToDepartment', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'priority', Class: MessageInfoPriority, isArray: false, isRequired: false },
            { property: 'readStatus', Class: MessageInfoReadStatus, isArray: false, isRequired: false },
            { property: 'smsDeliveryTime', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'smsSendingAttemptsCount', Class: null /* number */, isArray: false, isRequired: false },
            { property: 'subject', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: true, isRequired: false },
            { property: 'type', Class: MessageInfoType, isArray: false, isRequired: false },
            { property: 'vmTranscriptionStatus', Class: MessageInfoVmTranscriptionStatus, isArray: false, isRequired: false }
        ];
    };
    MessageInfo.prototype.getClassName = function () {
        return 'MessageInfo';
    };
    return MessageInfo;
}(model.Model));
exports.MessageInfo = MessageInfo;
(function (MessageInfoAvailability) {
    MessageInfoAvailability[MessageInfoAvailability["Alive"] = 'Alive'] = "Alive";
    MessageInfoAvailability[MessageInfoAvailability["Deleted"] = 'Deleted'] = "Deleted";
    MessageInfoAvailability[MessageInfoAvailability["Purged"] = 'Purged'] = "Purged";
})(exports.MessageInfoAvailability || (exports.MessageInfoAvailability = {}));
var MessageInfoAvailability = exports.MessageInfoAvailability;
(function (MessageInfoDirection) {
    MessageInfoDirection[MessageInfoDirection["Inbound"] = 'Inbound'] = "Inbound";
    MessageInfoDirection[MessageInfoDirection["Outbound"] = 'Outbound'] = "Outbound";
})(exports.MessageInfoDirection || (exports.MessageInfoDirection = {}));
var MessageInfoDirection = exports.MessageInfoDirection;
(function (MessageInfoFaxResolution) {
    MessageInfoFaxResolution[MessageInfoFaxResolution["High"] = 'High'] = "High";
    MessageInfoFaxResolution[MessageInfoFaxResolution["Low"] = 'Low'] = "Low";
})(exports.MessageInfoFaxResolution || (exports.MessageInfoFaxResolution = {}));
var MessageInfoFaxResolution = exports.MessageInfoFaxResolution;
(function (MessageInfoMessageStatus) {
    MessageInfoMessageStatus[MessageInfoMessageStatus["Queued"] = 'Queued'] = "Queued";
    MessageInfoMessageStatus[MessageInfoMessageStatus["Sent"] = 'Sent'] = "Sent";
    MessageInfoMessageStatus[MessageInfoMessageStatus["Delivered"] = 'Delivered'] = "Delivered";
    MessageInfoMessageStatus[MessageInfoMessageStatus["DeliveryFailed"] = 'DeliveryFailed'] = "DeliveryFailed";
    MessageInfoMessageStatus[MessageInfoMessageStatus["SendingFailed"] = 'SendingFailed'] = "SendingFailed";
    MessageInfoMessageStatus[MessageInfoMessageStatus["Received"] = 'Received'] = "Received";
})(exports.MessageInfoMessageStatus || (exports.MessageInfoMessageStatus = {}));
var MessageInfoMessageStatus = exports.MessageInfoMessageStatus;
(function (MessageInfoPriority) {
    MessageInfoPriority[MessageInfoPriority["Normal"] = 'Normal'] = "Normal";
    MessageInfoPriority[MessageInfoPriority["High"] = 'High'] = "High";
})(exports.MessageInfoPriority || (exports.MessageInfoPriority = {}));
var MessageInfoPriority = exports.MessageInfoPriority;
(function (MessageInfoReadStatus) {
    MessageInfoReadStatus[MessageInfoReadStatus["Read"] = 'Read'] = "Read";
    MessageInfoReadStatus[MessageInfoReadStatus["Unread"] = 'Unread'] = "Unread";
})(exports.MessageInfoReadStatus || (exports.MessageInfoReadStatus = {}));
var MessageInfoReadStatus = exports.MessageInfoReadStatus;
(function (MessageInfoType) {
    MessageInfoType[MessageInfoType["Fax"] = 'Fax'] = "Fax";
    MessageInfoType[MessageInfoType["SMS"] = 'SMS'] = "SMS";
    MessageInfoType[MessageInfoType["VoiceMail"] = 'VoiceMail'] = "VoiceMail";
    MessageInfoType[MessageInfoType["Pager"] = 'Pager'] = "Pager";
    MessageInfoType[MessageInfoType["Text"] = 'Text'] = "Text";
})(exports.MessageInfoType || (exports.MessageInfoType = {}));
var MessageInfoType = exports.MessageInfoType;
(function (MessageInfoVmTranscriptionStatus) {
    MessageInfoVmTranscriptionStatus[MessageInfoVmTranscriptionStatus["NotAvailable"] = 'NotAvailable'] = "NotAvailable";
    MessageInfoVmTranscriptionStatus[MessageInfoVmTranscriptionStatus["InProgress"] = 'InProgress'] = "InProgress";
    MessageInfoVmTranscriptionStatus[MessageInfoVmTranscriptionStatus["TimedOut"] = 'TimedOut'] = "TimedOut";
    MessageInfoVmTranscriptionStatus[MessageInfoVmTranscriptionStatus["Completed"] = 'Completed'] = "Completed";
    MessageInfoVmTranscriptionStatus[MessageInfoVmTranscriptionStatus["CompletedPartially"] = 'CompletedPartially'] = "CompletedPartially";
    MessageInfoVmTranscriptionStatus[MessageInfoVmTranscriptionStatus["Failed"] = 'Failed'] = "Failed";
})(exports.MessageInfoVmTranscriptionStatus || (exports.MessageInfoVmTranscriptionStatus = {}));
var MessageInfoVmTranscriptionStatus = exports.MessageInfoVmTranscriptionStatus;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
exports.MessageAttachmentInfo = MessageAttachmentInfo;
(function (MessageAttachmentInfoType) {
    MessageAttachmentInfoType[MessageAttachmentInfoType["AudioRecording"] = 'AudioRecording'] = "AudioRecording";
    MessageAttachmentInfoType[MessageAttachmentInfoType["AudioTranscription"] = 'AudioTranscription'] = "AudioTranscription";
    MessageAttachmentInfoType[MessageAttachmentInfoType["Text"] = 'Text'] = "Text";
    MessageAttachmentInfoType[MessageAttachmentInfoType["SourceDocument"] = 'SourceDocument'] = "SourceDocument";
    MessageAttachmentInfoType[MessageAttachmentInfoType["RenderedDocument"] = 'RenderedDocument'] = "RenderedDocument";
})(exports.MessageAttachmentInfoType || (exports.MessageAttachmentInfoType = {}));
var MessageAttachmentInfoType = exports.MessageAttachmentInfoType;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
            { property: 'faxErrorCode', Class: MessageStoreCallerInfoFaxErrorCode, isArray: false, isRequired: false },
            { property: 'name', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'phoneNumber', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    MessageStoreCallerInfo.prototype.getClassName = function () {
        return 'MessageStoreCallerInfo';
    };
    return MessageStoreCallerInfo;
}(model.Model));
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
(function (MessageStoreCallerInfoFaxErrorCode) {
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["Undefined"] = 'Undefined'] = "Undefined";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["NoFaxSendPermission"] = 'NoFaxSendPermission'] = "NoFaxSendPermission";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["NoInternationalPermission"] = 'NoInternationalPermission'] = "NoInternationalPermission";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["NoFaxMachine"] = 'NoFaxMachine'] = "NoFaxMachine";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["OutgoingCallError"] = 'OutgoingCallError'] = "OutgoingCallError";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["RenderingFailed"] = 'RenderingFailed'] = "RenderingFailed";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["TooManyPages"] = 'TooManyPages'] = "TooManyPages";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["ReturnToDBQueue"] = 'ReturnToDBQueue'] = "ReturnToDBQueue";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["NoCallTime"] = 'NoCallTime'] = "NoCallTime";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["WrongNumber"] = 'WrongNumber'] = "WrongNumber";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["ProhibitedNumber"] = 'ProhibitedNumber'] = "ProhibitedNumber";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["InternalError"] = 'InternalError'] = "InternalError";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["FaxSendingProhibited"] = 'FaxSendingProhibited'] = "FaxSendingProhibited";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["ThePhoneIsBlacklisted"] = 'ThePhoneIsBlacklisted'] = "ThePhoneIsBlacklisted";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["UserNotFound"] = 'UserNotFound'] = "UserNotFound";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["ConvertError"] = 'ConvertError'] = "ConvertError";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["DBGeneralError"] = 'DBGeneralError'] = "DBGeneralError";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["SkypeBillingFailed"] = 'SkypeBillingFailed'] = "SkypeBillingFailed";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["AccountSuspended"] = 'AccountSuspended'] = "AccountSuspended";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["ProhibitedDestination"] = 'ProhibitedDestination'] = "ProhibitedDestination";
    MessageStoreCallerInfoFaxErrorCode[MessageStoreCallerInfoFaxErrorCode["InternationalDisabled"] = 'InternationalDisabled'] = "InternationalDisabled";
})(exports.MessageStoreCallerInfoFaxErrorCode || (exports.MessageStoreCallerInfoFaxErrorCode = {}));
var MessageStoreCallerInfoFaxErrorCode = exports.MessageStoreCallerInfoFaxErrorCode;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var messageinfo = __webpack_require__(78);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var MessageList = (function (_super) {
    __extends(MessageList, _super);
    function MessageList() {
        _super.apply(this, arguments);
    }
    MessageList.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: messageinfo.MessageInfo, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    MessageList.prototype.getClassName = function () {
        return 'MessageList';
    };
    return MessageList;
}(model.Model));
exports.MessageList = MessageList;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var messageinfo = __webpack_require__(78);
var messagessyncinfo = __webpack_require__(83);
var MessageSync = (function (_super) {
    __extends(MessageSync, _super);
    function MessageSync() {
        _super.apply(this, arguments);
    }
    MessageSync.prototype.getPropertyMappings = function () {
        return [
            { property: 'records', Class: messageinfo.MessageInfo, isArray: true, isRequired: true },
            { property: 'syncInfo', Class: messagessyncinfo.MessagesSyncInfo, isArray: false, isRequired: true }
        ];
    };
    MessageSync.prototype.getClassName = function () {
        return 'MessageSync';
    };
    return MessageSync;
}(model.Model));
exports.MessageSync = MessageSync;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var MessagesSyncInfo = (function (_super) {
    __extends(MessagesSyncInfo, _super);
    function MessagesSyncInfo() {
        _super.apply(this, arguments);
    }
    MessagesSyncInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'syncType', Class: MessagesSyncInfoSyncType, isArray: false, isRequired: false },
            { property: 'syncToken', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'syncTime', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    MessagesSyncInfo.prototype.getClassName = function () {
        return 'MessagesSyncInfo';
    };
    return MessagesSyncInfo;
}(model.Model));
exports.MessagesSyncInfo = MessagesSyncInfo;
(function (MessagesSyncInfoSyncType) {
    MessagesSyncInfoSyncType[MessagesSyncInfoSyncType["FSync"] = 'FSync'] = "FSync";
    MessagesSyncInfoSyncType[MessagesSyncInfoSyncType["ISync"] = 'ISync'] = "ISync";
})(exports.MessagesSyncInfoSyncType || (exports.MessagesSyncInfoSyncType = {}));
var MessagesSyncInfoSyncType = exports.MessagesSyncInfoSyncType;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var getsubscriptioninforesponse = __webpack_require__(85);
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
}(client.Client));
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var notificationdeliverymode = __webpack_require__(86);
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
}(model.Model));
exports.GetSubscriptionInfoResponse = GetSubscriptionInfoResponse;
(function (GetSubscriptionInfoResponseStatus) {
    GetSubscriptionInfoResponseStatus[GetSubscriptionInfoResponseStatus["Active"] = 'Active'] = "Active";
    GetSubscriptionInfoResponseStatus[GetSubscriptionInfoResponseStatus["Suspended"] = 'Suspended'] = "Suspended";
})(exports.GetSubscriptionInfoResponseStatus || (exports.GetSubscriptionInfoResponseStatus = {}));
var GetSubscriptionInfoResponseStatus = exports.GetSubscriptionInfoResponseStatus;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
            { property: 'transportType', Class: NotificationDeliveryModeTransportType, isArray: false, isRequired: true },
            { property: 'encryption', Class: null /* boolean */, isArray: false, isRequired: true },
            { property: 'address', Class: null /* string */, isArray: false, isRequired: true },
            { property: 'subscriberKey', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'encryptionAlgorithm', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'encryptionKey', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'registrationId', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'certificateName', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    NotificationDeliveryMode.prototype.getClassName = function () {
        return 'NotificationDeliveryMode';
    };
    return NotificationDeliveryMode;
}(model.Model));
exports.NotificationDeliveryMode = NotificationDeliveryMode;
(function (NotificationDeliveryModeTransportType) {
    NotificationDeliveryModeTransportType[NotificationDeliveryModeTransportType["PubNub"] = 'PubNub'] = "PubNub";
    NotificationDeliveryModeTransportType[NotificationDeliveryModeTransportType["APNS"] = 'APNS'] = "APNS";
    NotificationDeliveryModeTransportType[NotificationDeliveryModeTransportType['PubNub/APNS/VoIP'] = 'PubNub/APNS/VoIP'] = 'PubNub/APNS/VoIP';
    NotificationDeliveryModeTransportType[NotificationDeliveryModeTransportType["WebHook"] = 'WebHook'] = "WebHook";
})(exports.NotificationDeliveryModeTransportType || (exports.NotificationDeliveryModeTransportType = {}));
var NotificationDeliveryModeTransportType = exports.NotificationDeliveryModeTransportType;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var presenceinfo = __webpack_require__(88);
var monitoredextensions = __webpack_require__(90);
var Presence = (function (_super) {
    __extends(Presence, _super);
    function Presence() {
        _super.apply(this, arguments);
    }
    /**
     * Get Extension(s) Presence Status by ID
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns presence status of an extension or several extensions by their ID(s). Batch request is supported, see Batch Requests for details.The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not
     *     returned at all) for the following extension types: Department/Announcement Only/Take Messages Only (Voicemail)/Fax User/Paging Only Group/Shared Lines Group/IVR Menu/Application Extension/Park Location.If the user requests his/her own presence status,
     *     the response contains actual presence status even if the status publication is turned off.Batch request is supported. For batch requests the number of extensions in one request is limited to 30. If more extensions are included in the request, the
     *     error code 400 Bad Request is returned with the logical error code InvalidMultipartRequest and the corresponding message 'Extension Presence Info multipart request is limited to 30 extensions'.</p>
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Presence.prototype.getPresenceStatus = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence', options, exports.getPresenceStatusOptions), presenceinfo.PresenceInfo);
    };
    /**
     * Get Monitored Extensions
     *
     * <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p>
     * <p>Returns list of lines - extensions which presence status can be indicated and monitored on BLF-enabled (Busy Lamp Field) devices.</p>
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    Presence.prototype.listMonitoredExtensions = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence/line', options, exports.listMonitoredExtensionsOptions), monitoredextensions.MonitoredExtensions);
    };
    return Presence;
}(client.Client));
exports.Presence = Presence;
/**
 * Definition of options for getPresenceStatus operation
 */
exports.getPresenceStatusOptions = [
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
/**
 * Definition of options for listMonitoredExtensions operation
 */
exports.listMonitoredExtensionsOptions = [
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var presenceextensioninfo = __webpack_require__(89);
var PresenceInfo = (function (_super) {
    __extends(PresenceInfo, _super);
    function PresenceInfo() {
        _super.apply(this, arguments);
    }
    PresenceInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'allowSeeMyPresence', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'dndStatus', Class: PresenceInfoDndStatus, isArray: false, isRequired: false },
            { property: 'extension', Class: presenceextensioninfo.PresenceExtensionInfo, isArray: false, isRequired: false },
            { property: 'message', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'pickUpCallsOnHold', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'presenceStatus', Class: PresenceInfoPresenceStatus, isArray: false, isRequired: false },
            { property: 'ringOnMonitoredCall', Class: null /* boolean */, isArray: false, isRequired: false },
            { property: 'telephonyStatus', Class: PresenceInfoTelephonyStatus, isArray: false, isRequired: false },
            { property: 'userStatus', Class: PresenceInfoUserStatus, isArray: false, isRequired: false }
        ];
    };
    PresenceInfo.prototype.getClassName = function () {
        return 'PresenceInfo';
    };
    return PresenceInfo;
}(model.Model));
exports.PresenceInfo = PresenceInfo;
(function (PresenceInfoDndStatus) {
    PresenceInfoDndStatus[PresenceInfoDndStatus["TakeAllCalls"] = 'TakeAllCalls'] = "TakeAllCalls";
    PresenceInfoDndStatus[PresenceInfoDndStatus["DoNotAcceptAnyCalls"] = 'DoNotAcceptAnyCalls'] = "DoNotAcceptAnyCalls";
    PresenceInfoDndStatus[PresenceInfoDndStatus["DoNotAcceptDepartmentCalls"] = 'DoNotAcceptDepartmentCalls'] = "DoNotAcceptDepartmentCalls";
    PresenceInfoDndStatus[PresenceInfoDndStatus["TakeDepartmentCallsOnly"] = 'TakeDepartmentCallsOnly'] = "TakeDepartmentCallsOnly";
})(exports.PresenceInfoDndStatus || (exports.PresenceInfoDndStatus = {}));
var PresenceInfoDndStatus = exports.PresenceInfoDndStatus;
(function (PresenceInfoPresenceStatus) {
    PresenceInfoPresenceStatus[PresenceInfoPresenceStatus["Offline"] = 'Offline'] = "Offline";
    PresenceInfoPresenceStatus[PresenceInfoPresenceStatus["Busy"] = 'Busy'] = "Busy";
    PresenceInfoPresenceStatus[PresenceInfoPresenceStatus["Available"] = 'Available'] = "Available";
})(exports.PresenceInfoPresenceStatus || (exports.PresenceInfoPresenceStatus = {}));
var PresenceInfoPresenceStatus = exports.PresenceInfoPresenceStatus;
(function (PresenceInfoTelephonyStatus) {
    PresenceInfoTelephonyStatus[PresenceInfoTelephonyStatus["NoCall"] = 'NoCall'] = "NoCall";
    PresenceInfoTelephonyStatus[PresenceInfoTelephonyStatus["CallConnected"] = 'CallConnected'] = "CallConnected";
    PresenceInfoTelephonyStatus[PresenceInfoTelephonyStatus["Ringing"] = 'Ringing'] = "Ringing";
    PresenceInfoTelephonyStatus[PresenceInfoTelephonyStatus["OnHold"] = 'OnHold'] = "OnHold";
    PresenceInfoTelephonyStatus[PresenceInfoTelephonyStatus["ParkedCall"] = 'ParkedCall'] = "ParkedCall";
})(exports.PresenceInfoTelephonyStatus || (exports.PresenceInfoTelephonyStatus = {}));
var PresenceInfoTelephonyStatus = exports.PresenceInfoTelephonyStatus;
(function (PresenceInfoUserStatus) {
    PresenceInfoUserStatus[PresenceInfoUserStatus["Offline"] = 'Offline'] = "Offline";
    PresenceInfoUserStatus[PresenceInfoUserStatus["Busy"] = 'Busy'] = "Busy";
    PresenceInfoUserStatus[PresenceInfoUserStatus["Available"] = 'Available'] = "Available";
})(exports.PresenceInfoUserStatus || (exports.PresenceInfoUserStatus = {}));
var PresenceInfoUserStatus = exports.PresenceInfoUserStatus;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var PresenceExtensionInfo = (function (_super) {
    __extends(PresenceExtensionInfo, _super);
    function PresenceExtensionInfo() {
        _super.apply(this, arguments);
    }
    PresenceExtensionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    PresenceExtensionInfo.prototype.getClassName = function () {
        return 'PresenceExtensionInfo';
    };
    return PresenceExtensionInfo;
}(model.Model));
exports.PresenceExtensionInfo = PresenceExtensionInfo;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var lineinfo = __webpack_require__(91);
var navigationinfo = __webpack_require__(33);
var paginginfo = __webpack_require__(32);
var MonitoredExtensions = (function (_super) {
    __extends(MonitoredExtensions, _super);
    function MonitoredExtensions() {
        _super.apply(this, arguments);
    }
    MonitoredExtensions.prototype.getPropertyMappings = function () {
        return [
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'records', Class: lineinfo.LineInfo, isArray: true, isRequired: true },
            { property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false, isRequired: true },
            { property: 'paging', Class: paginginfo.PagingInfo, isArray: false, isRequired: true }
        ];
    };
    MonitoredExtensions.prototype.getClassName = function () {
        return 'MonitoredExtensions';
    };
    return MonitoredExtensions;
}(model.Model));
exports.MonitoredExtensions = MonitoredExtensions;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var monitoredlinesextensioninfo = __webpack_require__(92);
var LineInfo = (function (_super) {
    __extends(LineInfo, _super);
    function LineInfo() {
        _super.apply(this, arguments);
    }
    LineInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extension', Class: monitoredlinesextensioninfo.MonitoredLinesExtensionInfo, isArray: false, isRequired: false }
        ];
    };
    LineInfo.prototype.getClassName = function () {
        return 'LineInfo';
    };
    return LineInfo;
}(model.Model));
exports.LineInfo = LineInfo;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var MonitoredLinesExtensionInfo = (function (_super) {
    __extends(MonitoredLinesExtensionInfo, _super);
    function MonitoredLinesExtensionInfo() {
        _super.apply(this, arguments);
    }
    MonitoredLinesExtensionInfo.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'uri', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'extensionNumber', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'type', Class: MonitoredLinesExtensionInfoType, isArray: false, isRequired: false }
        ];
    };
    MonitoredLinesExtensionInfo.prototype.getClassName = function () {
        return 'MonitoredLinesExtensionInfo';
    };
    return MonitoredLinesExtensionInfo;
}(model.Model));
exports.MonitoredLinesExtensionInfo = MonitoredLinesExtensionInfo;
(function (MonitoredLinesExtensionInfoType) {
    MonitoredLinesExtensionInfoType[MonitoredLinesExtensionInfoType["User"] = 'User'] = "User";
    MonitoredLinesExtensionInfoType[MonitoredLinesExtensionInfoType["FaxUser"] = 'FaxUser'] = "FaxUser";
    MonitoredLinesExtensionInfoType[MonitoredLinesExtensionInfoType["VirtualUser"] = 'VirtualUser'] = "VirtualUser";
    MonitoredLinesExtensionInfoType[MonitoredLinesExtensionInfoType["DigitalUser"] = 'DigitalUser'] = "DigitalUser";
    MonitoredLinesExtensionInfoType[MonitoredLinesExtensionInfoType["Department"] = 'Department'] = "Department";
    MonitoredLinesExtensionInfoType[MonitoredLinesExtensionInfoType["ApplicationExtension"] = 'ApplicationExtension'] = "ApplicationExtension";
    MonitoredLinesExtensionInfoType[MonitoredLinesExtensionInfoType["ParkLocation"] = 'ParkLocation'] = "ParkLocation";
})(exports.MonitoredLinesExtensionInfoType || (exports.MonitoredLinesExtensionInfoType = {}));
var MonitoredLinesExtensionInfoType = exports.MonitoredLinesExtensionInfoType;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var client = __webpack_require__(3);
var ringoutstatus = __webpack_require__(94);
var RingOut = (function (_super) {
    __extends(RingOut, _super);
    function RingOut() {
        _super.apply(this, arguments);
    }
    /**
     * Make RingOut Call
     *
     * <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p>
     * <p>Makes a 2-leg RingOut call.</p>
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    RingOut.prototype.makeRingOutCall = function (options) {
        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout', options, exports.makeRingOutCallOptions), ringoutstatus.RingOutStatus);
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    RingOut.prototype.getRingOutCallStatus = function (options) {
        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}', options, exports.getRingOutCallStatusOptions), ringoutstatus.RingOutStatus);
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
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    RingOut.prototype.cancelRingOutCall = function (options) {
        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}', options, exports.cancelRingOutCallOptions), null);
    };
    return RingOut;
}(client.Client));
exports.RingOut = RingOut;
/**
 * Definition of options for makeRingOutCall operation
 */
exports.makeRingOutCallOptions = [
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
        "in": "body",
        "required": true,
        "type": "makeringoutrequest.MakeRingOutRequest"
    }
];
/**
 * Definition of options for getRingOutCallStatus operation
 */
exports.getRingOutCallStatusOptions = [
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
 * Definition of options for cancelRingOutCall operation
 */
exports.cancelRingOutCallOptions = [
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


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var model = __webpack_require__(5);
var ringoutstatusinfo = __webpack_require__(95);
var RingOutStatus = (function (_super) {
    __extends(RingOutStatus, _super);
    function RingOutStatus() {
        _super.apply(this, arguments);
    }
    RingOutStatus.prototype.getPropertyMappings = function () {
        return [
            { property: 'id', Class: null /* string */, isArray: false, isRequired: false },
            { property: 'status', Class: ringoutstatusinfo.RingOutStatusInfo, isArray: false, isRequired: false }
        ];
    };
    RingOutStatus.prototype.getClassName = function () {
        return 'RingOutStatus';
    };
    return RingOutStatus;
}(model.Model));
exports.RingOutStatus = RingOutStatus;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

/// <reference path="../externals.d.ts" />
"use strict";
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
}(model.Model));
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