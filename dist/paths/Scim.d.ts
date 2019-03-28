import PathSegment from "../PathSegment";
import V2 from "./V2";
export default class Scim extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    v2(id?: string): V2;
}
