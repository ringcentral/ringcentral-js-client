// Generated Source
import AutomaticRecordingResource from "./AutomaticRecordingResource";
import GreetingResource from "./GreetingResource";
import OnDemandResource from "./OnDemandResource";

interface CallRecordingSettingsResource {

    /**
     * 
     */
    onDemand?: OnDemandResource;

    /**
     * 
     */
    automatic?: AutomaticRecordingResource;

    /**
     * Collection of Greeting Info
     */
    greetings?: GreetingResource[];
}

export default CallRecordingSettingsResource;
