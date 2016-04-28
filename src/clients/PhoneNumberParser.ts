/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import phonenumberparser = require('../models/PhoneNumberParser');
import parsephonenumberrequest = require('../models/ParsePhoneNumberRequest');

export class PhoneNumberParser extends client.Client {

    /**
     * Get Phonedata
     *
     * <p style='font-style:italic;'>Since 1.0.12 (Release 6.4)</p>
     * <p>Returns configuration settings for phone number parser in a phonedata.xml file.</p>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    loadPhoneData(options?:{
    }):Promise<any> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/number-parser/phonedata.xml', options, loadPhoneDataOptions),
                         null);

    }

    /**
     * Parse Phone Number
     *
     * <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p>
     * <p>Returns one or more parsed and/or formatted phone numbers that are passed as a string.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    parsePhoneNumber(options?:{
        /** Internal identifier of a home country. The default value is ISO code (ISO 3166) of the user's home country or brand country, if the user is undefined */
        'homeCountry'?:string;
        /** The default value is 'False'. If 'True', the numbers that are closer to the home country are given higher priority */
        'nationalAsPriority'?:boolean;
        /** JSON body */
        'body':parsephonenumberrequest.ParsePhoneNumberRequest;
    }):Promise<phonenumberparser.PhoneNumberParser> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/number-parser/parse', options, parsePhoneNumberOptions),
                         phonenumberparser.PhoneNumberParser);

    }

}

/**
 * Definition of options for loadPhoneData operation
 */
export var loadPhoneDataOptions:client.IOperationParameter[] = [];

/**
 * Definition of options for parsePhoneNumber operation
 */
export var parsePhoneNumberOptions:client.IOperationParameter[] = [
    {
        "name": "homeCountry",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "nationalAsPriority",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "parsephonenumberrequest.ParsePhoneNumberRequest"
    }
];