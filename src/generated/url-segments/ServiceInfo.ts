// This is Generated Source.
import UrlSection from "../../UrlSection";
import {MeetingServiceInfo} from "../MeetingServiceInfo";

export default class ServiceInfo extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("service-info", id , prv, service);
    }

    /**
        Get Meeting Service Info
    */
    get(): Promise<MeetingServiceInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: null, body: null }).then(function (res) {
            return res.json();
        });
    }
}
