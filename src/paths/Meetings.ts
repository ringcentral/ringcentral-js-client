// This is Generated Source.
import MeetingsPresence from "../definitions/MeetingsPresence";
import PathSegment from "../PathSegment";

export default class Meetings extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("meetings", id, prv, service);
    }

    /**
     *  Returns Zoom meetings presence status of an extension
     */
    get(): Promise<MeetingsPresence> {
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
     *  Returns Zoom meetings presence status of an extension
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

    /**
     *  Set Zoom meetings presence status of an extension
     */
    post(body: MeetingsPresence): Promise<MeetingsPresence> {
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
     *  Set Zoom meetings presence status of an extension
     *  return {ApiResponse}
     */
    postRaw(body: MeetingsPresence): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
