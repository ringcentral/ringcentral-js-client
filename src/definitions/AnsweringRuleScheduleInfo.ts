// Generated Source
import WeeklyScheduleInfo from "./WeeklyScheduleInfo";
import RangesInfo from "./RangesInfo";

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
