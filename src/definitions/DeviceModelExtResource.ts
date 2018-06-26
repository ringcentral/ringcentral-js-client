// Generated Source
import DeviceModelResource from "./DeviceModelResource";

interface DeviceModelExtResource {

    /**
     * Device identification number (stock keeping unit) in the format TP-ID [-AT-AC], where TP is device type (HP for RC HardPhone, DV for all other devices including softphone); ID - device model ID; AT -addon type ID; AC - addon count (if any). For example 'HP-56-2-2'
     */
    sku?: string;

    /**
     * Device type. The default value is 'HardPhone'
     */
    type?: "SoftPhone" | "HardPhone" | "OtherPhone";

    /**
     * HardPhone model information
     */
    model?: DeviceModelResource;
}

export default DeviceModelExtResource;
