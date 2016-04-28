/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class MonitoredLinesExtensionInfo extends model.Model {

    /**
     * Internal identifier of a monitored extension
     */
    id:string;

    /**
     * Canonical URI of a monitored extension
     */
    uri:string;

    /**
     * Brief information on a monitored extension
     */
    extensionNumber:string;

    /**
     * Type of a monitored extension
     */
    type:MonitoredLinesExtensionInfoType;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: MonitoredLinesExtensionInfoType, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MonitoredLinesExtensionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum MonitoredLinesExtensionInfoType {
    User = <any>'User',
    FaxUser = <any>'FaxUser',
    VirtualUser = <any>'VirtualUser',
    DigitalUser = <any>'DigitalUser',
    Department = <any>'Department',
    ApplicationExtension = <any>'ApplicationExtension',
    ParkLocation = <any>'ParkLocation'
}