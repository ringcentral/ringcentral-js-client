/// <reference path="../externals.d.ts" />

export class Model {

    protected _sdk;

    constructor(sdk, data?:any) {

        this._sdk = sdk;

        data = data || {};

        this.getPropertyMappings().forEach((mapping)=> {

            var Class = mapping.Class,
                prop = mapping.property;

            if (!data.hasOwnProperty(prop)) {
                if (mapping.isRequired) console.warn('Required property "' + prop + '" not defined');
                return;
            }

            var processProperty = (dataPart)=> {

                if (!Class || typeof Class !== 'function') { // primitives & enums

                    return dataPart;

                } else {

                    return new Class(this._sdk, dataPart);

                }

            };

            if (mapping.isArray) {

                this[prop] = data[prop].map(processProperty);

            } else {

                this[prop] = processProperty(data[prop]);

            }

        });

    }

    getPropertyMappings():ModelPropertyMapping[] {
        return [];
    }

    getClassName() {
        return 'Model';
    }

    getId(){
        return this['id'];
    }

}

export interface ModelPropertyMapping {
    property:string;
    Class?: typeof Model|any;
    isArray: boolean;
    isRequired: boolean;
}