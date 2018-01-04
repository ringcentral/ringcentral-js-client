// Generated Source

interface EmergencyAddressInfoRequest {

    /**
     * Name of a customer
     */
    customerName?: string;

    /**
     * Street address, line 1 - street address, P.O. box, company name, c/o
     */
    street?: string;

    /**
     * Street address, line 2 - apartment, suite, unit, building, floor, etc
     */
    street2?: string;

    /**
     * City name
     */
    city?: string;

    /**
     * State/province name
     */
    state?: string;

    /**
     * Zip code
     */
    zip?: string;

    /**
     * Country name
     */
    country?: string;
}

export default EmergencyAddressInfoRequest;
