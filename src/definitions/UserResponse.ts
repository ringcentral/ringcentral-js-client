// Generated Source
import Address from "./Address";
import Email from "./Email";
import Meta from "./Meta";
import Name from "./Name";
import PhoneNumber from "./PhoneNumber";
import Photo from "./Photo";

interface UserResponse {

    /**
     * user status
     */
    active?: boolean;

    /**
     * 
     */
    addresses?: Address[];

    /**
     * 
     */
    emails?: Email[];

    /**
     * external unique resource id defined by provisioning client
     */
    externalId?: string;

    /**
     * unique resource id defined by RingCentral
     */
    id?: string;

    /**
     * 
     */
    name?: Name;

    /**
     * 
     */
    phoneNumbers?: PhoneNumber[];

    /**
     * 
     */
    photos?: Photo[];

    /**
     * 
     */
    schemas?: "urn:ietf:params:scim:schemas:core:2.0:User"[];

    /**
     * MUST be same as work type email address
     */
    userName?: string;

    /**
     * 
     */
    meta?: Meta;
}

export default UserResponse;
