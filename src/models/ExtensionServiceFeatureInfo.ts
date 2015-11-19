/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ExtensionServiceFeatureInfo extends model.Model {

    /**
     * Feature status; shows feature availability for an extension
     */
    enabled:boolean;

    /**
     * Feature name, see all available values in Service Feature List
     */
    featureName:string;

    /**
     * Reason of limitation for a particular service feature. Returned only if the enabled parameter value is 'False', see Service Feature Limitations and Reasons. When retrieving service features for an extension, the reasons for the limitations, if any, are returned in response
     */
    reason:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'enabled', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'featureName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reason', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ExtensionServiceFeatureInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}