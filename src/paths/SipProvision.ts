// This is Generated Source.
import CreateSipRegistrationRequest from "../definitions/CreateSipRegistrationRequest";
import CreateSipRegistrationResponse from "../definitions/CreateSipRegistrationResponse";
import PathSegment from "../PathSegment";

export default class SipProvision extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("sip-provision", id, prv, service);
    }

    /**
     *  Creates SIP registration of a device/application (WebPhone, Mobile, softphone)
     */
    post(body: CreateSipRegistrationRequest): Promise<CreateSipRegistrationResponse> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Creates SIP registration of a device/application (WebPhone, Mobile, softphone)
     *  return {ApiResponse}
     */
    postRaw(body: CreateSipRegistrationRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
