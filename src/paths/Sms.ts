// This is Generated Source.
import CreateSmsMessage from "../definitions/CreateSmsMessage";
import GetMessageInfoResponse from "../definitions/GetMessageInfoResponse";
import PathSegment from "../PathSegment";

export default class Sms extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("sms", id, prv, service);
    }

    /**
     *  Creates and sends new SMS message. Sending SMS messages simultaneously to different recipients is limited up to 50 requests per minute; relevant for all client applications.
     */
    post(body: CreateSmsMessage): Promise<GetMessageInfoResponse> {
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
     *  Creates and sends new SMS message. Sending SMS messages simultaneously to different recipients is limited up to 50 requests per minute; relevant for all client applications.
     *  return {ApiResponse}
     */
    postRaw(body: CreateSmsMessage): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
