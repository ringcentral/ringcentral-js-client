// This is Generated Source.
import UrlSection from "../../UrlSection";
import {PresenceInfo} from "../PresenceInfo";

export default class Presence extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("presence", id , prv, service);
    }

    /**
        Get Extension Presence
    */
    get(): Promise<PresenceInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }
}
