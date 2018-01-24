// Generated Source
import LicenseExtensionInfo from "./LicenseExtensionInfo";
import LicenseFeatureInfo from "./LicenseFeatureInfo";

interface LicenseInfo {

    /**
     * Canonical URI of a license
     */
    uri?: string;

    /**
     * Internal identifier of a license
     */
    id?: string;

    /**
     * License type data
     */
    type?: LicenseFeatureInfo;

    /**
     * Datetime when license was purchased in ISO 8601 format including timezone, for example 2017-03-10T18:07:52.534Z
     */
    creationTime?: string;

    /**
     * Information on extension to which a license can be assigned
     */
    extension?: LicenseExtensionInfo;
}

export default LicenseInfo;
