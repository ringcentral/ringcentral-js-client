/**
 * UrlParts
 */
export default class PathSegment {
    private name: string;
    private value: string;
    private previous: PathSegment;
    private _service: any;
    constructor(name: string, value?: string, prv?: PathSegment, service?) {
        this._service = service;
        this.name = name;
        this.value = value || null;
        this.previous = prv;
    }

    toString(withValue = true): string {
        let str = "/" + this.name;
        if (withValue && this.value) {
            str += "/" + this.value;
        }
        return str;
    }

    getEndpoint(withValue = true): string {
        let end: string = "";
        if (this.previous) {
            end = this.previous.getEndpoint();
        }
        return end + this.toString(withValue);
    }

    protected getService() {
        let sec: PathSegment = this;
        while (sec) {
            if (sec._service) {
                return sec._service;
            }
            if (sec.previous) {
                sec = sec.previous;
            }
        }
    }

    protected _send({method, ignoreId, body, query}): Promise<any> {
        return this.getService().send({
            body,
            method,
            query,
            url: this.getEndpoint(ignoreId),
        });
    }
}
