/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class UpdateConferencingInfoRequest extends model.Model {

    /**
     * Multiple dial-in phone numbers to connect to audio conference service, relevant for user's brand. Each number is given with the country and location information, in order to let the user choose the less expensive way to connect to a conference. The first number in the list is the primary conference number, that is default and domestic
     */
    phoneNumbers:parameters[];

    /**
     * Dial-in phone number to connect to a conference
     */
    phoneNumber:string;

    /**
     * 'True' if the number is default for the conference. Default conference number is a domestic number that can be set by user (otherwise it is set by the system). Only one default number per country is allowed
     */
    default:boolean;

    /**
     * Determines if host user allows conference participants to join before the host
     */
    allowJoinBeforeHost:boolean;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumbers', Class: parameters, isArray: true,isRequired: false},
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'default', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'allowJoinBeforeHost', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'UpdateConferencingInfoRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}