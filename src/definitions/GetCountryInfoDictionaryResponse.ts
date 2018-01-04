// Generated Source

interface GetCountryInfoDictionaryResponse {

    /**
     * Internal identifier of a country
     */
    id?: string;

    /**
     * Canonical URI of a country
     */
    uri?: string;

    /**
     * Country calling code defined by ITU-T recommendations E.123 and E.164, see Calling Codes
     */
    callingCode?: string;

    /**
     * Emergency calling feature availability/emergency address requirement indicator
     */
    emergencyCalling?: boolean;

    /**
     * Country code according to the ISO standard, see ISO 3166
     */
    isoCode?: string;

    /**
     * Official name of a country
     */
    name?: string;

    /**
     * Determines whether phone numbers are available for a country
     */
    numberSelling?: boolean;

    /**
     * Specifies whether login with the phone numbers of this country is enabled or not
     */
    loginAllowed?: boolean;

    /**
     * Indicates whether signup/billing is allowed for a country
     */
    signupAllowed?: boolean;

    /**
     * Specifies if free phone line for softphone is available for a country or not
     */
    freeSoftphoneLine?: boolean;
}

export default GetCountryInfoDictionaryResponse;
