/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
import {PermissionDetailsInfo} from "../PermissionDetailsInfo";

export default class Check extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("check", id , prv, service);
    }

    /**
        Check User Permissions
    */
    get(query?:GetQuery): Promise<GetResponse> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: query, body: null }).then(function (res) {
            return res.json();
        });
    }
}

export interface GetQuery {

    /**
     * Permission to check
     */
    permissionId?: string;

    /**
     * Optional. Internal identifier of an extension for which user permissions are to be checked. The default value is the currently logged-in extension
     */
    targetExtensionId?: string;
}

export interface GetResponse {

    /**
     * Canonical URI of a permission resource
     */
    uri?: string;

    /**
     * Specifies if check result is successful or not
     */
    successful?: boolean;

    /**
     * Information on a permission checked. Returned if successful is 'True'
     */
    details?: PermissionDetailsInfo;

    /**
     * List of active scopes for permission. Returned if successful is 'True'
     */
    scopes?: string[];
}
