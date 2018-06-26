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
     *  
     */
    list(): Promise<MeetingsResource> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
            throttlingGroup: "Light",
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  
     *  return {ApiResponse}
     */
    listRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
            throttlingGroup: "Light",
        });
    }

    /**
     *  
     */
    post(body: MeetingRequestResource): Promise<MeetingResponseResource> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
            throttlingGroup: "Medium",
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  
     *  return {ApiResponse}
     */
    postRaw(body: MeetingRequestResource): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
            throttlingGroup: "Medium",
        });
    }

    /**
     *  
     */
    get(): Promise<MeetingResponseResource> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
            throttlingGroup: "Light",
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
            throttlingGroup: "Light",
        });
    }

    /**
     *  
     */
    put(body: MeetingRequestResource): Promise<MeetingResponseResource> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
            throttlingGroup: "Medium",
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  
     *  return {ApiResponse}
     */
    putRaw(body: MeetingRequestResource): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
            throttlingGroup: "Medium",
        });
    }

    /**
     *  
     */
    delete(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
            throttlingGroup: "Medium",
        });
    }

    /**
     *  
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
            throttlingGroup: "Medium",
        });
    }
}
