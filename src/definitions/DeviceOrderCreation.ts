// Generated Source
import DeviceResource from "./DeviceResource";
import TaskInfo from "./TaskInfo";

interface DeviceOrderCreation {

    /**
     * List of devices ordered
     */
    devices?: DeviceResource[];

    /**
     * For Async Order Only. Information on device ordering task
     */
    task?: TaskInfo;
}

export default DeviceOrderCreation;
