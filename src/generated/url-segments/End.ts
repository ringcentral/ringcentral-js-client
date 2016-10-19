// This is Generated Source.
import UrlSection from "../../UrlSection";

export default class End extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("end", id , prv, service);
    }

    /**
        End Current Meeting
    */
    post(): Promise<void> {
        return this.getService().send({method: "post", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
            return res.response();
        });
    }
}
