// Generated Source
import RangesInfo from "./RangesInfo";
import WeeklyScheduleInfo from "./WeeklyScheduleInfo";

interface AnsweringRuleScheduleInfo {

    /**
     * Weekly schedule. If specified, ranges cannot be specified
     */
    weeklyRanges?: WeeklyScheduleInfo;

    /**
     * Specific data ranges. If specified, weeklyRanges cannot be specified
     */
    ranges?: RangesInfo;
}

export default AnsweringRuleScheduleInfo;
