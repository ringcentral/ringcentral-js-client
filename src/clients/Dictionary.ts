/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import countrylist = require('../models/CountryList');
import dictionarycountryinfo = require('../models/DictionaryCountryInfo');
import languagelist = require('../models/LanguageList');
import languageinfo = require('../models/LanguageInfo');
import dictionarylocationlist = require('../models/DictionaryLocationList');
import dictionarysecretquestionlist = require('../models/DictionarySecretQuestionList');
import secretquestioninfo = require('../models/SecretQuestionInfo');
import dictionaryshippingoptions = require('../models/DictionaryShippingOptions');
import dictionarystatelist = require('../models/DictionaryStateList');
import dictionarystateinfo = require('../models/DictionaryStateInfo');
import dictionarytimezonelist = require('../models/DictionaryTimezoneList');
import dictionarytimezoneinfo = require('../models/DictionaryTimezoneInfo');

export class Dictionary extends client.Client {

    /**
     * Get Country List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all the countries available for calling.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listCountries(options?:{
        /** Specifies whether login with the phone numbers of this country is enabled or not */
        'loginAllowed'?:boolean;
        /** Specifies if RingCentral sells phone numbers of this country */
        'numberSelling'?:boolean;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<countrylist.CountryList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/country', options, listCountriesOptions),
                         countrylist.CountryList);

    }

    /**
     * Get Country
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on the required country.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadCountry(options?:{
        /** Internal identifier of a country */
        'countryId':string;
    }):Promise<dictionarycountryinfo.DictionaryCountryInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/country/{countryId}', options, loadCountryOptions),
                         dictionarycountryinfo.DictionaryCountryInfo);

    }

    /**
     * Get Language List
     *
     * <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p>
     * <p>Returns the information about supported languages.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listLanguages(options?:{
    }):Promise<languagelist.LanguageList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/language', options, listLanguagesOptions),
                         languagelist.LanguageList);

    }

    /**
     * Get Language
     *
     * <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p>
     * <p>Returns language by its respective ID.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadLanguage(options?:{
        /** Internal identifier of a language */
        'languageId':string;
    }):Promise<languageinfo.LanguageInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/language/{languageId}', options, loadLanguageOptions),
                         languageinfo.LanguageInfo);

    }

    /**
     * Get Location List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all the available locations for the certain state.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listLocations(options?:{
        /** Sorts results by the specified property. The default value is 'City', collection: multi */
        'orderBy'?:IListLocationsOrderBy;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'. */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default. */
        'perPage'?:number;
        /** Internal identifier of a state */
        'stateId'?:string;
        /** Specifies if nxx codes are returned */
        'withNxx'?:boolean;
    }):Promise<dictionarylocationlist.DictionaryLocationList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/location', options, listLocationsOptions),
                         dictionarylocationlist.DictionaryLocationList);

    }

    /**
     * Get Secret Question List
     *
     * <p style='font-style:italic;'>Since 1.0.20 (Release 7.4)</p>
     * <p>Returns the list of secret questions for a specific language.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listSecretQuestions(options?:{
    }):Promise<dictionarysecretquestionlist.DictionarySecretQuestionList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/secret-question', options, listSecretQuestionsOptions),
                         dictionarysecretquestionlist.DictionarySecretQuestionList);

    }

    /**
     * Get Secret Question
     *
     * <p style='font-style:italic;'>Since 1.0.20 (Release 7.4)</p>
     * <p>Returns a particular secret question in specific language by question ID.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadSecretQuestion(options?:{
        /** Internal identifier of a question */
        'questionId':string;
    }):Promise<secretquestioninfo.SecretQuestionInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/secret-question/questionId', options, loadSecretQuestionOptions),
                         secretquestioninfo.SecretQuestionInfo);

    }

    /**
     * Get Shipping Options
     *
     * <p style='font-style:italic;'>Since 1.0.16 (Release 7.1)</p>
     * <p>Returns the list of device shipping options with their prices, according to brand, tier, number of ordered devices.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listShippingOptions(options?:{
    }):Promise<dictionaryshippingoptions.DictionaryShippingOptions> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/shipping-options', options, listShippingOptionsOptions),
                         dictionaryshippingoptions.DictionaryShippingOptions);

    }

    /**
     * Get State List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all the states for a certain country.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadlistStates(options?:{
        /** Internal identifier of a country */
        'countryId'?:number;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'. */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
        /** If 'True', the list of states with phone numbers available for buying is returned. The default value is 'False' */
        'withPhoneNumbers'?:boolean;
    }):Promise<dictionarystatelist.DictionaryStateList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/state', options, loadlistStatesOptions),
                         dictionarystatelist.DictionaryStateList);

    }

    /**
     * Get State
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on the required state.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadState(options?:{
        /** Internal identifier of a state */
        'stateId':string;
    }):Promise<dictionarystateinfo.DictionaryStateInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/state/{stateId}', options, loadStateOptions),
                         dictionarystateinfo.DictionaryStateInfo);

    }

    /**
     * Get Timezone List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all available timezones.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listTimezones(options?:{
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:string;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:string;
    }):Promise<dictionarytimezonelist.DictionaryTimezoneList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/timezone', options, listTimezonesOptions),
                         dictionarytimezonelist.DictionaryTimezoneList);

    }

    /**
     * Get Timezone
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on a certain timezone.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadTimezone(options?:{
        /** Internal identifier of a timezone */
        'timezoneId':string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<dictionarytimezoneinfo.DictionaryTimezoneInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/timezone/{timezoneId}', options, loadTimezoneOptions),
                         dictionarytimezoneinfo.DictionaryTimezoneInfo);

    }

}

/**
 * Definition of options for listCountries operation
 */
export var listCountriesOptions:client.IOperationParameter[] = [
    {
        "name": "loginAllowed",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "numberSelling",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadCountry operation
 */
export var loadCountryOptions:client.IOperationParameter[] = [
    {
        "name": "countryId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for listLanguages operation
 */
export var listLanguagesOptions:client.IOperationParameter[] = [];

/**
 * Definition of options for loadLanguage operation
 */
export var loadLanguageOptions:client.IOperationParameter[] = [
    {
        "name": "languageId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for listLocations operation
 */
export var listLocationsOptions:client.IOperationParameter[] = [
    {
        "name": "orderBy",
        "type": "IListLocationsOrderBy",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Npa",
            "City"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "stateId",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "withNxx",
        "type": "boolean",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for listSecretQuestions operation
 */
export var listSecretQuestionsOptions:client.IOperationParameter[] = [];

/**
 * Definition of options for loadSecretQuestion operation
 */
export var loadSecretQuestionOptions:client.IOperationParameter[] = [
    {
        "name": "questionId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for listShippingOptions operation
 */
export var listShippingOptionsOptions:client.IOperationParameter[] = [];

/**
 * Definition of options for loadlistStates operation
 */
export var loadlistStatesOptions:client.IOperationParameter[] = [
    {
        "name": "countryId",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "withPhoneNumbers",
        "type": "boolean",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadState operation
 */
export var loadStateOptions:client.IOperationParameter[] = [
    {
        "name": "stateId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for listTimezones operation
 */
export var listTimezonesOptions:client.IOperationParameter[] = [
    {
        "name": "page",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "string",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadTimezone operation
 */
export var loadTimezoneOptions:client.IOperationParameter[] = [
    {
        "name": "timezoneId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "page",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    }
];

export enum IListLocationsOrderBy {
    Npa = <any>'Npa',
    City = <any>'City'
}