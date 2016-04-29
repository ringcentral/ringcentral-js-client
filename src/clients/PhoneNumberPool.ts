/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import phonenumbers = require('../models/PhoneNumbers');
import phonenumberreserve = require('../models/PhoneNumberReserve');
import phonenumberreserverequest = require('../models/PhoneNumberReserveRequest');

export class PhoneNumberPool extends client.Client {

    /**
     * Get Numbers
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the required numbers filtered by criteria.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>NumberLookup</td>
     *             <td>Looking-up and reserving available phone number</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    lookupPhoneNumbers(options?:{
        /** Area code of the location */
        'areaCode'?:number;
        /** Two-letter country code, complying with the ISO standard */
        'countryCode'?:string;
        /** Internal identifier of a country; '1'- the US; '39' - Canada; '224' - the UK. The default value is '1' */
        'countryId'?:string;
        /** A string of digits (one and more) that should not appear among the last four digits (line part) of the phone numbers that will be returned. It is possible to specify several exclude parameters. If specified, it is taken into account in all returned phone numbers both in the phone numbers satisfying to parameters of lookup and in alternative phone numbers (in case when extendedSearch is specified) */
        'exclude'?:string;
        /** If the value is 'False', then the returned numbers exactly correspond to the specified NXX, NPA and LINE or countryCode, areaCode and numberPattern parameters. If the value is 'True', then the resulting numbers are ranked and returned with the rank attribute values (1-10). The default value is 'False' */
        'extendedSearch'?:boolean;
        /** LINE pattern for vanity or wildcard search. Digits, Latin characters and asterisks are allowed (usually 4 characters) */
        'line'?:string;
        /** Phone number pattern (for wildcard or vanity search). For NANP countries (US, Canada) is concatenation of nxx (the first three digits) and line. If the first three characters are specified as not digits (e.g. 5** or CAT) then parameter extendedSearch will be ignored. */
        'numberPattern'?:string;
        /** NXX pattern for vanity or wildcard search. Digits, Latin characters and asterisks are allowed (usually 3 characters) */
        'nxx'?:string;
        /** Area code (mandatory). For example, 800, 844, 855, 866, 877, 888 for North America; and 647 for Canada */
        'npa'?:string;
        /** Payment type. Default is 'Local' (it should correlate with the npa provided), collection: multi */
        'paymentType'?:ILookupPhoneNumbersPaymentType;
        /** Indicates the page size (number of items). If not specified, the value is '10' by default */
        'perPage'?:number;
        /** Specifies if SMS activation is available for the number. If specified, it is taken into account in all returned phone numbers both in the phone numbers satisfying to parameters of lookup and in alternative phone numbers (in case when extendedSearch is specified). If not specified, the value is null. */
        'smsEnabled'?:boolean;
    }):Promise<phonenumbers.PhoneNumbers> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/number-pool/lookup', options, lookupPhoneNumbersOptions),
                         phonenumbers.PhoneNumbers);

    }

    /**
     * Reserve/ Un-reserve Numbers
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Long-term phone number reservation ensures that up to a certain datetime the number is not available for any simultaneous look up and reservation. Reservation of main phone number is mandatory for account creation and phone number provisioning since both
     *     calls require phone number reservation IDs. Client may specify the exact desired reservation expiration date/time. However the server enforces certain rules on the allowed reservation period, and the response contains the actual value applied. Instead
     *     the exact date/time the client may also specify the string values: 'Min' or 'Max'. The same API endpoint is used to reserve and un-reserve already reserved numbers.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>NumberLookup</td>
     *             <td>Looking-up and reserving available phone number</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    reservePhoneNumbers(options?:{
        /** JSON body */
        'body':phonenumberreserverequest.PhoneNumberReserveRequest;
    }):Promise<phonenumberreserve.PhoneNumberReserve> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/number-pool/reserve', options, reservePhoneNumbersOptions),
                         phonenumberreserve.PhoneNumberReserve);

    }

}

/**
 * Definition of options for lookupPhoneNumbers operation
 */
export var lookupPhoneNumbersOptions:client.IOperationParameter[] = [
    {
        "name": "areaCode",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "countryCode",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "countryId",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "exclude",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "extendedSearch",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "line",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "numberPattern",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "nxx",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "npa",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "paymentType",
        "type": "ILookupPhoneNumbersPaymentType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "TollFree",
            "Local"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "smsEnabled",
        "type": "boolean",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for reservePhoneNumbers operation
 */
export var reservePhoneNumbersOptions:client.IOperationParameter[] = [
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "phonenumberreserverequest.PhoneNumberReserveRequest"
    }
];

export enum ILookupPhoneNumbersPaymentType {
    TollFree = <any>'TollFree',
    Local = <any>'Local'
}