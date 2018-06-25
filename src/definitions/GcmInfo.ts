// Generated Source
import GcmData from "./GcmData";

interface GcmInfo {

    /**
     * Notification priority, if the value is 'high' then notification is turned on even if the application is in background
     */
    priority?: 'high' | 'normal';

    /**
     * Notification lifetime value in seconds, the default value is 30 seconds
     */
    time_to_live?: number;

    /**
     * GCM data
     */
    data?: GcmData;
}

export default GcmInfo;
