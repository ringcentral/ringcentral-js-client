/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import messagestorecallerinfo = require('./MessageStoreCallerInfo');

export class CreateFaxMessageRequest extends model.Model {

    /**
     * Recipient information. Phone number property is mandatory. Optional for resend fax request
     */
    to:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * Fax resolution
     */
    resolution:CreateFaxMessageRequestResolution;

    /**
     * Optional. Timestamp to send fax at. If not specified (current or the past), the fax is sent immediately
     */
    sendTime:string;

    /**
     * Optional. Cover page index. If not specified, the default cover page which is configured in  Outbound Fax Settings  is attached. See also 'Available Cover Pages' table below
     */
    coverIndex:integer (0-16);

    /**
     * Optional. Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols
     */
    coverPageText:string;

    /**
     * Internal identifier of the original fax message which needs to be resent. Supported for resend fax request
     */
    originalMessageId:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'resolution', Class: CreateFaxMessageRequestResolution, isArray: false,isRequired: false},
            {property: 'sendTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'coverIndex', Class: integer (0-16), isArray: false,isRequired: false},
            {property: 'coverPageText', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'originalMessageId', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CreateFaxMessageRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum CreateFaxMessageRequestResolution {
    High = <any>'High',
    Low = <any>'Low'
}