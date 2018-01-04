// Generated Source
import SipFlagsRespones from "./SipFlagsRespones";
import SipInfoResponse from "./SipInfoResponse";

interface CreateSipRegistrationResponse {

    /**
     * SIP settings for device
     */
    sipInfo?: SipInfoResponse[];

    /**
     * SIP flags data
     */
    sipFlags?: SipFlagsRespones[];
}

export default CreateSipRegistrationResponse;
