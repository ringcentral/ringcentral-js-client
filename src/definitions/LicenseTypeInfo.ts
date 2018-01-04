// Generated Source
import LicenseFeatureInfo from "./LicenseFeatureInfo";

interface LicenseTypeInfo {

    /**
     * Internal identifier of a type
     */
    id?: string;

    /**
     * Canonical URI of a license type resource
     */
    uri?: string;

    /**
     * Short name of a license type
     */
    sku?: string;

    /**
     * Full name of a license type
     */
    name?: string;

    /**
     * State of a license. Webinars and Large Meetings are assignable
     */
    assignable?: string;

    /**
     * License feature info
     */
    feature?: LicenseFeatureInfo;
}

export default LicenseTypeInfo;
