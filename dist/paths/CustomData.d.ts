import PathSegment from "../PathSegment";
import Content from "./Content";
export default class CustomData extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     * Internal identifier of a message attachment
     */
    content(id?: string): Content;
}
