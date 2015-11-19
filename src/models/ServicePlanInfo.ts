/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ServicePlanInfo extends model.Model {

    /**
     * Internal identifier of a service plan
     */
    id:string;

    /**
     * Name of a service plan
     */
    name:string;

    /**
     * Edition of a service plan
     */
    edition:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'edition', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ServicePlanInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}