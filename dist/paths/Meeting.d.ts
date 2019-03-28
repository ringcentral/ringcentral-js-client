import MeetingRequestResource from "../definitions/MeetingRequestResource";
import MeetingResponseResource from "../definitions/MeetingResponseResource";
import MeetingsResource from "../definitions/MeetingsResource";
import PathSegment from "../PathSegment";
import End from "./End";
import ServiceInfo from "./ServiceInfo";
export default class Meeting extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    end(id?: string): End;
    /**
     *
     */
    serviceInfo(id?: string): ServiceInfo;
    /**
     *
     */
    list(): Promise<MeetingsResource>;
    /**
     *
     *  return {ApiResponse}
     */
    listRaw(): Promise<any>;
    /**
     *
     */
    post(body: MeetingRequestResource): Promise<MeetingResponseResource>;
    /**
     *
     *  return {ApiResponse}
     */
    postRaw(body: MeetingRequestResource): Promise<any>;
    /**
     *
     */
    get(): Promise<MeetingResponseResource>;
    /**
     *
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
    /**
     *
     */
    put(body: MeetingRequestResource): Promise<MeetingResponseResource>;
    /**
     *
     *  return {ApiResponse}
     */
    putRaw(body: MeetingRequestResource): Promise<any>;
    /**
     *
     */
    delete(): Promise<void>;
    /**
     *
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any>;
}
