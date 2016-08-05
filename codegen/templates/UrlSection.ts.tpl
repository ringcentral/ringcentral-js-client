/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
{{#each subSections}}
import {{this.name}} from "./{{this.name}}";
{{/each}}
{{#each modelTypes}}
import {{@key}} from "../{{@key}}";
{{/each}}
{{#if listMethod}}
import PagingResult from "../../PagingResult";
{{/if}}

export default class {{name}} extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("{{urlName}}", id {{#if defaultValue}} || "{{defaultValue}}" {{/if}}, prv, service);
    }
    {{#each subSections}}

    {{#if this.valueDesc}}
    /**
     * {{this.valueDesc}}
     */
    {{/if}}
    {{this.methodName}}(id?: string) {
        return new {{this.name}}(this, id);
    }
    {{/each}}
    {{#if getMethod}}

    /**
    {{getMethod.comment}}
    */
    get(): Promise<{{modelType}}> {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return new {{modelType}}(res.json());
        });
    }
    {{/if}}
    {{#if listMethod}}

    /**
    {{listMethod.comment}}
    // FIXME: Assume that list operation only allow query parameters
    */
    list(options?: {
        {{#each listMethod.parameters}}
        /** {{this.comment}} */
        {{@key}}?: {{this.type}};
        {{/each}}
    }): Promise<PagingResult<{{modelType}}>> {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult<{{modelType}}>(res.json(), {{modelType}});
        });
    }
    {{/if}}
    {{#if postMethod}}

    /**
        {{postMethod.comment}}
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    post(body: {{postMethod.bodyParams}},
    query?: {{postMethod.queryParams}}): Promise<{{postMethod.resType}}> {
        return this.getService().post(this.getEndpoint(false), body{{#if postMethod.isExternalResType}}.json(){{/if}}, query).then(function (res) {
            return new {{postMethod.resType}}(res{{#if postMethod.isExternalResType}}.json(){{/if}});
        });
    }
    {{/if}}
    {{#if putMethod}}

    /**
        {{putMethod.comment}}
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    put(body: {{putMethod.bodyParams}},
    query?: {{putMethod.queryParams}}): Promise<{{putMethod.resType}}> {
        return this.getService().put(this.getEndpoint(), body{{#if putMethod.isExternalResType}}.json(){{/if}}, query).then(function (res) {
            return new {{putMethod.resType}}(res{{#if putMethod.isExternalResType}}.json(){{/if}});
        });
    }
    {{/if}}
    {{#if deleteMethod}}

    /** 
        {{deleteMethod.comment}}
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    delete(
    query?: {{deleteMethod.queryParams}}): Promise<void> {
        return this.getService().delete(this.getEndpoint(), query);
    }
    {{/if}}
}
{{#each innerTypes}}

export {{{this}}}
{{/each}}