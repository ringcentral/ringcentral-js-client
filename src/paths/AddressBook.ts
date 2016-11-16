// This is Generated Source.
import UrlSection from "../../UrlSection";
import Contact from "./Contact";
import Group from "./Group";

export default class AddressBook extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("address-book", id , prv, service);
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
