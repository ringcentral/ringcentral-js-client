/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import getversionsresponse = require('../models/GetVersionsResponse');
import getversionresponse = require('../models/GetVersionResponse');

export class APIVersions extends client.Client {

    /**
     * Get API Versions
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns current API version(s) and server info.</p>
     */
    list(options?:{
    }):Promise<getversionsresponse.GetVersionsResponse> {

        return this.send(this.parseOptions('GET', '/restapi/', options, listOptions),
                         getversionsresponse.GetVersionsResponse);

    }

    /**
     * Get Version Info
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns current API version info by apiVersion.</p>
     */
    load(options?:{
        /** API version to be requested, for example 'v1.0' */
        'apiVersion':string;
    }):Promise<getversionresponse.GetVersionResponse> {

        return this.send(this.parseOptions('GET', '/restapi/{apiVersion}', options, loadOptions),
                         getversionresponse.GetVersionResponse);

    }

}

/**
 * Definition of options for list operation
 */
export var listOptions:client.IOperationParameter[] = [];

/**
 * Definition of options for load operation
 */
export var loadOptions:client.IOperationParameter[] = [
    {
        "name": "apiVersion",
        "type": "string",
        "in": "path",
        "required": true
    }
];