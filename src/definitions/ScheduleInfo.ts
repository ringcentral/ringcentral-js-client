// Generated Source
import { WeeklyScheduleInfo } from "./WeeklyScheduleInfo";
import { RangesInfo } from "./RangesInfo";

export interface ScheduleInfo {

    /**
     * Weekly schedule
     */
    weeklyRanges?: WeeklyScheduleInfo;

    /**
     * Specific data ranges
     */
    ranges?: RangesInfo;

    /**
     * The user's schedule specified for business hours or after hours; it can also be set/retrieved calling the corresponding method
     */
    ref?: "BusinessHours" | "AfterHours";
}
