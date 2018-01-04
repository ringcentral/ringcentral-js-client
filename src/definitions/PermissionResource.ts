// Generated Source
import PermissionCategoryIdResource from "./PermissionCategoryIdResource";
import PermissionIdResource from "./PermissionIdResource";

interface PermissionResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    id?: string;

    /**
     * 
     */
    displayName?: string;

    /**
     * 
     */
    description?: string;

    /**
     * 
     */
    assignable?: boolean;

    /**
     * 
     */
    readOnly?: boolean;

    /**
     * 
     */
    category?: PermissionCategoryIdResource;

    /**
     * 
     */
    includedPermissions?: PermissionIdResource[];
}

export default PermissionResource;
