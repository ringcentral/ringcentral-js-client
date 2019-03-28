import MeetingServiceInfoResource from "../definitions/MeetingServiceInfoResource";
import PathSegment from "../PathSegment";
export default class ServiceInfo extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    get(): Promise<MeetingServiceInfoResource>;
    /**
     *
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
}
