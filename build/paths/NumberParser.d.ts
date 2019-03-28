import PathSegment from "../PathSegment";
import Parse from "./Parse";
export default class NumberParser extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    parse(id?: string): Parse;
}
