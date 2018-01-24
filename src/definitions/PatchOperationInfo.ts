// Generated Source

interface PatchOperationInfo {

    /**
     * 
     */
    op?: "add" | "replace" | "remove";

    /**
     * 
     */
    path?: string;

    /**
     * corresponding 'value' of that field specified by 'path'
     */
    value?: any;
}

export default PatchOperationInfo;
