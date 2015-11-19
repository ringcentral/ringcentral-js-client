/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class MakeRingOutCallerInfoRequest extends model.Model {

    /**
     * Phone number of a party. Usually it is a plain number including country and area code like 18661234567. But sometimes it could be returned from database with some formatting applied, for example (866)123-4567. This property is filled in all cases where parties communicate by means of global phone numbers, for example when calling to direct numbers or sending/receiving SMS
     */
    phoneNumber:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MakeRingOutCallerInfoRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}