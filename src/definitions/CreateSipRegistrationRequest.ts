// Generated Source
import DeviceInfoRequest from "./DeviceInfoRequest";
import SipInfoRequest from "./SipInfoRequest";

interface CreateSipRegistrationRequest {

    /**
     * Device unique description
     */
    device?: DeviceInfoRequest[];

    /**
     * SIP settings for device
     */
    sipInfo?: SipInfoRequest[];
}

export default CreateSipRegistrationRequest;
