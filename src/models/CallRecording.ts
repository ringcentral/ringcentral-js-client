/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class CallRecording extends model.Model {

    /**
     * Internal identifier of the call recording
     */
    id:string;

    /**
     * Link to the call recording binary content
     */
    contentUri:string;

    /**
     * Call recording file format. Supported format is audio/x-wav
     */
    contentType:string;

    /**
     * Recorded call duration
     */
    duration:number;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'contentUri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'contentType', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'duration', Class: null /* number */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CallRecording';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}