// Generated Source
import ConferencingNumberResource from "./ConferencingNumberResource";

interface ConferencingInfoResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    phoneNumber?: string;

    /**
     * 
     */
    hostCode?: string;

    /**
     * 
     */
    participantCode?: string;

    /**
     * 
     */
    allowJoinBeforeHost?: boolean;

    /**
     * 
     */
    tapToJoinUri?: string;

    /**
     * 
     */
    supportUri?: string;

    /**
     * 
     */
    mode?: "FCC" | "RCC";

    /**
     * 
     */
    phoneNumbers?: ConferencingNumberResource[];
}

export default ConferencingInfoResource;
