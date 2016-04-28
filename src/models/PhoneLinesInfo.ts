/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import phonenumberinfo = require('./PhoneNumberInfo');

export class PhoneLinesInfo extends model.Model {

    /**
     * Type of phone line
     */
    lineType:PhoneLinesInfoLineType;

    /**
     * Phone number information
     */
    phoneInfo:phonenumberinfo.PhoneNumberInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'lineType', Class: PhoneLinesInfoLineType, isArray: false,isRequired: false},
            {property: 'phoneInfo', Class: phonenumberinfo.PhoneNumberInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'PhoneLinesInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum PhoneLinesInfoLineType {
    Standalone = <any>'Standalone',
    StandaloneFree = <any>'StandaloneFree',
    BlaPrimary = <any>'BlaPrimary',
    BlaSecondary = <any>'BlaSecondary'
}