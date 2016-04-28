/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ForwardingNumberInfoRulesCreateRuleRequest extends model.Model {

    /**
     * Internal identifier of a forwarding number
     */
    id:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ForwardingNumberInfoRulesCreateRuleRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}