/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import messagestorecallerinforequest = require('./MessageStoreCallerInfoRequest');

export class CreateFaxMessageRequest extends model.Model {

    /**
     * Recipient information. Phone number property is mandatory. Optional for resend fax request
     */
    to:messagestorecallerinforequest.MessageStoreCallerInfoRequest[];

    /**
     * Fax resolution
     */
    resolution:CreateFaxMessageRequestResolution;

    /**
     * The datetime to send fax at, in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. If time is not specified, the fax will be send immediately
     */
    sendTime:string;

    /**
     * Optional. Cover page index. The possible values are from 0 (zero) to 16. If not specified, the default cover page which is configured in  Outbound Fax Settings  is attached. See also 'Available Cover Pages' table below
     */
    coverIndex:number;

    /**
     * Optional. Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols
     */
    coverPageText:string;

    /**
     * Internal identifier of the original fax message which needs to be resent. Mandatory for resend fax request
     */
    originalMessageId:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'to', Class: messagestorecallerinforequest.MessageStoreCallerInfoRequest, isArray: true,isRequired: true},
            {property: 'resolution', Class: CreateFaxMessageRequestResolution, isArray: false,isRequired: false},
            {property: 'sendTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'coverIndex', Class: null /* number */, isArray: false,isRequired: false},
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