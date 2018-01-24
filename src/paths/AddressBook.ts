// This is Generated Source.
import PathSegment from "../PathSegment";
import Contact from "./Contact";

export default class AddressBook extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("address-book", id, prv, service);
    }

    /**
     * Internal identifier of an extension
     */
    contact(id?: string) {
        return new Contact(this, id);
    }
}
