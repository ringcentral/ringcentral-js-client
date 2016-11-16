// Generated Source
import StateInfoCountryInfo from "./StateInfoCountryInfo";

interface StateInfo {

    /**
     * Internal identifier of a state
     */
    id?: string;

    /**
     * Canonical URI of a state
     */
    uri?: string;

    /**
     * Information on a country the state belongs to
     */
    country?: StateInfoCountryInfo;

    /**
     * Short code for a state (2-letter usually)
     */
    isoCode?: string;

    /**
     * Official name of a state
     */
    name?: string;
}

export default StateInfo;
