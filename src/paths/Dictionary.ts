// This is Generated Source.
import PathSegment from "../PathSegment";
import FaxCoverPage from "./FaxCoverPage";
import Greeting from "./Greeting";
import Language from "./Language";
import Country from "./Country";
import Location from "./Location";
import State from "./State";
import Timezone from "./Timezone";
import Device from "./Device";
import LicenseTypes from "./LicenseTypes";

export default class Dictionary extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("dictionary", id, prv, service);
    }

    /**
     * 
     */
    faxCoverPage(id?: string) {
        return new FaxCoverPage(this, id);
    }

    /**
     * 
     */
    greeting(id?: string) {
        return new Greeting(this, id);
    }

    /**
     * Internal identifier of a language
     */
    language(id?: string) {
        return new Language(this, id);
    }

    /**
     * Internal identifier of a country
     */
    country(id?: string) {
        return new Country(this, id);
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

    /**
     * 
     */
    device(id?: string) {
        return new Device(this, id);
    }

    /**
     * 
     */
    licenseTypes(id?: string) {
        return new LicenseTypes(this, id);
    }
}
