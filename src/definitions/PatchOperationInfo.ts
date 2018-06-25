// Generated Source

interface PatchOperationInfo {

    /**
     * 
     */
    op?: 'add' | 'replace' | 'remove';

    /**
     * 
     */
    path?: string;

    /**
     * corresponding 'value' of that field specified by 'path'
     */
    value?: Value;
}

export default PatchOperationInfo;
