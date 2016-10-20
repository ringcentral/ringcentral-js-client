/**
 * UrlParts
 */
export default class UrlSection {
    private name: string;
    private value: string;
    private previous: UrlSection;
    private _service: any;
    constructor(name: string, value?: string, prv?: UrlSection, service?) {
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
        let sec: UrlSection = this;
        while (sec) {
            if (sec._service) {
                return sec._service;
            }
            if (sec.previous) {
                sec = sec.previous;
            }
        }
    }
}
