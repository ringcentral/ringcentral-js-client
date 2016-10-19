/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
import Members from "./Members";

export default class Department extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("department", id , prv, service);
    }

    /**
     * 
     */
    members(id?: string) {
        return new Members(this, id);
    }
}
