// This is Generated Source.
import MeetingRequestResource from "../definitions/MeetingRequestResource";
import MeetingResponseResource from "../definitions/MeetingResponseResource";
import MeetingsResource from "../definitions/MeetingsResource";
import PathSegment from "../PathSegment";
import End from "./End";
import ServiceInfo from "./ServiceInfo";

export default class Meeting extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("meeting", id, prv, service);
    }

    /**
     *
     */
    end(id?: string) {
        return new End(this, id);
    }

    /**
     *
     */
    serviceInfo(id?: string) {
        return new ServiceInfo(this, id);
    }

    /**
     *  Returns a list of meetings for a particular extension. The list of meetings does not include meetings of 'Instant' type.
     */
    list(): Promise<MeetingsResource> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Returns a list of meetings for a particular extension. The list of meetings does not include meetings of 'Instant' type.
     *  return {ApiResponse}
     */
    listRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  Creates a new meeting.
     */
    post(body: MeetingRequestResource): Promise<any> {
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
     *  Creates a new meeting.
     *  return {ApiResponse}
     */
    postRaw(body: MeetingRequestResource): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Returns a particular meetings details by ID.
     */
    get(): Promise<MeetingResponseResource> {
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
     *  Returns a particular meetings details by ID.
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
     *  Modifies a particular meeting.
     */
    put(body: MeetingRequestResource): Promise<MeetingResponseResource> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Modifies a particular meeting.
     *  return {ApiResponse}
     */
    putRaw(body: MeetingRequestResource): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  Deletes a scheduled meeting.
     */
    delete(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  Deletes a scheduled meeting.
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }
}
