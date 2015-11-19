/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import calllogcallerinfo = require('./CallLogCallerInfo');
import recordinginfo = require('./RecordingInfo');

export class GetExtensionCallLogRecordResponse extends model.Model {

    /**
     * Internal identifier of a cal log record
     */
    id:string;

    /**
     * Canonical URI of a call log record
     */
    uri:string;

    /**
     * Internal identifier of a call session
     */
    sessionId:string;

    /**
     * Caller information
     */
    from:calllogcallerinfo.CallLogCallerInfo;

    /**
     * Callee information
     */
    to:calllogcallerinfo.CallLogCallerInfo;

    /**
     * Call type
     */
    type:GetExtensionCallLogRecordResponseType;

    /**
     * Call direction
     */
    direction:GetExtensionCallLogRecordResponseDirection;

    /**
     * Action description of the call operation.
     */
    action:GetExtensionCallLogRecordResponseAction;

    /**
     * Status description of the call operation.
     */
    result:GetExtensionCallLogRecordResponseResult;

    /**
     * Call start time
     */
    startTime:string;

    /**
     * Call duration in seconds
     */
    duration:number;

    /**
     * Call recording data. Returned if the call is recorded
     */
    recording:recordinginfo.RecordingInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'sessionId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'from', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false,isRequired: false},
            {property: 'to', Class: calllogcallerinfo.CallLogCallerInfo, isArray: false,isRequired: false},
            {property: 'type', Class: GetExtensionCallLogRecordResponseType, isArray: false,isRequired: false},
            {property: 'direction', Class: GetExtensionCallLogRecordResponseDirection, isArray: false,isRequired: false},
            {property: 'action', Class: GetExtensionCallLogRecordResponseAction, isArray: false,isRequired: false},
            {property: 'result', Class: GetExtensionCallLogRecordResponseResult, isArray: false,isRequired: false},
            {property: 'startTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'duration', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetExtensionCallLogRecordResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum GetExtensionCallLogRecordResponseType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum GetExtensionCallLogRecordResponseDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum GetExtensionCallLogRecordResponseAction {
    Unknown = <any>'Unknown',
    PhoneCall = <any>'Phone Call',
    PhoneLogin = <any>'Phone Login',
    IncomingFax = <any>'Incoming Fax',
    AcceptCall = <any>'Accept Call',
    FindMe = <any>'FindMe',
    FollowMe = <any>'FollowMe',
    OutgoingFax = <any>'Outgoing Fax',
    CallReturn = <any>'Call Return',
    CallingCard = <any>'Calling Card',
    RingDirectly = <any>'Ring Directly',
    RingOutWeb = <any>'RingOut Web',
    VoIPCall = <any>'VoIP Call',
    RingOutPC = <any>'RingOut PC',
    RingMe = <any>'RingMe',
    Transfer = <any>'Transfer',
    '411Info' = <any>'411 Info',
    Emergency = <any>'Emergency',
    'E911Update' = <any>'E911 Update',
    Support = <any>'Support',
    RingOutMobile = <any>'RingOut Mobile'
}

export enum GetExtensionCallLogRecordResponseResult {
    Unknown = <any>'Unknown',
    ResultInProgress = <any>'ResultInProgress',
    Missed = <any>'Missed',
    Callaccepted = <any>'Call accepted',
    Voicemail = <any>'Voicemail',
    Rejected = <any>'Rejected',
    Reply = <any>'Reply',
    Received = <any>'Received',
    ReceiveError = <any>'Receive Error',
    FaxonDemand = <any>'Fax on Demand',
    PartialReceive = <any>'Partial Receive',
    Blocked = <any>'Blocked',
    'Callсonnected' = <any>'Call сonnected',
    NoAnswer = <any>'No Answer',
    Busy = <any>'Busy',
    SendError = <any>'Send Error',
    Sent = <any>'Sent',
    Nofaxmachine = <any>'No fax machine',
    ResultEmpty = <any>'ResultEmpty',
    Account = <any>'Account',
    Suspended = <any>'Suspended',
    CallFailed = <any>'Call Failed',
    CallFailure = <any>'Call Failure',
    InternalError = <any>'Internal Error',
    IPPhoneoffline = <any>'IP Phone offline',
    RestrictedNumber = <any>'Restricted Number',
    WrongNumber = <any>'Wrong Number',
    Stopped = <any>'Stopped',
    Hangup = <any>'Hang up',
    PoorLineQuality = <any>'Poor Line Quality',
    PartiallySent = <any>'Partially Sent',
    InternationalDisabled = <any>'International Disabled',
    InternationalRestriction = <any>'International Restriction',
    Abandoned = <any>'Abandoned',
    Declined = <any>'Declined',
    FaxReceiptError = <any>'Fax Receipt Error',
    FaxSendError = <any>'Fax Send Error'
}