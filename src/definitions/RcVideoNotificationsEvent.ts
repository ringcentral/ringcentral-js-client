// Generated Source
import RcvParticipantsInfo from "./RcvParticipantsInfo";
import RcvRecordingInfo from "./RcvRecordingInfo";

interface RcVideoNotificationsEvent {

    /**
     * Identifier of a meeting
     */
    id?: string;

    /**
     * Meeting Name
     */
    name?: string;

    /**
     * Datetime of meeting start in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    start?: string;

    /**
     * Meeting duration
     */
    duration?: number;

    /**
     * Meeting participants information
     */
    participants?: RcvParticipantsInfo;

    /**
     * Specifies whether a meeting is recorded or not
     */
    recorded?: boolean;

    /**
     * Meeting recording information, if recorded value is 'True'
     */
    recording?: RcvRecordingInfo;
}

export default RcVideoNotificationsEvent;
