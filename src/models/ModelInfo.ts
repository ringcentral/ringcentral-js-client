/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import addoninfo = require('./AddonInfo');

export class ModelInfo extends model.Model {

    /**
     * Device model identifier. Mandatory when ordering a HardPhone if boxBillingId is not used for ordering
     */
    id:string;

    /**
     * Device name
     */
    name:string;

    /**
     * Addons description
     */
    addons:addoninfo.AddonInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'addons', Class: addoninfo.AddonInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ModelInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}