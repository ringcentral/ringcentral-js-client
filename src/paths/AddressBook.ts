// This is Generated Source.
import Contact from "./Contact";
import Group from "./Group";
import PathSegment from "../PathSegment";

export default class AddressBook extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("address-book", id, prv, service);
    }

    /**
     * Internal identifier of a contact record in the RingCentral database
     */
    contact(id?: string) {
        return new Contact(this, id);
    }

    /**
     * Internal identifier of a group in an address book
     */
    group(id?: string) {
        return new Group(this, id);
    }
}
