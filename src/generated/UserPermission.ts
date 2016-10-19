// Generated Source
import { UserPermissionInfo } from "./UserPermissionInfo";

export interface UserPermission {

    /**
     * Information on a permission granted
     */
    permission?: UserPermissionInfo;

    /**
     * List of active scopes for permission
     */
    scopes?: string[];
}