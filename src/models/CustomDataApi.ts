/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import customdataattachmentinfo = require('./CustomDataAttachmentInfo');

export class CustomDataApi extends model.Model {

    /**
     * Custom data access key
     */
    id:string;

    /**
     * Link to the custom data
     */
    uri:string;

    /**
     * Description of custom data
     */
    value:string;

    /**
     * Time of the last change in custom data
     */
    lastModifiedTime:string;

    /**
     * Attachment data: link and type
     */
    attachment:customdataattachmentinfo.CustomDataAttachmentInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'value', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'lastModifiedTime', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'attachment', Class: customdataattachmentinfo.CustomDataAttachmentInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CustomDataApi';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}