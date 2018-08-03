// This is Generated Source.
import CreateInternalTextMessageRequest from "../definitions/CreateInternalTextMessageRequest";
import GetMessageInfoResponse from "../definitions/GetMessageInfoResponse";
import PathSegment from "../PathSegment";

export default class CompanyPager extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("company-pager", id, prv, service);
    }

    /**
     *  Creates and sends an internal text message.
     */
    post(body: CreateInternalTextMessageRequest): Promise<GetMessageInfoResponse> {
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
     *  Creates and sends an internal text message.
     *  return {ApiResponse}
     */
    postRaw(body: CreateInternalTextMessageRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
