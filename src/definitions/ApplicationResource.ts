// Generated Source
import OrganizationResource from "./OrganizationResource";
import PermissionResource from "./PermissionResource";

interface ApplicationResource {

    /**
     * 
     */
    id?: string;

    /**
     * 
     */
    name?: string;

    /**
     * 
     */
    description?: string;

    /**
     * 
     */
    organization?: OrganizationResource;

    /**
     * 
     */
    scope?: string;

    /**
     * 
     */
    platformType?: string;

    /**
     * 
     */
    permissions?: PermissionResource[];
}

export default ApplicationResource;
