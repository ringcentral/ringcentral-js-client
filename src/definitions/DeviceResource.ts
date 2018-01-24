// Generated Source
import DeviceModelResource from "./DeviceModelResource";
import EmergencyServiceAddressResource from "./EmergencyServiceAddressResource";
import ExtensionResource from "./ExtensionResource";
import PhoneLineResource from "./PhoneLineResource";
import ShippingResource from "./ShippingResource";

interface DeviceResource {

    /**
     * Internal identifier of a device
     */
    id?: string;

    /**
     * Canonical URI of a device
     */
    uri?: string;

    /**
     * Device identification number (stock keeping unit) in the format TP-ID [-AT-AC], where TP is device type (HP for RC HardPhone, DV for all other devices including softphone); ID - device model ID; AT -addon type ID; AC - addon count (if any). For example 'HP-56-2-2'
     */
    sku?: string;

    /**
     * Device type. The default value is 'HardPhone'
     */
    type?: "HardPhone" | "SoftPhone" | "OtherPhone";

    /**
     * Status of a device = ['Online', 'Offline']
     */
    status?: "Online" | "Offline";

    /**
     * Device name. Mandatory if ordering SoftPhone or OtherPhone . Optional for HardPhone . If not specified for HardPhone, then device model name is used as device name
     */
    name?: string;

    /**
     * Serial number for HardPhone (is returned only when the phone is shipped and provisioned); endpoint_id for softphone and mobile applications
     */
    serial?: string;

    /**
     * PC name for softphone
     */
    computerName?: string;

    /**
     * HardPhone model information
     */
    model?: DeviceModelResource;

    /**
     * This attribute can be omitted for unassigned devices
     */
    extension?: ExtensionResource;

    /**
     * Phone lines information
     */
    phoneLines?: PhoneLineResource;

    /**
     * Address for emergency cases. The same emergency address is assigned to all numbers of a single device ,
     */
    emergencyServiceAddress?: EmergencyServiceAddressResource;

    /**
     * Shipping information, according to which devices (in case of HardPhone ) or e911 stickers (in case of SoftPhone and OtherPhone ) will be delivered to the customer
     */
    shipping?: ShippingResource;

    /**
     * Box billing identifier of a device. Applicable only for HardPhones. It is an alternative way to identify the device to be ordered. Either model structure, or boxBillingId must be specified for HardPhone
     */
    boxBillingId?: number;

    /**
     * Pooling type of a deviceHost - device with standalone paid phone line which can be linked to Glip/Softphone instanceGuest - device with a linked phone lineNone - device without a phone line or with specific line (free, BLA, etc.) = ['Host', 'Guest', 'None']
     */
    linePooling?: "Host" | "Guest" | "None";
}

export default DeviceResource;
