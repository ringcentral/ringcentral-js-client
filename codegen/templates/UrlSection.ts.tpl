// This is Generated Source.
import UrlSection from "../../UrlSection";
{{#each subSections}}
import {{this.name}} from "./{{this.name}}";
{{/each}}

export default class {{name}} extends UrlSection {
    constructor(prv: UrlSection, id?: string) {
        super("{{urlName}}", id {{#if defaultValue}} || "{{defaultValue}}" {{/if}}, prv);
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
}