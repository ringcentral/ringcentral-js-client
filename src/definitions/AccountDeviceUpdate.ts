// Generated Source
import DeviceUpdateExtensionInfo from "./DeviceUpdateExtensionInfo";
import DeviceUpdatePhoneLinesInfo from "./DeviceUpdatePhoneLinesInfo";
import EmergencyAddressInfoRequest from "./EmergencyAddressInfoRequest";

interface AccountDeviceUpdate {

    /**
     * Address for emergency cases. The same emergency address is assigned to all numbers of a single device
     */
    emergencyServiceAddress?: EmergencyAddressInfoRequest;

    /**
     * Information on extension that the device is assigned to
     */
    extension?: DeviceUpdateExtensionInfo;

    /**
     * Information on phone lines added to a device
     */
    phoneLines?: DeviceUpdatePhoneLinesInfo;
}

export default AccountDeviceUpdate;
