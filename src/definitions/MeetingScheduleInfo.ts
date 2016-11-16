// Generated Source
import { MeetingScheduleInfoTimezoneInfo } from "./MeetingScheduleInfoTimezoneInfo";

export interface MeetingScheduleInfo {

    /**
     * Start time of a meeting in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    startTime?: string;

    /**
     * Duration of a meeting in minutes
     */
    durationInMinutes?: number;

    /**
     * Timezone of a meeting
     */
    timeZone?: MeetingScheduleInfoTimezoneInfo;
}
