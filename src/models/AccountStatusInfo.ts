/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class AccountStatusInfo extends model.Model {

    /**
     * A free-form user comment, describing the status change reason
     */
    comment:string;

    /**
     * Type of suspension
     */
    reason:AccountStatusInfoReason;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'comment', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reason', Class: AccountStatusInfoReason, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'AccountStatusInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum AccountStatusInfoReason {
    Voluntarily = <any>'Voluntarily',
    Involuntarily = <any>'Involuntarily'
}