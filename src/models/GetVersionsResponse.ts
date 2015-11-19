/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import versioninfo = require('./VersionInfo');

export class GetVersionsResponse extends model.Model {

    /**
     * Сanonical URI of the API version
     */
    uri:string;

    /**
     * Full API version information: uri, number, release date
     */
    apiVersions:versioninfo.VersionInfo[];

    /**
     * Server version
     */
    serverVersion:string;

    /**
     * Server revision
     */
    serverRevision:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'apiVersions', Class: versioninfo.VersionInfo, isArray: true,isRequired: false},
            {property: 'serverVersion', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serverRevision', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetVersionsResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}