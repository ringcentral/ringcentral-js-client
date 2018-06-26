// Generated Source
import AuthenticationSchemes from "./AuthenticationSchemes";
import BulkSupported from "./BulkSupported";
import FilterSupported from "./FilterSupported";
import Supported from "./Supported";

interface ServiceProviderConfig {

    /**
     * 
     */
    authenticationSchemes?: AuthenticationSchemes;

    /**
     * 
     */
    bulk?: BulkSupported;

    /**
     * 
     */
    changePassword?: Supported;

    /**
     * 
     */
    etag?: Supported;

    /**
     * 
     */
    filter?: FilterSupported;

    /**
     * 
     */
    patch?: Supported;

    /**
     * 
     */
    schemas?: "urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"[];

    /**
     * 
     */
    sort?: Supported;
}

export default ServiceProviderConfig;
