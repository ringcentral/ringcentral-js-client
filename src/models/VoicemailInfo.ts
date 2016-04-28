/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import recipientinfo = require('./RecipientInfo');

export class VoicemailInfo extends model.Model {

    /**
     * If 'True' then voicemails are allowed to be received
     */
    enabled:boolean;

    /**
     * Recipient data
     */
    recipient:recipientinfo.RecipientInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'enabled', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'recipient', Class: recipientinfo.RecipientInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'VoicemailInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}