// Generated Source

interface ReportingRecurrenceInfo {

    /**
     * Pattern (frequency) of recurrence
     */
    pattern?: "Daily" | "Weekly" | "Monthly";

    /**
     * Time and dates should be specified in UTC time zone
     */
    value?: "0" | "1-7" | "1-31" | "last";
}

export default ReportingRecurrenceInfo;
