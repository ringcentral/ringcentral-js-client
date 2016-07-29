// This is Generated Source.
import UrlSection from "../../UrlSection";
{{#each subSections}}
import {{this.name}} from "./{{this.name}}";
{{/each}}
{{#if modelType}}
import {{modelType}} from "../{{modelType}}";
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

    /*
    {{getMethod.comment}}
    */
    get(): Promise<{{modelType}}> {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return new {{modelType}}(res.json());
        });
    }
    {{/if}}
    {{#if listMethod}}

    list(options?: {
        //page?: number, /** Indicates the page number to retrieve. Only positive number value */
        //perPage?: number, /** Indicates the page size (number of items). If not specified, the val */
    }): Promise<PagingResult<ModelType>> {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult(res.json());
        });
    }
    {{/if}}
}