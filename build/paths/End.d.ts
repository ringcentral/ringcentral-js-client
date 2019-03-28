import PathSegment from "../PathSegment";
export default class End extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    post(): Promise<void>;
    /**
     *
     *  return {ApiResponse}
     */
    postRaw(): Promise<any>;
}
