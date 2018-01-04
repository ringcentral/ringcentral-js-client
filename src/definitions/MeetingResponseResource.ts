// Generated Source
import MeetingLinks from "./MeetingLinks";
import MeetingScheduleResource from "./MeetingScheduleResource";

interface MeetingResponseResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    uuid?: string;

    /**
     * 
     */
    id?: string;

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
    password?: string;

    /**
     * 
     */
    status?: string;

    /**
     * 
     */
    links?: MeetingLinks;

    /**
     * 
     */
    schedule?: MeetingScheduleResource;

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

export default MeetingResponseResource;
