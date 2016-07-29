// This is Generated Source.
import UrlSection from "../../UrlSection";
{{#each subSections}}
import {{this.name}} from "./{{this.name}}";
{{/each}}
{{#if modelType}}
import {{modelType}} from "../{{modelType}}";
{{/if}}
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

    /*
    {{listMethod.comment}}
    // FIXME: Assume that list operation only allow query parameters
    */
    list(options?: {
        {{#each listMethod.parameters}}
        {{@key}}?: {{this.type}}, /* {{this.comment}} */
        {{/each}}
    }): Promise<PagingResult<{{modelType}}>> {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult<{{modelType}}>(res.json(), {{modelType}});
        });
    }
    {{/if}}
}