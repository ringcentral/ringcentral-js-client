// Generated Source
import PermissionIdResource from "./PermissionIdResource";
import RoleIdResource from "./RoleIdResource";

interface ActivePermissionResource {

    /**
     * 
     */
    permission?: PermissionIdResource;

    /**
     * 
     */
    effectiveRole?: RoleIdResource;

    /**
     * 
     */
    scopes?: string[];
}

export default ActivePermissionResource;
