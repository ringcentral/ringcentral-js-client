/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import calllogcallerinfo = require('./CallLogCallerInfo');
import recordinginfo = require('./RecordingInfo');

export class AccountCallLogRecord extends model.Model {

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
    type:AccountCallLogRecordType;

    /**
     * Call direction
     */
    direction:AccountCallLogRecordDirection;

    /**
     * Action description of the call operation
     */
    action:AccountCallLogRecordAction;

    /**
     * Status description of the call operation
     */
    result:AccountCallLogRecordResult;

    /**
     * The call start datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
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
            {property: 'type', Class: AccountCallLogRecordType, isArray: false,isRequired: false},
            {property: 'direction', Class: AccountCallLogRecordDirection, isArray: false,isRequired: false},
            {property: 'action', Class: AccountCallLogRecordAction, isArray: false,isRequired: false},
            {property: 'result', Class: AccountCallLogRecordResult, isArray: false,isRequired: false},
            {property: 'startTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'duration', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'recording', Class: recordinginfo.RecordingInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'AccountCallLogRecord';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum AccountCallLogRecordType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum AccountCallLogRecordDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum AccountCallLogRecordAction {
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

export enum AccountCallLogRecordResult {
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
    Callconnected = <any>'Call connected',
    NoAnswer = <any>'No Answer',
    InternationalDisabled = <any>'International Disabled',
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
    InternationalRestriction = <any>'International Restriction',
    Abandoned = <any>'Abandoned',
    Declined = <any>'Declined',
    FaxReceiptError = <any>'Fax Receipt Error',
    FaxSendError = <any>'Fax Send Error'
}