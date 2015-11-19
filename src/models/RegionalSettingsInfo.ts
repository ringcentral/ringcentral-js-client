/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import countryinfo = require('./CountryInfo');
import timezoneinfo = require('./TimezoneInfo');
import languageinfo = require('./LanguageInfo');
import greetinglanguageinfo = require('./GreetingLanguageInfo');
import formattinglocaleinfo = require('./FormattingLocaleInfo');

export class RegionalSettingsInfo extends model.Model {

    /**
     * Extension country information
     */
    homeCountry:countryinfo.CountryInfo;

    /**
     * Extension timezone information
     */
    timezone:timezoneinfo.TimezoneInfo;

    /**
     * User interface language data
     */
    language:languageinfo.LanguageInfo;

    /**
     * Information on language used for telephony greetings
     */
    greetingLanguage:greetinglanguageinfo.GreetingLanguageInfo;

    /**
     * Formatting language preferences for numbers, dates and currencies
     */
    formattingLocale:formattinglocaleinfo.FormattingLocaleInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'homeCountry', Class: countryinfo.CountryInfo, isArray: false,isRequired: false},
            {property: 'timezone', Class: timezoneinfo.TimezoneInfo, isArray: false,isRequired: false},
            {property: 'language', Class: languageinfo.LanguageInfo, isArray: false,isRequired: false},
            {property: 'greetingLanguage', Class: greetinglanguageinfo.GreetingLanguageInfo, isArray: false,isRequired: false},
            {property: 'formattingLocale', Class: formattinglocaleinfo.FormattingLocaleInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'RegionalSettingsInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}