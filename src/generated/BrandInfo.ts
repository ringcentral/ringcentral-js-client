// Generated Source
import { CountryInfo } from "./CountryInfo";

export interface BrandInfo {

    /**
     * Internal identifier of a brand
     */
    id?: string;

    /**
     * Brand name, for example "RingCentral UK", "ClearFax"
     */
    name?: string;

    /**
     * Home country information
     */
    homeCountry?: CountryInfo;
}