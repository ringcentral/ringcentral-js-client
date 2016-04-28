/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import messagestorecallerinforequest = require('./MessageStoreCallerInfoRequest');

export class CreateSMSMessage extends model.Model {

    /**
     * Sender of an SMS message. The phoneNumber property must be filled to correspond to one of the account phone numbers which is allowed to send SMS
     */
    from:messagestorecallerinforequest.MessageStoreCallerInfoRequest;

    /**
     * Receiver of an SMS message. The phoneNumber property must be filled
     */
    to:messagestorecallerinforequest.MessageStoreCallerInfoRequest[];

    /**
     * Text of a message. Max length is 1000 symbols (2-byte UTF-16 encoded). If a character is encoded in 4 bytes in UTF-16 it is treated as 2 characters, thus restricting the maximum message length to 500 symbols
     */
    text:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: messagestorecallerinforequest.MessageStoreCallerInfoRequest, isArray: false,isRequired: true},
            {property: 'to', Class: messagestorecallerinforequest.MessageStoreCallerInfoRequest, isArray: true,isRequired: true},
            {property: 'text', Class: null /* string */, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'CreateSMSMessage';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}