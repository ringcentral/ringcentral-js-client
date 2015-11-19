/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class VersionInfo extends model.Model {

    /**
     * Canonical URI of API versions
     */
    uri:string;

    /**
     * Version of the RingCentral REST API
     */
    versionString:string;

    /**
     * Release date of this version
     */
    releaseDate:string;

    /**
     * URI part determining the current version
     */
    uriString:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'versionString', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'releaseDate', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uriString', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'VersionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}