interface {{name}} {
    {{#each properties}}

    /*
     {{this.comment}}
     */
     {{@key}}: {{this.type}};
    {{/each}}
}