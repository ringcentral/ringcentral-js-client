/**
 * UrlParts
 */
export default class UrlSection {
    private name: string;
    private value: string;
    private previous: UrlSection;
    constructor(name, value?, prv?) {
        // this.sdk = sdk;
        this.name = name;
        this.value = value || null;
        this.previous = prv;
    }

    toString(): string {
        let str = "/" + this.name;
        if (this.value) {
            str += "/" + this.value;
        }
        return str;
    }

    getEndpoint(): string {
        let end: string = "";
        if (this.previous) {
            end = this.previous.getEndpoint();
        }
        return end + this;
    }
}