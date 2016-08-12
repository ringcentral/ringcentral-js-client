/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
{{#each subSections}}
import {{this.name}} from "./{{this.name}}";
{{/each}}
{{#each modelTypes}}
import { {{@key}} } from "../{{@key}}";
{{/each}}
{{#if listMethod}}
import PagingResult from "../../PagingResult";
{{/if}}
{{#each nodeImports}}
import * as {{this}} from "{{@key}}";
{{/each}}

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
            return res.{{#if getReturnBinary}}response{{else}}json{{/if}}();
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
        {{@key}}?: {{{this.type}}};
        {{/each}}
    }): Promise<PagingResult<{{modelType}}>> {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult<{{modelType}}>(res.json());
        });
    }
    {{/if}}
    {{#if postMethod}}

    /**
        {{postMethod.comment}}
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    post(body: {{{postMethod.bodyParams}}},
    query?: {{postMethod.queryParams}}): Promise<{{postMethod.resType}}> {
        return this.getService().post(this.getEndpoint(false), body, query).then(function (res) {
            return res.json();
        });
    }
    {{/if}}
    {{#if putMethod}}

    /**
        {{putMethod.comment}}
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    {{#if putMethod.body}}
    {{{putMethod.body}}}
    {{else}}
    put(body: {{{putMethod.bodyParams}}},
    query?: {{putMethod.queryParams}}): Promise<{{putMethod.resType}}> {
        return this.getService().put(this.getEndpoint(), body, query).then(function (res) {
            return res.json();
        });
    }
    {{/if}}
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

export interface {{this.name}} {
    {{#each this.properties}}

    /**
     * {{this.comment}}
     */
    {{@key}}: {{this.type}};
    {{/each}}
}
{{#each this.enums}}

export type {{this.name}} = {{#each this.strings}}{{#if @key}} | {{/if}}"{{this}}"{{/each}};
{{/each}}
{{/each}}