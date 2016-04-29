/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import personalcontactinfo = require('../models/PersonalContactInfo');
import contactlist = require('../models/ContactList');
import addressbookgroups = require('../models/AddressBookGroups');
import addressbookgroupinfo = require('../models/AddressBookGroupInfo');
import addressbooksync = require('../models/AddressBookSync');
import favoritecontacts = require('../models/FavoriteContacts');
import favoritecontactsupdate = require('../models/FavoriteContactsUpdate');
import updatefavoritecontactsrequest = require('../models/UpdateFavoriteContactsRequest');

export class AddressBook extends client.Client {

    /**
     * Create Contact
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
     *             <td class='code'>Contacts</td>
     *             <td>Creating, viewing, editing and deleting user personal contacts</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadContacts</td>
     *             <td>Viewing user personal contacts</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    createContact(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<personalcontactinfo.PersonalContactInfo> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact', options, createContactOptions),
                         personalcontactinfo.PersonalContactInfo);

    }

    /**
     * Get Address Book
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
     *             <td class='code'>ReadContacts</td>
     *             <td>Viewing user personal contacts</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    listContacts(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** If specified, only contacts whose First name or Last name start with the mentioned substring are returned. Case-insensitive */
        'startsWith'?:string;
        /** Sorts results by the specified property. The default is 'First Name', collection: multi */
        'sortBy'?:IListContactsSortBy;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<contactlist.ContactList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact', options, listContactsOptions),
                         contactlist.ContactList);

    }

    /**
     * Get Contact(s) by ID
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
     *             <td class='code'>ReadContacts</td>
     *             <td>Viewing user personal contacts</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    loadContact(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a contact record in the RingCentral database */
        'contactId':string;
    }):Promise<personalcontactinfo.PersonalContactInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}', options, loadContactOptions),
                         personalcontactinfo.PersonalContactInfo);

    }

    /**
     * Update Contact(s) by ID
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
     *             <td class='code'>Contacts</td>
     *             <td>Creating, viewing, editing and deleting user personal contacts</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadContacts</td>
     *             <td>Viewing user personal contacts</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    updateContact(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a contact record in the RingCentral database */
        'contactId':string;
    }):Promise<personalcontactinfo.PersonalContactInfo> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}', options, updateContactOptions),
                         personalcontactinfo.PersonalContactInfo);

    }

    /**
     * Delete Contact(s) by ID
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
     *             <td class='code'>Contacts</td>
     *             <td>Creating, viewing, editing and deleting user personal contacts</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadContacts</td>
     *             <td>Viewing user personal contacts</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    deleteContact(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a contact record in the RingCentral database */
        'contactId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}', options, deleteContactOptions),
                         null);

    }

    /**
     * Get Group List
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
     *             <td class='code'>ReadContacts</td>
     *             <td>Viewing user personal contacts</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    listAddressBookGroups(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<addressbookgroups.AddressBookGroups> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/group', options, listAddressBookGroupsOptions),
                         addressbookgroups.AddressBookGroups);

    }

    /**
     * Get Group(s) by ID
     *
     * <p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p>
     * <p>Returns a group or several groups description, including the user-defined group name, number of contacts in the group, and optional note. Batch request is supported, see Batch Requests for details.</p>
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
     *             <td class='code'>ReadContacts</td>
     *             <td>Viewing user personal contacts</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    loadAddressBookGroup(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a group in an address book */
        'groupId':string;
    }):Promise<addressbookgroupinfo.AddressBookGroupInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/group/{groupId}', options, loadAddressBookGroupOptions),
                         addressbookgroupinfo.AddressBookGroupInfo);

    }

    /**
     * Address Book Synchronization
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
     *             <td class='code'>ReadContacts</td>
     *             <td>Viewing user personal contacts</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    syncAddressBook(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Type of synchronization. The default value is 'FSync', collection: multi */
        'syncType'?:ISyncAddressBookSyncType;
        /** Value of syncToken property of the last sync request response */
        'syncToken'?:string;
        /** Number of records per page to be returned. The max number of records is 250, which is also the default. For FSync — if the number of records exceeds the parameter value (either specified or default), all of the pages can be retrieved in several requests. For ISync — if the number of records exceeds the page size, the number of incoming changes to this number is limited */
        'perPage'?:number;
        /** Internal identifier of a page. It can be obtained from the 'nextPageId' parameter passed in response body */
        'pageId'?:number;
    }):Promise<addressbooksync.AddressBookSync> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync', options, syncAddressBookOptions),
                         addressbooksync.AddressBookSync);

    }

    /**
     * Get Favorite Contacts
     *
     * <p style='font-style:italic;'>Since 1.0.25 (Release 8.1)</p>
     * <p>Returns favorite contacts of the current extension. Favorite contacts include both company contacts (extensions) and personal contacts (address book records).</p>
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
     *             <td class='code'>ReadContacts</td>
     *             <td>Viewing user personal contacts</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    loadFavoriteContacts(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<favoritecontacts.FavoriteContacts> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite', options, loadFavoriteContactsOptions),
                         favoritecontacts.FavoriteContacts);

    }

    /**
     * Update Favorite Contacts
     *
     * <p style='font-style:italic;'>Since 1.0.25 (Release 8.1)</p>
     * <p>Updates favorite contacts of the current extension. Favorite contacts include both company contacts (extensions) and personal contacts (address book records).</p>
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
     *             <td class='code'>Contacts</td>
     *             <td>Creating, viewing, editing and deleting user personal contacts</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadContacts</td>
     *             <td>Viewing user personal contacts</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    updateFavoriteContacts(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':updatefavoritecontactsrequest.UpdateFavoriteContactsRequest;
    }):Promise<favoritecontactsupdate.FavoriteContactsUpdate> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite', options, updateFavoriteContactsOptions),
                         favoritecontactsupdate.FavoriteContactsUpdate);

    }

}

/**
 * Definition of options for createContact operation
 */
