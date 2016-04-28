/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class CustomDataAttachmentInfo extends model.Model {

    /**
     * Link to custom data attachment
     */
    uri:string;

    /**
     * Type of custom data attachment, see also MIME Types
     */
    contentType:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'contentType', Class: null /* string */, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'CustomDataAttachmentInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}