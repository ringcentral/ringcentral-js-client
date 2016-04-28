/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class RecordingInfo extends model.Model {

    /**
     * Internal identifier of the call recording
     */
    id:string;

    /**
     * Link to the call recording metadata resource
     */
    uri:string;

    /**
     * Indicates recording mode used
     */
    type:RecordingInfoType;

    /**
     * Link to the call recording binary content
     */
    contentUri:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: RecordingInfoType, isArray: false,isRequired: false},
            {property: 'contentUri', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'RecordingInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum RecordingInfoType {
    Automatic = <any>'Automatic',
    OnDemand = <any>'OnDemand'
}