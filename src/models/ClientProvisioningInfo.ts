/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import clientprovisioningweburiinfo = require('./ClientProvisioningWebUriInfo');
import clientprovisioninghintsinfo = require('./ClientProvisioningHintsInfo');

export class ClientProvisioningInfo extends model.Model {

    /**
     * Links to the mobile web and Service Web resources
     */
    webUris:clientprovisioningweburiinfo.ClientProvisioningWebUriInfo;

    /**
     * Informs client application on the required user action
     */
    hints:clientprovisioninghintsinfo.ClientProvisioningHintsInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'webUris', Class: clientprovisioningweburiinfo.ClientProvisioningWebUriInfo, isArray: false,isRequired: true},
            {property: 'hints', Class: clientprovisioninghintsinfo.ClientProvisioningHintsInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'ClientProvisioningInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}