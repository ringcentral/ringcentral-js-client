/// <reference path="../externals.d.ts" />

import model = require('./Model');

export class Client {

    protected _sdk;

    constructor(sdk) {

        this._sdk = sdk;

    }

    protected parseOptions(method:string,
                           url:string,
                           options:any,
                           operationParameters:IOperationParameter[]) { //:request.IAjaxOptions

        options = options || {};

        var request = {
            url: url,
            method: method,
            query: {},
            body: null
        };

        operationParameters.forEach((param)=> {

            if (param.required && !param.default && !options.hasOwnProperty(param.name)) {

                throw new Error('Required parameter "' + param.name + '" not found');

            }

            if (param.default && !options.hasOwnProperty(param.name)) {

                options[param.name] = param.default;

            }

            if (param.in == 'path') {

                request.url = request.url.replace('{' + param.name + '}', options[param.name]);

            }

            if (param.in == 'query' && options.hasOwnProperty(param.name)) {

                request.query[param.name] = options[param.name];

            }

            if (param.in == 'body') {

                request.body = options[param.name];

            }

        });

        return request;

    }

    protected send(apiOptions:any, Class:typeof model.Model):Promise<model.Model> {

        return this._sdk.platform()
            .send(apiOptions)
            .then((res:any)=> { //TODO Type of res

                //TODO Support multipart
                //TODO Think how to pass headers&stuff to outside
                if (Class && !res._isMultipart()) return new Class(this._sdk, res.json());

                return res;

            });

    }

}

export interface IOperationParameter {
    'name'?:string;
    'type'?:string;
    'items'?:{type?:string};
    'collectionFormat'?:string;
    'allowEmptyValue'?:boolean;
    'enum'?:string[];
    'in'?:string;
    'description'?:string;
    'required'?:boolean;
    'default'?:any;
    'notes'?:any;
    'paramType'?:any;
    'defaultValue'?:any;
    'allowMultiple'?:any;
    'consumes'?:any;
}