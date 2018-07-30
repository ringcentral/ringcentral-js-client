// This is Generated Source.
import MeetingsPresence from "../definitions/MeetingsPresence";
import PathSegment from "../PathSegment";

export default class Meetings extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("meetings", id, prv, service);
    }

    /**
     *  <p>Returns Zoom meetings presence status of an extension</p><h4>App Permission</h4><p>ReadPresence</p><h4>User Permission</h4><p>ReadPresenceStatus</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Returns Zoom meetings presence status of an extension</p><h4>App Permission</h4><p>ReadPresence</p><h4>User Permission</h4><p>ReadPresenceStatus</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Set Zoom meetings presence status of an extension</p><h4>App Permission</h4><p>ReadPresence</p><h4>User Permission</h4><p>ReadPresenceStatus</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Set Zoom meetings presence status of an extension</p><h4>App Permission</h4><p>ReadPresence</p><h4>User Permission</h4><p>ReadPresenceStatus</p><h4>Usage Plan Group</h4><p>Light</p>
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
