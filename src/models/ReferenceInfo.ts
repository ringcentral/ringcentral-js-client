/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ReferenceInfo extends model.Model {

    /**
     * Non-RC identifier of an extension
     */
    ref:string;

    /**
     * Type of external identifier
     */
    type:ReferenceInfoType;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'ref', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: ReferenceInfoType, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ReferenceInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ReferenceInfoType {
    PartnerId = <any>'PartnerId',
    CustomerDirectoryId = <any>'CustomerDirectoryId'
}