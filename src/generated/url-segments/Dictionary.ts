/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
import Country from "./Country";
import Language from "./Language";
import Location from "./Location";
import State from "./State";
import Timezone from "./Timezone";

export default class Dictionary extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("dictionary", id , prv, service);
    }

    /**
     * Internal identifier of a country
     */
    country(id?: string) {
        return new Country(this, id);
    }

    /**
     * Internal identifier of a language
     */
    language(id?: string) {
        return new Language(this, id);
    }

    /**
     * 
     */
    location(id?: string) {
        return new Location(this, id);
    }

    /**
     * Internal identifier of a state
     */
    state(id?: string) {
        return new State(this, id);
    }

    /**
     * Internal identifier of a timezone
     */
    timezone(id?: string) {
        return new Timezone(this, id);
    }
}
