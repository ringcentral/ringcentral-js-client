// Generated Source
import CallerInfo from "./CallerInfo";
import CountryResource from "./CountryResource";

interface SmsResource {

    /**
     * 
     */
    country?: CountryResource;

    /**
     * 
     */
    to?: CallerInfo[];

    /**
     * 
     */
    from?: CallerInfo;

    /**
     * 
     */
    text?: string;
}

export default SmsResource;
