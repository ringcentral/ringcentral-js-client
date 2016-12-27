// Generated Source
import DialInNumbers from "./DialInNumbers";
import ExternalUserInfo from "./ExternalUserInfo";

interface MeetingServiceInfo {

    /**
     * Canonical URI of a meeting service info resource
     */
    uri?: string;

    /**
     * URI to retrieve support information for meetings functionality
     */
    supportUri?: string;

    /**
     * URI to retrieve international dial in numbers
     */
    intlDialInNumbersUri?: string;

    /**
     * External user data
     */
    externalUserInfo?: ExternalUserInfo;

    /**
     * Dial-in numbers data
     */
    dialInNumbers?: DialInNumbers;
}

export default MeetingServiceInfo;
