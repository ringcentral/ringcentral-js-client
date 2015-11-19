/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class NavigationInfo extends model.Model {

    /**
     * Canonical URI for the first page of the list
     */
    firstPage:string;

    /**
     * Canonical URI for the next page of the list
     */
    nextPage:string;

    /**
     * Canonical URI for the previous page of the list
     */
    previousPage:string;

    /**
     * Canonical URI for the last page of the list
     */
    lastPage:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'firstPage', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'nextPage', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'previousPage', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'lastPage', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'NavigationInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}