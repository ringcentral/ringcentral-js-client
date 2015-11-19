/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import messageattachmentinfo = require('./MessageAttachmentInfo');
import messagestorecallerinfo = require('./MessageStoreCallerInfo');

export class GetMessageInfoResponse extends model.Model {

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
    availability:GetMessageInfoResponseAvailability;

    /**
     * SMS and Pager only. Identifier of the conversation the message belongs to
     */
    conversationId:number;

    /**
     * Message creation timestamp
     */
    creationTime:string;

    /**
     * SMS only. Delivery error code returned by gateway
     */
    deliveryErrorCode:string;

    /**
     * Message direction. Note that for some message types not all directions are allowed. For example voicemail messages can be only inbound
     */
    direction:GetMessageInfoResponseDirection;

    /**
     * Fax only. Page count in fax message
     */
    faxPageCount:number;

    /**
     * Fax only. Resolution of fax message. ('High' for black and white image scanned at 200 dpi, 'Low' for black and white image scanned at 100 dpi)
     */
    faxResolution:GetMessageInfoResponseFaxResolution;

    /**
     * Sender information
     */
    from:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * The timestamp when the message was modified on server
     */
    lastModifiedTime:string;

    /**
     * Message status. Different message types may have different allowed status values.For outbound faxes the aggregated message status is returned: If status for at least one recipient is 'Queued', then 'Queued' value is returned If status for at least one recipient is 'SendingFailed', then 'SendingFailed' value is returned In other cases Sent status is returned
     */
    messageStatus:GetMessageInfoResponseMessageStatus;

    /**
     * Pager only. True if at least one of the message recipients is Department extension
     */
    pgToDepartment:boolean;

    /**
     * Message priority
     */
    priority:GetMessageInfoResponsePriority;

    /**
     * Message read status
     */
    readStatus:GetMessageInfoResponseReadStatus;

    /**
     * SMS only. The timestamp when outbound SMS was delivered to recipient's handset. It is filled only if the carrier sends a delivery receipt to RingCentral
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
    to:messagestorecallerinfo.MessageStoreCallerInfo;

    /**
     * Message type
     */
    type:GetMessageInfoResponseType;

    /**
     * Voicemail only. Status of voicemail to text transcription. If VoicemailToText feature is not activated for account, the 'NotAvailable' value is returned
     */
    vmTranscriptionStatus:GetMessageInfoResponseVmTranscriptionStatus;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'attachments', Class: messageattachmentinfo.MessageAttachmentInfo, isArray: true,isRequired: false},
            {property: 'availability', Class: GetMessageInfoResponseAvailability, isArray: false,isRequired: false},
            {property: 'conversationId', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'creationTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'deliveryErrorCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'direction', Class: GetMessageInfoResponseDirection, isArray: false,isRequired: false},
            {property: 'faxPageCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'faxResolution', Class: GetMessageInfoResponseFaxResolution, isArray: false,isRequired: false},
            {property: 'from', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'lastModifiedTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'messageStatus', Class: GetMessageInfoResponseMessageStatus, isArray: false,isRequired: false},
            {property: 'pgToDepartment', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'priority', Class: GetMessageInfoResponsePriority, isArray: false,isRequired: false},
            {property: 'readStatus', Class: GetMessageInfoResponseReadStatus, isArray: false,isRequired: false},
            {property: 'smsDeliveryTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'smsSendingAttemptsCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'subject', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'to', Class: messagestorecallerinfo.MessageStoreCallerInfo, isArray: false,isRequired: false},
            {property: 'type', Class: GetMessageInfoResponseType, isArray: false,isRequired: false},
            {property: 'vmTranscriptionStatus', Class: GetMessageInfoResponseVmTranscriptionStatus, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetMessageInfoResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum GetMessageInfoResponseAvailability {
    Alive = <any>'Alive',
    Deleted = <any>'Deleted',
    Purged = <any>'Purged'
}

export enum GetMessageInfoResponseDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum GetMessageInfoResponseFaxResolution {
    High = <any>'High',
    Low = <any>'Low'
}

export enum GetMessageInfoResponseMessageStatus {
    Queued = <any>'Queued',
    Sent = <any>'Sent',
    Delivered = <any>'Delivered',
    DeliveryFailed = <any>'DeliveryFailed',
    SendingFailed = <any>'SendingFailed',
    Received = <any>'Received'
}

export enum GetMessageInfoResponsePriority {
    Normal = <any>'Normal',
    High = <any>'High'
}

export enum GetMessageInfoResponseReadStatus {
    Read = <any>'Read',
    Unread = <any>'Unread'
}

export enum GetMessageInfoResponseType {
    Fax = <any>'Fax',
    SMS = <any>'SMS',
    VoiceMail = <any>'VoiceMail',
    Pager = <any>'Pager',
    Text = <any>'Text'
}

export enum GetMessageInfoResponseVmTranscriptionStatus {
    NotAvailable = <any>'NotAvailable',
    InProgress = <any>'InProgress',
    TimedOut = <any>'TimedOut',
    Completed = <any>'Completed',
    CompletedPartially = <any>'CompletedPartially',
    Failed = <any>'Failed'
}