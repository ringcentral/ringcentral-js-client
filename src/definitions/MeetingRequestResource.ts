// Generated Source
import HostInfoRequest from "./HostInfoRequest";
import MeetingScheduleResource from "./MeetingScheduleResource";

interface MeetingRequestResource {

    /**
     * 
     */
    topic?: string;

    /**
     * 
     */
    meetingType?: string;

    /**
     * 
     */
    schedule?: MeetingScheduleResource;

    /**
     * 
     */
    password?: string;

    /**
     * 
     */
    host?: HostInfoRequest;

    /**
     * 
     */
    allowJoinBeforeHost?: boolean;

    /**
     * 
     */
    startHostVideo?: boolean;

    /**
     * 
     */
    startParticipantsVideo?: boolean;

    /**
     * 
     */
    audioOptions?: string[];
}

export default MeetingRequestResource;
