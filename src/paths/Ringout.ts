// This is Generated Source.
import RingOutInfo from "../definitions/RingOutInfo";
import RingOutRequestCountryInfo from "../definitions/RingOutRequestCountryInfo";
import RingOutRequestFrom from "../definitions/RingOutRequestFrom";
import RingOutRequestTo from "../definitions/RingOutRequestTo";
import PathSegment from "../PathSegment";

export default class Ringout extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("ringout", id, prv, service);
    }

    /**
     *  Initiate RingOut Call
     */
    post(body: PostBody): Promise<RingOutInfo> {
        return this._send("post", true, body, undefined).then((res) => {
            return res.json();
        });
    }

    /**
     *  Cancel RingOut Call
     */
    delete(): Promise<void> {
        return this._send("delete", true, undefined, undefined).then((res) => {
            return res.response();
        });
    }

    /**
     *  Get RingOut Call Status
     */
    get(): Promise<RingOutInfo> {
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.json();
        });
    }
}

export interface PostBody {

    /**
     * Phone number of the caller. This number corresponds to the 1st leg of the RingOut call. This number can be one of user's configured forwarding numbers or arbitrary number
     */
    from?: RingOutRequestFrom;

    /**
     * Phone number of the called party. This number corresponds to the 2nd leg of the RingOut call
     */
    to?: RingOutRequestTo;

    /**
     * The number which will be displayed to the called party
     */
    callerId?: RingOutRequestTo;

    /**
     * The audio prompt that the calling party hears when the call is connected
     */
    playPrompt?: boolean;

    /**
     * Optional. Dialing plan country data. If not specified, then extension home country is applied by default
     */
    country?: RingOutRequestCountryInfo;
}
