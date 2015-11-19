/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class RingOutStatusInfo extends model.Model {

    /**
     * Status of a call
     */
    callStatus:RingOutStatusInfoCallStatus;

    /**
     * Status of a calling party
     */
    callerStatus:RingOutStatusInfoCallerStatus;

    /**
     * Status of a called party
     */
    calleeStatus:RingOutStatusInfoCalleeStatus;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'callStatus', Class: RingOutStatusInfoCallStatus, isArray: false,isRequired: false},
            {property: 'callerStatus', Class: RingOutStatusInfoCallerStatus, isArray: false,isRequired: false},
            {property: 'calleeStatus', Class: RingOutStatusInfoCalleeStatus, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'RingOutStatusInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum RingOutStatusInfoCallStatus {
    Invalid = <any>'Invalid',
    Success = <any>'Success',
    InProgress = <any>'InProgress',
    Busy = <any>'Busy',
    NoAnswer = <any>'NoAnswer',
    Rejected = <any>'Rejected',
    GenericError = <any>'GenericError',
    Finished = <any>'Finished',
    InternationalDisabled = <any>'InternationalDisabled',
    DestinationBlocked = <any>'DestinationBlocked',
    NotEnoughFunds = <any>'NotEnoughFunds',
    NoSuchUser = <any>'NoSuchUser'
}

export enum RingOutStatusInfoCallerStatus {
    Invalid = <any>'Invalid',
    Success = <any>'Success',
    InProgress = <any>'InProgress',
    Busy = <any>'Busy',
    NoAnswer = <any>'NoAnswer',
    Rejected = <any>'Rejected',
    GenericError = <any>'GenericError',
    Finished = <any>'Finished',
    InternationalDisabled = <any>'InternationalDisabled',
    DestinationBlocked = <any>'DestinationBlocked',
    NotEnoughFunds = <any>'NotEnoughFunds',
    NoSuchUser = <any>'NoSuchUser'
}

export enum RingOutStatusInfoCalleeStatus {
    Invalid = <any>'Invalid',
    Success = <any>'Success',
    InProgress = <any>'InProgress',
    Busy = <any>'Busy',
    NoAnswer = <any>'NoAnswer',
    Rejected = <any>'Rejected',
    GenericError = <any>'GenericError',
    Finished = <any>'Finished',
    InternationalDisabled = <any>'InternationalDisabled',
    DestinationBlocked = <any>'DestinationBlocked',
    NotEnoughFunds = <any>'NotEnoughFunds',
    NoSuchUser = <any>'NoSuchUser'
}