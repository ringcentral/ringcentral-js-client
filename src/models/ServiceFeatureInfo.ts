/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ServiceFeatureInfo extends model.Model {

    /**
     * Feature name, see all available values in Service Feature List
     */
    featureName:string;

    /**
     * Feature status, shows feature availability for the extension
     */
    enabled:ServiceFeatureInfoEnabled;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'featureName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'enabled', Class: ServiceFeatureInfoEnabled, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ServiceFeatureInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ServiceFeatureInfoEnabled {
    True = <any>'True',
    False = <any>'False'
}