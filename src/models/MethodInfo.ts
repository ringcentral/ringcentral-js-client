/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class MethodInfo extends model.Model {

    /**
     * Method name, corresponding to the identifier
     */
    name:MethodInfoName;

    /**
     * Method identifier. The default value is  1  (Ground)
     */
    id:MethodInfoId;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'name', Class: MethodInfoName, isArray: false,isRequired: false},
            {property: 'id', Class: MethodInfoId, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MethodInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum MethodInfoName {
    Ground = <any>'Ground',
    '2Day' = <any>'2 Day',
    Overnight = <any>'Overnight'
}

export enum MethodInfoId {
    'string;1' = <any>'string; 1',
    '2' = <any>'2',
    '3' = <any>'3'
}