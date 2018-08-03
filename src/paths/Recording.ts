// This is Generated Source.
import GetCallRecordingResponse from "../definitions/GetCallRecordingResponse";
import PathSegment from "../PathSegment";
import Content from "./Content";

export default class Recording extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("recording", id, prv, service);
    }

    /**
     * Internal identifier of a message attachment
     */
    content(id?: string) {
        return new Content(this, id);
    }

    /**
     *  Returns call recording metadata by ID.
     */
    get(): Promise<GetCallRecordingResponse> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Returns call recording metadata by ID.
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }
}
