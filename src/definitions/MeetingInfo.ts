// Generated Source
import LinksInfo from "./LinksInfo";
import MeetingScheduleInfo from "./MeetingScheduleInfo";

interface MeetingInfo {

    /**
     * Canonical URI of a meeting resource
     */
    uri?: string;

    /**
     * Internal identifier of a meeting as retrieved from Zoom
     */
    id?: string;

    /**
     * Topic of a meeting
     */
    topic?: string;

    /**
     * Type of a meeting
     */
    meetingType?: "Scheduled" | "Instant" | "Recurring";

    /**
     * Password required to join a meeting
     */
    password?: string;

    /**
     * Current status of a meeting
     */
    status?: "NotStarted" | "Started";

    /**
     * Links to start/join the meeting
     */
    links?: LinksInfo;

    /**
     * Schedule of a meeting
     */
    schedule?: MeetingScheduleInfo;

    /**
     * If 'True' then the meeting can be joined and started by any participant (not host only). Supported for the meetings of 'Scheduled' and 'Recurring' type.
     */
    allowJoinBeforeHost?: boolean;

    /**
     * Enables starting video when host joins the meeting
     */
    startHostVideo?: boolean;

    /**
     * Enables starting video when participants join the meeting
     */
    startParticipantsVideo?: boolean;

    /**
     * Meeting audio options. Possible values are 'Phone', 'ComputerAudio'
     */
    audioOptions?: string[];
}

export default MeetingInfo;
