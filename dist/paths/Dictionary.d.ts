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
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    faxCoverPage(id?: string): FaxCoverPage;
    /**
     *
     */
    greeting(id?: string): Greeting;
    /**
     * Internal identifier of a language
     */
    language(id?: string): Language;
    /**
     * Internal identifier of a country
     */
    country(id?: string): Country;
    /**
     *
     */
    location(id?: string): Location;
    /**
     * Internal identifier of a state
     */
    state(id?: string): State;
    /**
     * Internal identifier of a timezone
     */
    timezone(id?: string): Timezone;
    /**
     *
     */
    device(id?: string): Device;
    /**
     *
     */
    licenseTypes(id?: string): LicenseTypes;
}
