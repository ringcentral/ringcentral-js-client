/**
 * UrlParts
 */
export default class PathSegment {
    private _name: string;
    private _value: string;
    private _previous: PathSegment;
    private _service: any;
    constructor(name: string, value?: string, prv?: PathSegment, service?) {
        this._service = service;
        this._name = name;
        this._value = value || null;
        this._previous = prv;
    }

    toString(withValue = true): string {
        let str = "/" + this._name;
        if (withValue && this._value) {
            str += "/" + this._value;
        }
        return str;
    }

    getEndpoint(withValue = true): string {
        let end: string = "";
        if (this._previous) {
            end = this._previous.getEndpoint();
        }
        return end + this.toString(withValue);
    }

    protected _getService() {
        let sec: PathSegment = this;
        while (sec) {
            if (sec._service) {
                return sec._service;
            }
            if (sec._previous) {
                sec = sec._previous;
            }
        }
    }

    protected _send({method, ignoreId, body, query}): Promise<any> {
        return this._getService().send({
            body,
            method,
            query,
            url: this.getEndpoint(ignoreId),
        });
    }
}
