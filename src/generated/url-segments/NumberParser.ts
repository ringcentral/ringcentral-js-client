/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
import Parse from "./Parse";

export default class NumberParser extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("number-parser", id , prv, service);
    }

    /**
     * 
     */
    parse(id?: string) {
        return new Parse(this, id);
    }
}
