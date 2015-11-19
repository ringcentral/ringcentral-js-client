/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import messagestorecallerinfo = require('./MessageStoreCallerInfo');

export class CreatePagerMessageRequest extends model.Model {

    /**
     * Sender of pager message. The extensionNumber property must be filled
     */
    from:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * Optional. ID of a message this message replies to
     */
    replyOn:number;

    /**
     * Text of pager message
     */
    text:string;

    /**
     * Receiver of pager message. The extensionNumber property must be filled
     */
    to:messagestorecallerinfo.MessageStoreCallerInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'replyOn', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'text', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'CreatePagerMessageRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}