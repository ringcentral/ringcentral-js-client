/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import billingplaninfo = require('./BillingPlanInfo');
import brandinfo = require('./BrandInfo');
import serviceplaninfo = require('./ServicePlanInfo');
import targetserviceplaninfo = require('./TargetServicePlanInfo');

export class ServiceInfoResponse extends model.Model {

    /**
     * Canonical URI of a service info resource
     */
    uri:string;

    /**
     * Information on account billing plan
     */
    billingPlan:billingplaninfo.BillingPlanInfo;

    /**
     * Information on account brand
     */
    brand:brandinfo.BrandInfo;

    /**
     * Information on account service plan
     */
    servicePlan:serviceplaninfo.ServicePlanInfo;

    /**
     * Information on account target service plan
     */
    targetServicePlan:targetserviceplaninfo.TargetServicePlanInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'billingPlan', Class: billingplaninfo.BillingPlanInfo, isArray: false,isRequired: false},
            {property: 'brand', Class: brandinfo.BrandInfo, isArray: false,isRequired: false},
            {property: 'servicePlan', Class: serviceplaninfo.ServicePlanInfo, isArray: false,isRequired: false},
            {property: 'targetServicePlan', Class: targetserviceplaninfo.TargetServicePlanInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ServiceInfoResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}