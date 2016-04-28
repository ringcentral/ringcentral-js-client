/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import messageattachmentinfo = require('./MessageAttachmentInfo');
import messagestorecallerinfo = require('./MessageStoreCallerInfo');

export class MessageInfo extends model.Model {

    /**
     * Internal identifier of a message
     */
    id:string;

    /**
     * Canonical URI of a message
     */
    uri:string;

    /**
     * The list of message attachments
     */
    attachments:messageattachmentinfo.MessageAttachmentInfo[];

    /**
     * Message availability status. Message in 'Deleted' state is still preserved with all its attachments and can be restored. 'Purged' means that all attachments are already deleted and the message itself is about to be physically deleted shortly
     */
    availability:MessageInfoAvailability;

    /**
     * SMS and Pager only. Identifier of the conversation the message belongs to
     */
    conversationId:number;

    /**
     * Message creation datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    creationTime:string;

    /**
     * SMS only. Delivery error code returned by gateway
     */
    deliveryErrorCode:string;

    /**
     * Message direction. Note that for some message types not all directions are allowed. For example voicemail messages can be only inbound
     */
    direction:MessageInfoDirection;

    /**
     * Fax only. Page count in fax message
     */
    faxPageCount:number;

    /**
     * Fax only. Resolution of fax message. ('High' for black and white image scanned at 200 dpi, 'Low' for black and white image scanned at 100 dpi)
     */
    faxResolution:MessageInfoFaxResolution;

    /**
     * Sender information
     */
    from:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * The datetime when the message was modified on server in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    lastModifiedTime:string;

    /**
     * Message status. Different message types may have different allowed status values. For outbound faxes the aggregated message status is returned: If status for at least one recipient is 'Queued', then 'Queued' value is returned If status for at least one recipient is 'SendingFailed', then 'SendingFailed' value is returned In other cases Sent status is returned
     */
    messageStatus:MessageInfoMessageStatus;

    /**
     * Pager only True if at least one of the message recipients is Department extension
     */
    pgToDepartment:boolean;

    /**
     * Message priority
     */
    priority:MessageInfoPriority;

    /**
     * Message read status
     */
    readStatus:MessageInfoReadStatus;

    /**
     * SMS only. The datetime when outbound SMS was delivered to recipient's handset in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. It is filled only if the carrier sends a delivery receipt to RingCentral
     */
    smsDeliveryTime:string;

    /**
     * SMS only. Number of attempts made to send an outbound SMS to the gateway (if gateway is temporary unavailable)
     */
    smsSendingAttemptsCount:number;

    /**
     * Message subject. For SMS and Pager messages it replicates message text which is also returned as an attachment
     */
    subject:string;

    /**
     * Recipient information
     */
    to:messagestorecallerinfo.MessageStoreCallerInfo[];

    /**
     * Message type
     */
    type:MessageInfoType;

    /**
     * Voicemail only. Status of voicemail to text transcription. If VoicemailToText feature is not activated for account, the 'NotAvailable' value is returned
     */
    vmTranscriptionStatus:MessageInfoVmTranscriptionStatus;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'attachments', Class: messageattachmentinfo.MessageAttachmentInfo, isArray: true,isRequired: false},
            {property: 'availability', Class: MessageInfoAvailability, isArray: false,isRequired: false},
            {property: 'conversationId', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'creationTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'deliveryErrorCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'direction', Class: MessageInfoDirection, isArray: false,isRequired: false},
            {property: 'faxPageCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'faxResolution', Class: MessageInfoFaxResolution, isArray: false,isRequired: false},
            {property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'lastModifiedTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'messageStatus', Class: MessageInfoMessageStatus, isArray: false,isRequired: false},
            {property: 'pgToDepartment', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'priority', Class: MessageInfoPriority, isArray: false,isRequired: false},
            {property: 'readStatus', Class: MessageInfoReadStatus, isArray: false,isRequired: false},
            {property: 'smsDeliveryTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'smsSendingAttemptsCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'subject', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: true,isRequired: false},
            {property: 'type', Class: MessageInfoType, isArray: false,isRequired: false},
            {property: 'vmTranscriptionStatus', Class: MessageInfoVmTranscriptionStatus, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MessageInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum MessageInfoAvailability {
    Alive = <any>'Alive',
    Deleted = <any>'Deleted',
    Purged = <any>'Purged'
}

export enum MessageInfoDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum MessageInfoFaxResolution {
    High = <any>'High',
    Low = <any>'Low'
}

export enum MessageInfoMessageStatus {
    Queued = <any>'Queued',
    Sent = <any>'Sent',
    Delivered = <any>'Delivered',
    DeliveryFailed = <any>'DeliveryFailed',
    SendingFailed = <any>'SendingFailed',
    Received = <any>'Received'
}

export enum MessageInfoPriority {
    Normal = <any>'Normal',
    High = <any>'High'
}

export enum MessageInfoReadStatus {
    Read = <any>'Read',
    Unread = <any>'Unread'
}

export enum MessageInfoType {
    Fax = <any>'Fax',
    SMS = <any>'SMS',
    VoiceMail = <any>'VoiceMail',
    Pager = <any>'Pager',
    Text = <any>'Text'
}

export enum MessageInfoVmTranscriptionStatus {
    NotAvailable = <any>'NotAvailable',
    InProgress = <any>'InProgress',
    TimedOut = <any>'TimedOut',
    Completed = <any>'Completed',
    CompletedPartially = <any>'CompletedPartially',
    Failed = <any>'Failed'
}