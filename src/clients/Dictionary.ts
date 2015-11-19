/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import getcountrylistresponse = require('../models/GetCountryListResponse');
import countryinfo = require('../models/CountryInfo');
import languageinfo = require('../models/LanguageInfo');
import getlocationlistresponse = require('../models/GetLocationListResponse');
import getstatelistresponse = require('../models/GetStateListResponse');
import getstateinforesponse = require('../models/GetStateInfoResponse');
import gettimezonelistresponse = require('../models/GetTimezoneListResponse');
import gettimezoneinforesponse = require('../models/GetTimezoneInfoResponse');

export class Dictionary extends client.Client {

    /**
     * Get Country List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all the countries available for calling.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    listCountries(options?:{
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'. */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default. */
        'perPage'?:number;
    }):Promise<getcountrylistresponse.GetCountryListResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/country', options, listCountriesOptions),
                         getcountrylistresponse.GetCountryListResponse);

    }

    /**
     * Get Country
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on the required country.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    loadCountry(options?:{
        /** Internal identifier of a country */
        'countryId':string;
    }):Promise<countryinfo.CountryInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/country/{countryId}', options, loadCountryOptions),
                         countryinfo.CountryInfo);

    }

    /**
     * Get Language List
     *
     * <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p>
     * <p>Returns the information about supported languages.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    listLanguages(options?:{
    }):Promise<any> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/language', options, listLanguagesOptions),
                         null);

    }

    /**
     * Get Language
     *
     * <p style='font-style:italic;'>Since 1.0.14 (Release 6.6)</p>
     * <p>Returns language by its respective ID.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    loadLanguage(options?:{
    }):Promise<languageinfo.LanguageInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/language/{languageId}', options, loadLanguageOptions),
                         languageinfo.LanguageInfo);

    }

    /**
     * Get Location List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all the available locations for the certain state.</p>
     * <h4>Usage Plan Group</h4>
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
    }):Promise<getlocationlistresponse.GetLocationListResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/location', options, listLocationsOptions),
                         getlocationlistresponse.GetLocationListResponse);

    }

    /**
     * Get State List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all the states for the certain country.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    listStates(options?:{
        /** Internal identifier of a country */
        'countryId'?:string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'. */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
        /** If 'True', the list of states with phone numbers available for buying is returned. The default value is 'False' */
        'withPhoneNumbers'?:boolean;
    }):Promise<getstatelistresponse.GetStateListResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/state', options, listStatesOptions),
                         getstatelistresponse.GetStateListResponse);

    }

    /**
     * Get State
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on the required state.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    loadState(options?:{
        /** Internal identifier of a state */
        'stateId':string;
    }):Promise<getstateinforesponse.GetStateInfoResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/state/{stateId}', options, loadStateOptions),
                         getstateinforesponse.GetStateInfoResponse);

    }

    /**
     * Get Timezone List
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns all available timezones.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    listTimezones(options?:{
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:string;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:string;
    }):Promise<gettimezonelistresponse.GetTimezoneListResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/timezone', options, listTimezonesOptions),
                         gettimezonelistresponse.GetTimezoneListResponse);

    }

    /**
     * Get Timezone
     *
     * <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p>
     * <p>Returns the information on the certain timezone.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    loadTimezone(options?:{
        /** Internal identifier of a timezone */
        'timezoneId':string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<gettimezoneinforesponse.GetTimezoneInfoResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/dictionary/timezone/{timezoneId}', options, loadTimezoneOptions),
                         gettimezoneinforesponse.GetTimezoneInfoResponse);

    }

}

/**
 * Definition of options for listCountries operation
 */
export var listCountriesOptions:client.IOperationParameter[] = [
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
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
export var loadLanguageOptions:client.IOperationParameter[] = [];

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
        "name": "stateId",
        "type": "string",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for listStates operation
 */
export var listStatesOptions:client.IOperationParameter[] = [
    {
        "name": "countryId",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
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
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    }
];

export enum IListLocationsOrderBy {
    Npa = <any>'Npa',
    City = <any>'City'
}