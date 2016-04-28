/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import optioninfo = require('./OptionInfo');

export class SpecialNumberInfo extends model.Model {

    /**
     * Service phone number in N11 code format
     */
    phoneNumber:string;

    /**
     * Description of a special number
     */
    description:string;

    /**
     * Information on options allowed/disallowed for the special number
     */
    features:optioninfo.OptionInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'description', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'features', Class: optioninfo.OptionInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'SpecialNumberInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}