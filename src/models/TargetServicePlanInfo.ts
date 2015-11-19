/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class TargetServicePlanInfo extends model.Model {

    /**
     * Internal identifier of a target service plan
     */
    id:string;

    /**
     * Name of a target service plan
     */
    name:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'TargetServicePlanInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}