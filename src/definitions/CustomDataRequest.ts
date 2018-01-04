// Generated Source

interface CustomDataRequest {

    /**
     * Custom data access key. Optional. If specified, must match the custom key in the URL
     */
    id?: string;

    /**
     * Description of custom data. Mandatory for create, if there is no attachment specified. Maximum length is limited to 256 symbols
     */
    value?: string;
}

export default CustomDataRequest;
