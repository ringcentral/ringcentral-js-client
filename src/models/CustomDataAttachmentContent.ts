/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class CustomDataAttachmentContent extends model.Model {

    /**
     * Type of custom data attachment, see also MIME Types
     */
    Content-Type:MIME type;

    /**
     * Filename and binary data. Maximum attachment size is limited to 5Mb
     */
    Content-Disposition:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'Content-Type', Class: MIME type, isArray: false,isRequired: false},
            {property: 'Content-Disposition', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CustomDataAttachmentContent';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}