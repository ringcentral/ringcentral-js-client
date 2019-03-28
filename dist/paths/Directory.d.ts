import PathSegment from "../PathSegment";
import Contacts from "./Contacts";
import Federation from "./Federation";
export default class Directory extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     * Internal identifier of an extension
     */
    contacts(id?: string): Contacts;
    /**
     *
     */
    federation(id?: string): Federation;
}
