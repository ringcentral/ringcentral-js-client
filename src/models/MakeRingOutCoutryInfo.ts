/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class MakeRingOutCoutryInfo extends model.Model {

    /**
     * Dialing plan country identifier
     */
    id:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MakeRingOutCoutryInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}