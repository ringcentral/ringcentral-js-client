/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
import Content from "./Content";

export default class Recording extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("recording", id , prv, service);
    }

    /**
     * Internal identifier of a message attachment
     */
    content(id?: string) {
        return new Content(this, id);
    }

    /**
        Get Call Recording Metadata
    */
    get(): Promise<GetResponse> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
            return res.json();
        });
    }
}

export interface GetResponse {

    /**
     * Internal identifier of the call recording
     */
    id?: number;

    /**
     * Link to the call recording binary content
     */
    contentUri?: string;

    /**
     * Call recording file format. Supported format is audio/x-wav
     */
    contentType?: string;

    /**
     * Recorded call duration
     */
    duration?: number;
}
