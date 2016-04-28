/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import phonenumberinfoconferencing = require('./PhoneNumberInfoConferencing');

export class ConferencingInfo extends model.Model {

    /**
     * Canonical URI of a conferencing
     */
    uri:string;

    /**
     * Determines if host user allows conference participants to join before the host
     */
    allowJoinBeforeHost:boolean;

    /**
     * Access code for a host user
     */
    hostCode:string;

    /**
     * Internal parameter specifying conferencing engine
     */
    mode:string;

    /**
     * Access code for any participant
     */
    participantCode:string;

    /**
     * Primary conference phone number for user's home country returned in E.164 (11-digits) format
     */
    phoneNumber:string;

    /**
     * Short URL leading to the service web page Tap to Join for audio conference bridge
     */
    tapToJoinUri:string;

    /**
     * List of multiple dial-in phone numbers to connect to audio conference service, relevant for user's brand. Each number is given with the country and location information, in order to let the user choose the less expensive way to connect to a conference. The first number in the list is the primary conference number, that is default and domestic
     */
    phoneNumbers:phonenumberinfoconferencing.PhoneNumberInfoConferencing[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'allowJoinBeforeHost', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'hostCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'participantCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'tapToJoinUri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'phoneNumbers', Class: phonenumberinfoconferencing.PhoneNumberInfoConferencing, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'ConferencingInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}