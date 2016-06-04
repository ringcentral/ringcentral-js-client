/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import accountinfo = require('../models/AccountInfo');
import createaccountrequest = require('../models/CreateAccountRequest');
import accountbusinessaddress = require('../models/AccountBusinessAddress');
import modifyaccountbusinessaddressrequest = require('../models/ModifyAccountBusinessAddressRequest');
import dialingplaninfo = require('../models/DialingPlanInfo');
import phonenumberinfo = require('../models/PhoneNumberInfo');
import provisionphonenumbers = require('../models/ProvisionPhoneNumbers');
import accountphonenumbers = require('../models/AccountPhoneNumbers');
import accountserviceinfo = require('../models/AccountServiceInfo');

export class Account extends client.Client {

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
    createAccount(options?:{
        /** JSON body */
        'body':createaccountrequest.CreateAccountRequest;
    }):Promise<accountinfo.AccountInfo> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account', options, createAccountOptions),
                         accountinfo.AccountInfo);

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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadAccount(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
    }):Promise<accountinfo.AccountInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}', options, loadAccountOptions),
                         accountinfo.AccountInfo);

    }

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
    loadAccountBusinessAddress(options?:{
    }):Promise<accountinfo.AccountInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/business-address', options, loadAccountBusinessAddressOptions),
                         accountinfo.AccountInfo);

    }

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
    updateAccountBusinessAddress(options?:{
        /** JSON body */
        'body':modifyaccountbusinessaddressrequest.ModifyAccountBusinessAddressRequest;
    }):Promise<accountbusinessaddress.AccountBusinessAddress> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/business-address', options, updateAccountBusinessAddressOptions),
                         accountbusinessaddress.AccountBusinessAddress);

    }

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
    listDialingPlans(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<dialingplaninfo.DialingPlanInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/dialing-plan', options, listDialingPlansOptions),
                         dialingplaninfo.DialingPlanInfo);

    }

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
    provisionPhoneNumber(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** JSON body */
        'body':provisionphonenumbers.ProvisionPhoneNumbers;
    }):Promise<phonenumberinfo.PhoneNumberInfo> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/phone-number', options, provisionPhoneNumberOptions),
                         phonenumberinfo.PhoneNumberInfo);

    }

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
    listAccountPhoneNumbers(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
        /** Usage type of the phone number, collection: multi */
        'usageType'?:IListAccountPhoneNumbersUsageType;
    }):Promise<accountphonenumbers.AccountPhoneNumbers> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/phone-number', options, listAccountPhoneNumbersOptions),
                         accountphonenumbers.AccountPhoneNumbers);

    }

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
    loadAccountPhoneNumber(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of a phone number */
        'phoneNumberId':string;
    }):Promise<phonenumberinfo.PhoneNumberInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}', options, loadAccountPhoneNumberOptions),
                         phonenumberinfo.PhoneNumberInfo);

    }

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
    loadServiceInfo(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
    }):Promise<accountserviceinfo.AccountServiceInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/service-info', options, loadServiceInfoOptions),
                         accountserviceinfo.AccountServiceInfo);

    }

}

/**
 * Definition of options for createAccount operation
 */
export var createAccountOptions:client.IOperationParameter[] = [
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
export var loadAccountOptions:client.IOperationParameter[] = [
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
export var loadAccountBusinessAddressOptions:client.IOperationParameter[] = [];

/**
 * Definition of options for updateAccountBusinessAddress operation
 */
export var updateAccountBusinessAddressOptions:client.IOperationParameter[] = [
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
export var listDialingPlansOptions:client.IOperationParameter[] = [
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
    }
];

/**
 * Definition of options for provisionPhoneNumber operation
 */
export var provisionPhoneNumberOptions:client.IOperationParameter[] = [
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
export var listAccountPhoneNumbersOptions:client.IOperationParameter[] = [
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
export var loadAccountPhoneNumberOptions:client.IOperationParameter[] = [
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
export var loadServiceInfoOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];

export enum IListAccountPhoneNumbersUsageType {
    MainCompanyNumber = <any>'MainCompanyNumber',
    AdditionalCompanyNumber = <any>'AdditionalCompanyNumber',
    CompanyNumber = <any>'CompanyNumber',
    DirectNumber = <any>'DirectNumber',
    CompanyFaxNumber = <any>'CompanyFaxNumber',
    ForwardedNumber = <any>'ForwardedNumber'
}