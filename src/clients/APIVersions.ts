/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import versions = require('../models/Versions');
import version = require('../models/Version');

export class APIVersions extends client.Client {

    /**
     * Get API Versions
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns current API version(s) and server info.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    (options?:{
    }):Promise<versions.Versions> {

        return this.send(this.parseOptions('GET', '/restapi/', options, Options),
                         versions.Versions);

    }

    /**
     * Get Version Info
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns current API version info by apiVersion.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    (options?:{
        /** API version to be requested, for example 'v1.0' */
        'apiVersion':string;
    }):Promise<version.Version> {

        return this.send(this.parseOptions('GET', '/restapi/{apiVersion}', options, Options),
                         version.Version);

    }

}

/**
 * Definition of options for  operation
 */
export var Options:client.IOperationParameter[] = [];

/**
 * Definition of options for  operation
 */
export var Options:client.IOperationParameter[] = [
    {
        "name": "apiVersion",
        "type": "string",
        "in": "path",
        "required": true
    }
];