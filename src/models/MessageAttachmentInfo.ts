/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class MessageAttachmentInfo extends model.Model {

    /**
     * Internal identifier of a message attachment
     */
    id:string;

    /**
     * Canonical URI of a message attachment
     */
    uri:string;

    /**
     * Type of message attachment
     */
    type:MessageAttachmentInfoType;

    /**
     * MIME type for a given attachment, for instance 'audio/wav'
     */
    contentType:string;

    /**
     * Voicemail only Duration of the voicemail in seconds
     */
    vmDuration:number;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: MessageAttachmentInfoType, isArray: false,isRequired: false},
            {property: 'contentType', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'vmDuration', Class: null /* number */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MessageAttachmentInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum MessageAttachmentInfoType {
    AutoRecording = <any>'AutoRecording',
    AutoTranscription = <any>'AutoTranscription',
    Text = <any>'Text',
    SourceDocument = <any>'SourceDocument',
    RenderedDocument = <any>'RenderedDocument'
}