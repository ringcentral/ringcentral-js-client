// Generated Source
import DialInNumberResource from "./DialInNumberResource";
import MeetingExternalUserInfoResource from "./MeetingExternalUserInfoResource";

interface MeetingServiceInfoResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    supportUri?: string;

    /**
     * 
     */
    intlDialInNumbersUri?: string;

    /**
     * 
     */
    externalUserInfo?: MeetingExternalUserInfoResource;

    /**
     * 
     */
    dialInNumbers?: DialInNumberResource[];
}

export default MeetingServiceInfoResource;
