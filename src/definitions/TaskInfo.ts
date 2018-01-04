// Generated Source

interface TaskInfo {

    /**
     * Internal identifier of a task
     */
    id?: string;

    /**
     * Link to a task resource
     */
    uri?: string;

    /**
     * Device order status
     */
    status?: "Accepted" | "Failed";

    /**
     * Task creation time
     */
    creationTime?: string;

    /**
     * Time of task last modification
     */
    lastModifiedTime?: string;
}

export default TaskInfo;
