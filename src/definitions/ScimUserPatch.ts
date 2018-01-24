// Generated Source
import PatchOperationInfo from "./PatchOperationInfo";

interface ScimUserPatch {

    /**
     * patch operations list
     */
    Operations?: PatchOperationInfo[];

    /**
     * 
     */
    schemas?: "urn:ietf:params:scim:api:messages:2.0:PatchOp"[];
}

export default ScimUserPatch;
