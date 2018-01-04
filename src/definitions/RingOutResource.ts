// Generated Source
import RingOutCountry from "./RingOutCountry";
import RingOutFromInfo from "./RingOutFromInfo";
import RingOutPhoneNumberInfo from "./RingOutPhoneNumberInfo";

interface RingOutResource {

    /**
     * 
     */
    from?: RingOutFromInfo;

    /**
     * 
     */
    to?: RingOutPhoneNumberInfo;

    /**
     * 
     */
    callerId?: RingOutPhoneNumberInfo;

    /**
     * 
     */
    playPrompt?: boolean;

    /**
     * 
     */
    country?: RingOutCountry;
}

export default RingOutResource;
