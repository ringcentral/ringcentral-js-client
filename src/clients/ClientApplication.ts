/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import clientapi = require('../models/ClientApi');
import customdataapi = require('../models/CustomDataApi');
import customdatarequest = require('../models/CustomDataRequest');
import sipregistration = require('../models/SipRegistration');
import createsipregistrationrequest = require('../models/CreateSipRegistrationRequest');
import specialnumbers = require('../models/SpecialNumbers');

export class ClientApplication extends client.Client {

    /**
     * Get Client Info
     *
     * <p style='font-style:italic;'>Since 1.0.11 (Release 6.3)</p>
     * <p>Returns client application data: general info, specific provisioning parameters, hints, etc.</p>
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
     *             <td class='code'>ReadClientInfo</td>
     *             <td>Viewing of client application registered attributes and additional helper information (external URLs, hints, etc.)</td>
     *         </tr>
     *     </tbody>
     * </table>
     */
    loadClientInfo(options?:{
    }):Promise<clientapi.ClientApi> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/client-info', options, loadClientInfoOptions),
                         clientapi.ClientApi);

    }

    /**
     * Create/Update Custom Data
     *
     * <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p>
     * <p>Creates or updates custom data for the extension that is currently logged in.</p>
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
     *             <td class='code'>EditCustomData</td>
     *             <td>Viewing and updating client custom data (key-value)</td>
     *         </tr>
     *     </tbody>
     * </table>
     */
    updateCustomData(options?:{
        /** Custom data access key. The number of unique custom data keys is limited to 100 keys per extension, summarized for all the applications. For example, if you have created 50 custom data keys under the Android mobile client application for the particular extension, then logged in the iOS application and created another 50 keys, the web client application won't be allowed to create any custom data key for that extension */
        'my-custom-key':string;
        /** JSON body */
        'body':customdatarequest.CustomDataRequest;
    }):Promise<customdataapi.CustomDataApi> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/client-info/custom-data/{my-custom-key}', options, updateCustomDataOptions),
                         customdataapi.CustomDataApi);

    }

    /**
     * Create SIP Registration
     *
     * <p style='font-style:italic;'>Since 1.0.16 (Release 7.1)</p>
     * <p>Creates SIP device registration for mobile or softphone.</p>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    createSipRegistration(options?:{
        /** JSON body */
        'body':createsipregistrationrequest.CreateSipRegistrationRequest;
    }):Promise<sipregistration.SipRegistration> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/client-info/sip-provision', options, createSipRegistrationOptions),
                         sipregistration.SipRegistration);

    }

    /**
     * Get Special Numbers
     *
     * <p style='font-style:italic;'>Since 1.0.12 (Release 6.4)</p>
     * <p>Returns available special numbers and rules of processing, depending on account brand and application type (mobile/softphone/web/other). A special number rule for each number includes limitations on the options: VoIP, RingOut, outgoing SMS and Fax. If
     *     the option is disallowed, the server returns the reason code and text description.</p>
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
     *             <td class='code'>ReadClientInfo</td>
     *             <td>Viewing of client application registered attributes and additional helper information (external URLs, hints, etc.)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    (options?:{
        /** Internal identifier of a country. If not specified, the response is returned for the brand country */
        'countryId'?:number;
    }):Promise<specialnumbers.SpecialNumbers> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/client-info/special-number-rule', options, Options),
                         specialnumbers.SpecialNumbers);

    }

}

/**
 * Definition of options for loadClientInfo operation
 */
export var loadClientInfoOptions:client.IOperationParameter[] = [];

/**
 * Definition of options for updateCustomData operation
 */
export var updateCustomDataOptions:client.IOperationParameter[] = [
    {
        "name": "my-custom-key",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "customdatarequest.CustomDataRequest"
    }
];

/**
 * Definition of options for createSipRegistration operation
 */
export var createSipRegistrationOptions:client.IOperationParameter[] = [
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "createsipregistrationrequest.CreateSipRegistrationRequest"
    }
];

/**
 * Definition of options for  operation
 */
export var Options:client.IOperationParameter[] = [
    {
        "name": "countryId",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    }
];