export var createContactOptions:client.IOperationParameter[] = [
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
 * Definition of options for listContacts operation
 */
export var listContactsOptions:client.IOperationParameter[] = [
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
        "name": "startsWith",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "sortBy",
        "type": "IListContactsSortBy",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "FirstName",
            "LastName",
            "Company"
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
 * Definition of options for loadContact operation
 */
export var loadContactOptions:client.IOperationParameter[] = [
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
        "name": "contactId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for updateContact operation
 */
export var updateContactOptions:client.IOperationParameter[] = [
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
        "name": "contactId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for deleteContact operation
 */
export var deleteContactOptions:client.IOperationParameter[] = [
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
        "name": "contactId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for listAddressBookGroups operation
 */
export var listAddressBookGroupsOptions:client.IOperationParameter[] = [
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
 * Definition of options for loadAddressBookGroup operation
 */
export var loadAddressBookGroupOptions:client.IOperationParameter[] = [
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
        "name": "groupId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for syncAddressBook operation
 */
export var syncAddressBookOptions:client.IOperationParameter[] = [
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
        "type": "ISyncAddressBookSyncType",
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
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "pageId",
        "type": "number",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadFavoriteContacts operation
 */
export var loadFavoriteContactsOptions:client.IOperationParameter[] = [
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
 * Definition of options for updateFavoriteContacts operation
 */
export var updateFavoriteContactsOptions:client.IOperationParameter[] = [
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
        "type": "updatefavoritecontactsrequest.UpdateFavoriteContactsRequest"
    }
];

export enum IListContactsSortBy {
    FirstName = <any>'FirstName',
    LastName = <any>'LastName',
    Company = <any>'Company'
}

export enum ISyncAddressBookSyncType {
    FSync = <any>'FSync',
    ISync = <any>'ISync'
}