// Generated Source
import DeviceResource from "./DeviceResource";

interface DeviceOrder {

    /**
     * Identifier of a device
     */
    id?: string;

    /**
     * Canonical URI of an order resource
     */
    uri?: string;

    /**
     * List of devices ordered
     */
    devices?: DeviceResource[];
}

export default DeviceOrder;
