/**
 * UrlParts
 */
export default class PathSegment {
    private name;
    private value;
    private previous;
    private _service;
    constructor(name: string, value?: string, prv?: PathSegment, service?: any);
    toString(withValue?: boolean): string;
    getEndpoint(withValue?: boolean): string;
    protected getService(): any;
    protected _send({ method, ignoreId, body, query }: {
        method: any;
        ignoreId: any;
        body: any;
        query: any;
    }): Promise<any>;
}
