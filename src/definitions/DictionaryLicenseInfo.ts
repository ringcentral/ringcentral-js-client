// Generated Source
import LicenseFeatureInfo from "./LicenseFeatureInfo";

interface DictionaryLicenseInfo {

    /**
     * Canonical URI of a license
     */
    uri?: string;

    /**
     * Internal identifier of a license
     */
    id?: number;

    /**
     * Name of a license
     */
    sku?: "RMS" | "RCN" | "WBR-100" | "WBR-500" | "WBR-1000" | "WBR-3000" | "WBR-5000" | "WBR-10000" | "LRM-100" | "LRM-200" | "LRM-300" | "LRM-500" | "LRP";

    /**
     * Full name of a license
     */
    name?: string;

    /**
     * License type data
     */
    feature?: LicenseFeatureInfo;

    /**
     * State of a license. Webinars and Large Meetings are assignable
     */
    assignable?: boolean;
}

export default DictionaryLicenseInfo;
