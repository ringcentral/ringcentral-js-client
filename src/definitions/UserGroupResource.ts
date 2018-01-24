// Generated Source
import ExtensionIdResource from "./ExtensionIdResource";
import UserGroupManagerResource from "./UserGroupManagerResource";

interface UserGroupResource {

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
    managers?: UserGroupManagerResource[];

    /**
     * 
     */
    members?: ExtensionIdResource[];
}

export default UserGroupResource;
