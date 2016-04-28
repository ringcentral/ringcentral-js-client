/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ReportingPagesInfo extends model.Model {

    /**
     * Name of a page. CFA application UI predefines a set of possible names and treats them as enum constants to distinguish pages by type. This is not user-visible value, as it might need localization. The maximum value is 255
     */
    name:string;

    /**
     * CFA-defined filter values/page parameters
     */
    attrX:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'name', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'attrX', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ReportingPagesInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}