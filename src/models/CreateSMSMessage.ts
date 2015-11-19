/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import messagestorecallerinfo = require('./MessageStoreCallerInfo');

export class CreateSMSMessage extends model.Model {

    /**
     * Sender of SMS message. The phoneNumber property must be filled to correspond to one of the account phone numbers which is allowed for given extension to send SMS from
     */
    from:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * Receiver of SMS message. The phoneNumber property must be filled
     */
    to:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * Text of SMS message
     */
    text:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: true},
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: true},
            {property: 'text', Class: null /* string */, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'CreateSMSMessage';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}