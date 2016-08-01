class {{name}} {
    constructor(data) {
        // TODO: Create object of class recursively.
        {{#each properties}}
        this.{{@key}} = data["{{@key}}"];
        {{/each}}
    }
    {{#each properties}}

    /*
     {{this.comment}}
     */
     {{@key}}: {{this.type}};
    {{/each}}
}