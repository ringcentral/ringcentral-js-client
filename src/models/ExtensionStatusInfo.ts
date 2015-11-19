/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ExtensionStatusInfo extends model.Model {

    /**
     * A free-form user comment, describing the status change reason
     */
    comment:string;

    /**
     * Type of suspension
     */
    reason:ExtensionStatusInfoReason;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'comment', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reason', Class: ExtensionStatusInfoReason, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ExtensionStatusInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ExtensionStatusInfoReason {
    Voluntarily = <any>'Voluntarily',
    Involuntarily = <any>'Involuntarily'
}