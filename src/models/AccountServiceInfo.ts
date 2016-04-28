/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import servicefeatureinfo = require('./ServiceFeatureInfo');
import accountlimits = require('./AccountLimits');

export class AccountServiceInfo extends model.Model {

    /**
     * Canonical URI of the account Service Info resource
     */
    uri:string;

    /**
     * Account Service Plan name
     */
    servicePlanName:string;

    /**
     * Service features information, see Service Feature List
     */
    serviceFeatures:servicefeatureinfo.ServiceFeatureInfo[];

    /**
     * Limits which are effective for the account
     */
    limits:accountlimits.AccountLimits[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'servicePlanName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceFeatures', Class: servicefeatureinfo.ServiceFeatureInfo, isArray: true,isRequired: false},
            {property: 'limits', Class: accountlimits.AccountLimits, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'AccountServiceInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}