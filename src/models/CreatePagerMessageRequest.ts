/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import messagestorecallerinforequest = require('./MessageStoreCallerInfoRequest');

export class CreatePagerMessageRequest extends model.Model {

    /**
     * Sender of a pager message. The extensionNumber property must be filled
     */
    from:messagestorecallerinforequest.MessageStoreCallerInfoRequest;

    /**
     * Internal identifier of a message this message replies to
     */
    replyOn:number;

    /**
     * Text of a pager message. Max length is 1024 symbols (2-byte UTF-16 encoded). If a character is encoded in 4 bytes in UTF-16 it is treated as 2 characters, thus restricting the maximum message length to 512 symbols
     */
    text:string;

    /**
     * Optional if replyOn parameter is specified. Receiver of a pager message. The extensionNumber property must be filled
     */
    to:messagestorecallerinforequest.MessageStoreCallerInfoRequest[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: messagestorecallerinforequest.MessageStoreCallerInfoRequest, isArray: false,isRequired: true},
            {property: 'replyOn', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'text', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'to', Class: messagestorecallerinforequest.MessageStoreCallerInfoRequest, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'CreatePagerMessageRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}