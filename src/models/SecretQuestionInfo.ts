/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class SecretQuestionInfo extends model.Model {

    /**
     * Internal identifier of a question
     */
    id:string;

    /**
     * Internal identifier of a question type
     */
    questionType:number;

    /**
     * Internal identifier of a question language
     */
    languageId:string;

    /**
     * Text of a secret question shown to the end user
     */
    questionText:string;

    /**
     * Specifies if the question is used during signup
     */
    showInSignUp:boolean;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'questionType', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'languageId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'questionText', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'showInSignUp', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'SecretQuestionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}