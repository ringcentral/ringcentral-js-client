// This is Generated Source.
import UrlSection from "../../UrlSection";
import {DeviceInfo} from "../DeviceInfo";
import PagingResult from "../../PagingResult";

export default class Device extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("device", id , prv, service);
    }

    /**
        Get Account Device List
    */
    list(): Promise<PagingResult<DeviceInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(false), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Device by ID
    */
    get(): Promise<DeviceInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }
}
