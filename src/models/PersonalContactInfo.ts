/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import contactaddressinfo = require('./ContactAddressInfo');

export class PersonalContactInfo extends model.Model {

    /**
     * Internal identifier of a contact
     */
    id:string;

    /**
     * Canonical URI of a contact
     */
    uri:string;

    /**
     * This property has a special meaning only on Address Book Sync (e.g. a contact can be 'Deleted'). For simple contact list reading it has always the default value - 'Alive'
     */
    availability:PersonalContactInfoAvailability;

    /**
     * First name of a personal contact
     */
    firstName:string;

    /**
     * Last name of a personal contact
     */
    lastName:string;

    /**
     * Middle name of a personal contact
     */
    middleName:string;

    /**
     * Nick name of a personal contact
     */
    nickName:string;

    /**
     * Company name of a personal contact
     */
    company:string;

    /**
     * Job title of a personal contact
     */
    jobTitle:string;

    /**
     * Home phone of a personal contact
     */
    homePhone:string;

    /**
     * The 2-d home phone of a personal contact
     */
    homePhone2:string;

    /**
     * Business phone of a personal contact
     */
    businessPhone:string;

    /**
     * The 2-d business phone of a personal contact
     */
    businessPhone2:string;

    /**
     * Mobile phone of a personal contact
     */
    mobilePhone:string;

    /**
     * Business fax of a personal contact
     */
    businessFax:string;

    /**
     * Company phone of a personal contact
     */
    companyPhone:string;

    /**
     * Assistant phone of a personal contact
     */
    assistantPhone:string;

    /**
     * Car phone of a personal contact
     */
    carPhone:string;

    /**
     * Other phone of a personal contact
     */
    otherPhone:string;

    /**
     * Other fax of a personal contact
     */
    otherFax:string;

    /**
     * Callback phone of a personal contact
     */
    callbackPhone:string;

    /**
     * Email of a personal contact
     */
    email:string;

    /**
     * The 2-d email of a personal contact
     */
    email2:string;

    /**
     * The 3-d email of a personal contact
     */
    email3:string;

    /**
     * Home address of a personal contact
     */
    homeAddress:contactaddressinfo.ContactAddressInfo;

    /**
     * Business address of a personal contact
     */
    businessAddress:contactaddressinfo.ContactAddressInfo;

    /**
     * Other address of a personal contact
     */
    otherAddress:contactaddressinfo.ContactAddressInfo;

    /**
     * Date of birth of a personal contact ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    birthday:string;

    /**
     * Web page of a personal contact
     */
    webPage:string;

    /**
     * Notes of a personal contact
     */
    notes:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'availability', Class: PersonalContactInfoAvailability, isArray: false,isRequired: false},
            {property: 'firstName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'lastName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'middleName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'nickName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'company', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'jobTitle', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'homePhone', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'homePhone2', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'businessPhone', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'businessPhone2', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mobilePhone', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'businessFax', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'companyPhone', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'assistantPhone', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'carPhone', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'otherPhone', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'otherFax', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'callbackPhone', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'email', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'email2', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'email3', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'homeAddress', Class: contactaddressinfo.ContactAddressInfo, isArray: false,isRequired: false},
            {property: 'businessAddress', Class: contactaddressinfo.ContactAddressInfo, isArray: false,isRequired: false},
            {property: 'otherAddress', Class: contactaddressinfo.ContactAddressInfo, isArray: false,isRequired: false},
            {property: 'birthday', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'webPage', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'notes', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'PersonalContactInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum PersonalContactInfoAvailability {
    Alive = <any>'Alive',
    Deleted = <any>'Deleted',
    Purged = <any>'Purged'
}