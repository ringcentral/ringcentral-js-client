// Generated Source
import DeviceResource from "./DeviceResource";
import SipFlags from "./SipFlags";
import SipInfo from "./SipInfo";

interface RegistrationResponse {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    device?: DeviceResource;

    /**
     * 
     */
    sipInfo?: SipInfo[];

    /**
     * 
     */
    sipFlags?: SipFlags;
}

export default RegistrationResponse;
