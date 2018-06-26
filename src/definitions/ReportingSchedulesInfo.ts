// Generated Source
import ReportingAttachmentInfo from "./ReportingAttachmentInfo";
import ReportingRecurrenceInfo from "./ReportingRecurrenceInfo";

interface ReportingSchedulesInfo {

    /**
     * Unique schedule identifier
     */
    scheduleId?: string;

    /**
     * Recurrence pattern of a schedule
     */
    recurrence?: ReportingRecurrenceInfo[];

    /**
     * Type of report. Detailed reports include tables with data. Simple reports only include charts
     */
    viewType?: "Detailed" | "Simple";

    /**
     * Set of optional attachments. Basically, every report email is in HTML format. Optionally, it can contain PDF or CSV files
     */
    attachments?: ReportingAttachmentInfo[];

    /**
     * List of pages to include to the report. If empty, all pages are included. Otherwise, only specified pages are included. API doesn't check validity of page names. Client application is responsible to do that
     */
    pages?: string[];

    /**
     * List of emails to which to send rendered reports
     */
    recipients?: string[];
}

export default ReportingSchedulesInfo;
