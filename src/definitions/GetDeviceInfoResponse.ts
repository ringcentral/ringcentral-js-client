// Generated Source
import EmergencyAddressInfo from "./EmergencyAddressInfo";
import ExtensionInfo from "./ExtensionInfo";
import ModelInfo from "./ModelInfo";
import PhoneLinesInfo from "./PhoneLinesInfo";
import ShippingInfo from "./ShippingInfo";

interface GetDeviceInfoResponse {

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
    type?: "SoftPhone" | "OtherPhone" | "HardPhone";

    /**
     * Device name. Mandatory if ordering  SoftPhone  or  OtherPhone . Optional for  HardPhone . If not specified for HardPhone, then device model  name is used as device  name
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
    model?: ModelInfo;

    /**
     * This attribute can be omitted for unassigned devices
     */
    extension?: ExtensionInfo;

    /**
     * Address for emergency cases. The same emergency address is assigned to all the numbers of one device
     */
    emergencyServiceAddress?: EmergencyAddressInfo;

    /**
     * Phone lines information
     */
    phoneLines?: PhoneLinesInfo;

    /**
     * Shipping information, according to which devices (in case of HardPhone ) or e911 stickers (in case of  SoftPhone  and  OtherPhone ) will be delivered to the customer
     */
    shipping?: ShippingInfo;

    /**
     * Box billing identifier of a device. Applicable only for HardPhones. It is an alternative way to identify the device to be ordered. EitherT? model  structure, or  boxBillingId  must be specified forT?HardPhone
     */
    boxBillingId?: number;
}

export default GetDeviceInfoResponse;
