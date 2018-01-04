// Generated Source
import PagesInfoReporting from "./PagesInfoReporting";
import SchedulesInfoReporting from "./SchedulesInfoReporting";

interface ViewInfoReporting {

    /**
     * User-defined name of a 'View'. The maximum value is 255
     */
    name?: string;

    /**
     * List of pages, the max amount is 10
     */
    pages?: PagesInfoReporting[];

    /**
     * List of schedules, the max amount is 5. Each 'View' may have several schedules for reporting. For example, customer may want to get daily and weekly reports with the same set of settings
     */
    schedules?: SchedulesInfoReporting[];
}

export default ViewInfoReporting;
