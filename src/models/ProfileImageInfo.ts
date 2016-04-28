/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ProfileImageInfo extends model.Model {

    /**
     * Link to a profile image. If an image is not uploaded for an extension, only uri is returned
     */
    uri:string;

    /**
     * Identifier of an image
     */
    etag:string;

    /**
     * The datetime when an image was last updated in ISO 8601 format, for example 2016-03-10T18:07:52.534Z
     */
    lastModified:string;

    /**
     * The type of an image
     */
    contentType:string;

    /**
     * List of URIs to profile images in different dimensions
     */
    scales:string[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'etag', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'lastModified', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'contentType', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'scales', Class: null /* string[] */, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'ProfileImageInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}