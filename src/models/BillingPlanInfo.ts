/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class BillingPlanInfo extends model.Model {

    /**
     * Internal identifier of a billing plan
     */
    id:string;

    /**
     * Billing plan name
     */
    name:string;

    /**
     * Duration period
     */
    durationUnit:BillingPlanInfoDurationUnit;

    /**
     * Number of duration units
     */
    duration:string;

    /**
     * Billing plan type
     */
    type:BillingPlanInfoType;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'durationUnit', Class: BillingPlanInfoDurationUnit, isArray: false,isRequired: false},
            {property: 'duration', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: BillingPlanInfoType, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'BillingPlanInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum BillingPlanInfoDurationUnit {
    Month = <any>'Month',
    Day = <any>'Day'
}

export enum BillingPlanInfoType {
    Initial = <any>'Initial',
    Regular = <any>'Regular',
    Suspended = <any>'Suspended',
    Trial = <any>'Trial',
    TrialNoCC = <any>'TrialNoCC',
    Free = <any>'Free'
}