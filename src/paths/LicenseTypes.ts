// This is Generated Source.
import ILicenseTypes from "../definitions/LicenseTypes";
import PathSegment from "../PathSegment";

export default class LicenseTypes extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("license-types", id, prv, service);
    }

    /**
     *  <p>Returns supported license types.</p><h4>User Permission</h4><p>MeetingsPlan</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    list(): Promise<ILicenseTypes> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Returns supported license types.</p><h4>User Permission</h4><p>MeetingsPlan</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    listRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    }
}
