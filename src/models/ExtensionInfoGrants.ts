/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ExtensionInfoGrants extends model.Model {

    /**
     * Internal identifier of an extension
     */
    id:string;

    /**
     * Canonical URI of an extension
     */
    uri:string;

    /**
     * Extension short number (usually 3 or 4 digits)
     */
    extensionNumber:string;

    /**
     * Extension type
     */
    type:ExtensionInfoGrantsType;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: ExtensionInfoGrantsType, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ExtensionInfoGrants';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ExtensionInfoGrantsType {
    User = <any>'User',
    FaxUser = <any>'Fax User',
    VirtualUser = <any>'VirtualUser',
    DigitalUser = <any>'DigitalUser',
    Department = <any>'Department',
    Announcement = <any>'Announcement',
    Voicemail = <any>'Voicemail',
    SharedLinesGroup = <any>'SharedLinesGroup',
    PagingOnly = <any>'PagingOnly',
    IvrMenu = <any>'IvrMenu',
    ApplicationExtension = <any>'ApplicationExtension',
    ParkLocation = <any>'Park Location'
}