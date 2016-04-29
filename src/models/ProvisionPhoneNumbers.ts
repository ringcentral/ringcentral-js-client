/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import provisionphonenumbersextensioninfo = require('./ProvisionPhoneNumbersExtensionInfo');

export class ProvisionPhoneNumbers extends model.Model {

    /**
     * Information on extension which the phone number is added to, only for provisioning extension-level numbers
     */
    extensionId:provisionphonenumbersextensioninfo.ProvisionPhoneNumbersExtensionInfo;

    /**
     * Phone number to purchase returned in E.164 (11-digits) format
     */
    phoneNumber:string;

    /**
     * Internal identifier of phone number reservation; encoded data including reservation type (by brand, by account, by session), particular brand/account/session data, and reservation date and time
     */
    reservationId:string;

    /**
     * Phone type (purposes for which the number may be used). The default value is  VoiceFax  (for  AdditionalCompanyNumber ,  CompanyNumber ,  DirectNumber ) and  FaxOnly  (for  CompanyFaxNumber )
     */
    type:string;

    /**
     * Usage type of the phone number, see Phone Numbers. The default value is  DirectNumber 
     */
    usageType:ProvisionPhoneNumbersUsageType;

    /**
     * Vanity pattern that was used to find this number. It should be passed as if it was returned from the Number Lookup call
     */
    vanityPattern:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'extensionId', Class: provisionphonenumbersextensioninfo.ProvisionPhoneNumbersExtensionInfo, isArray: false,isRequired: false},
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reservationId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'usageType', Class: ProvisionPhoneNumbersUsageType, isArray: false,isRequired: false},
            {property: 'vanityPattern', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ProvisionPhoneNumbers';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ProvisionPhoneNumbersUsageType {
    AdditionalCompanyNumber = <any>'AdditionalCompanyNumber',
    CompanyFaxNumber = <any>'CompanyFaxNumber',
    DirectNumber = <any>'DirectNumber',
    CompanyNumber = <any>'CompanyNumber'
}