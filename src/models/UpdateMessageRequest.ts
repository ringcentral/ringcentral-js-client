/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class UpdateMessageRequest extends model.Model {

    /**
     * Read status of a message to be changed. Multiple values are accepted
     */
    readStatus:UpdateMessageRequestReadStatus;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'readStatus', Class: UpdateMessageRequestReadStatus, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'UpdateMessageRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum UpdateMessageRequestReadStatus {
    Read = <any>'Read',
    Unread = <any>'Unread'
}