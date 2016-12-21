// Generated Source
import RangesInfo from "./RangesInfo";
import WeeklyScheduleInfo from "./WeeklyScheduleInfo";

interface ScheduleInfo {

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

export default ScheduleInfo;
