/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ModifySubscriptionRequest extends model.Model {

    /**
     * Collection of URIs to API resources (see Event Types). Mandatory field
     */
    eventFilters:string[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'eventFilters', Class: null /* string[] */, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'ModifySubscriptionRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}