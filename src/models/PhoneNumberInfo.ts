/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import countryinfo = require('./CountryInfo');
import phonenumbersextensioninfo = require('./PhoneNumbersExtensionInfo');

export class PhoneNumberInfo extends model.Model {

    /**
     * Internal identifier of a phone number
     */
    id:number;

    /**
     * Brief information on a phone number country
     */
    country:countryinfo.CountryInfo;

    /**
     * Information on the extension, to which the phone number is assigned. Returned only for the request of Account phone number list
     */
    extension:phonenumbersextensioninfo.PhoneNumbersExtensionInfo;

    /**
     * Indicates if this phone number is enabled to appear as CallerId and/or to send outbound SMS from it. Returned only for the request of Extension phone number list. The values are: 'CallerId', 'SmsSender'
     */
    features:string[];

    /**
     * Location (City, State). Filled for local US numbers
     */
    location:string;

    /**
     * Payment type. 'External' is returned for forwarded numbers which are not terminated in the RingCentral phone system
     */
    paymentType:PhoneNumberInfoPaymentType;

    /**
     * Phone number
     */
    phoneNumber:string;

    /**
     * Status of a phone number. If the value is 'Normal', the phone number is ready to be used. Otherwise it is an external number not yet ported to RingCentral
     */
    status:string;

    /**
     * Phone number type
     */
    type:PhoneNumberInfoType;

    /**
     * Usage type of the phone number
     */
    usageType:PhoneNumberInfoUsageType;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'country', Class: countryinfo.CountryInfo, isArray: false,isRequired: false},
            {property: 'extension', Class: phonenumbersextensioninfo.PhoneNumbersExtensionInfo, isArray: false,isRequired: false},
            {property: 'features', Class: null /* string[] */, isArray: true,isRequired: false},
            {property: 'location', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'paymentType', Class: PhoneNumberInfoPaymentType, isArray: false,isRequired: false},
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'status', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: PhoneNumberInfoType, isArray: false,isRequired: false},
            {property: 'usageType', Class: PhoneNumberInfoUsageType, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'PhoneNumberInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum PhoneNumberInfoPaymentType {
    External = <any>'External',
    TollFree = <any>'TollFree',
    Local = <any>'Local'
}

export enum PhoneNumberInfoType {
    VoiceFax = <any>'VoiceFax',
    FaxOnly = <any>'FaxOnly',
    VoiceOnly = <any>'VoiceOnly'
}

export enum PhoneNumberInfoUsageType {
    MainCompanyNumber = <any>'MainCompanyNumber',
    AdditionalCompanyNumber = <any>'AdditionalCompanyNumber',
    CompanyNumber = <any>'CompanyNumber',
    DirectNumber = <any>'DirectNumber',
    CompanyFaxNumber = <any>'CompanyFaxNumber',
    ForwardedNumber = <any>'ForwardedNumber'
}