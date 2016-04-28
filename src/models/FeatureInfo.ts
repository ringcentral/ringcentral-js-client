/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import optioninfo = require('./OptionInfo');

export class FeatureInfo extends model.Model {

    /**
     * VoIP call
     */
    voip:optioninfo.OptionInfo;

    /**
     * RingOut call
     */
    ringOut:optioninfo.OptionInfo;

    /**
     * Outgoing SMS
     */
    sms:optioninfo.OptionInfo;

    /**
     * Outgoing Fax
     */
    faxOut:optioninfo.OptionInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'voip', Class: optioninfo.OptionInfo, isArray: false,isRequired: false},
            {property: 'ringOut', Class: optioninfo.OptionInfo, isArray: false,isRequired: false},
            {property: 'sms', Class: optioninfo.OptionInfo, isArray: false,isRequired: false},
            {property: 'faxOut', Class: optioninfo.OptionInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'FeatureInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}