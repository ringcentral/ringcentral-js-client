/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import clientapplicationinfo = require('./ClientApplicationInfo');
import clientprovisioninginfo = require('./ClientProvisioningInfo');

export class ClientApi extends model.Model {

    /**
     * Client application information
     */
    client:clientapplicationinfo.ClientApplicationInfo;

    /**
     * Provisioning parameters. Available for the  detected  applications only
     */
    provisioning:clientprovisioninginfo.ClientProvisioningInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'client', Class: clientapplicationinfo.ClientApplicationInfo, isArray: false,isRequired: true},
            {property: 'provisioning', Class: clientprovisioninginfo.ClientProvisioningInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'ClientApi';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}