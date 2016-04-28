/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import countryinfoconferencing = require('./CountryInfoConferencing');

export class PhoneNumberInfoConferencing extends model.Model {

    /**
     * Information on a home country of a conference phone number
     */
    country:countryinfoconferencing.CountryInfoConferencing;

    /**
     * 'True' if the number is default for the conference. Default conference number is a domestic number that can be set by user (otherwise it is set by the system). Only one default number per country is allowed
     */
    default:boolean;

    /**
     * 'True' if the greeting message is played on this number
     */
    hasGreeting:boolean;

    /**
     * Location (city, region, state) of a conference phone number
     */
    location:string;

    /**
     * Dial-in phone number to connect to a conference
     */
    phoneNumber:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'country', Class: countryinfoconferencing.CountryInfoConferencing, isArray: false,isRequired: false},
            {property: 'default', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'hasGreeting', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'location', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'PhoneNumberInfoConferencing';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}