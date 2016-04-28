/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import clientprovisioninghintinfo = require('./ClientProvisioningHintInfo');

export class ClientProvisioningHintsInfo extends model.Model {

    /**
     * Trial account expiration. Returned for trial accounts only
     */
    trialState:clientprovisioninghintinfo.ClientProvisioningHintInfo;

    /**
     * User credentials expiration
     */
    userCredentialState:clientprovisioninghintinfo.ClientProvisioningHintInfo;

    /**
     * Application version update. Returned only if the client current version is older than the latest version. 'actionRequired': 'true' means the application requires force updating to the latest version
     */
    appVersionUpgrade:clientprovisioninghintinfo.ClientProvisioningHintInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'trialState', Class: clientprovisioninghintinfo.ClientProvisioningHintInfo, isArray: false,isRequired: false},
            {property: 'userCredentialState', Class: clientprovisioninghintinfo.ClientProvisioningHintInfo, isArray: false,isRequired: false},
            {property: 'appVersionUpgrade', Class: clientprovisioninghintinfo.ClientProvisioningHintInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ClientProvisioningHintsInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}