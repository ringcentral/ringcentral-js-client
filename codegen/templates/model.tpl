{{#each imports}}
import { {{@key}} } from "./{{@key}}";
{{/each}}

export interface {{name}} {
    {{#each properties}}

    /**
     * {{this.comment}}
     */
    {{@key}}?: {{this.type}};
    {{/each}}
}
{{#each enums}}

export type {{this.name}} = {{#each this.strings}}{{#if @key}} | {{/if}}"{{this}}"{{/each}};
{{/each}}