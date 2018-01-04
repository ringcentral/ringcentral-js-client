// Generated Source
import ReportingPagesInfo from "./ReportingPagesInfo";
import ReportingSchedulesInfo from "./ReportingSchedulesInfo";

interface ReportingViewInfo {

    /**
     * User-defined name of a 'View'. The maximum value is 255
     */
    name?: string;

    /**
     * List of pages, the max amount is 10
     */
    pages?: ReportingPagesInfo[];

    /**
     * List of schedules, the max amount is 5. Each 'View' may have several schedules for reporting. For example, customer may want to get daily and weekly reports with the same set of settings
     */
    schedules?: ReportingSchedulesInfo[];
}

export default ReportingViewInfo;
