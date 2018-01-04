// This is Generated Source.
import PathSegment from "../PathSegment";
import Contacts from "./Contacts";
import Federation from "./Federation";

export default class Directory extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("directory", id, prv, service);
    }

    /**
     * Internal identifier of an extension
     */
    contacts(id?: string) {
        return new Contacts(this, id);
    }

    /**
     * 
     */
    federation(id?: string) {
        return new Federation(this, id);
    }
}
