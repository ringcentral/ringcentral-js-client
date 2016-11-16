// This is Generated Source.
import UrlSection from "../../UrlSection";
import Lookup from "./Lookup";
import Reserve from "./Reserve";

export default class NumberPool extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("number-pool", id , prv, service);
    }

    /**
     * 
     */
    lookup(id?: string) {
        return new Lookup(this, id);
    }

    /**
     * 
     */
    reserve(id?: string) {
        return new Reserve(this, id);
    }
}
