/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import reasoninfo = require('./ReasonInfo');

export class OptionInfo extends model.Model {

    /**
     * Specifies if the feature is allowed ('True') or disallowed ('False') for the special number
     */
    enabled:boolean;

    /**
     * The reason explaining why the option is disallowed. Returned if the value of enabled is 'False'
     */
    reason:reasoninfo.ReasonInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'enabled', Class: null /* boolean */, isArray: false,isRequired: true},
            {property: 'reason', Class: reasoninfo.ReasonInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'OptionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}