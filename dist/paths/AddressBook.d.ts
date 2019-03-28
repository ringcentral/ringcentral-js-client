import PathSegment from "../PathSegment";
import Contact from "./Contact";
export default class AddressBook extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     * Internal identifier of an extension
     */
    contact(id?: string): Contact;
}
