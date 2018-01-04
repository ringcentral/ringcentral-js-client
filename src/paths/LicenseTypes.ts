// This is Generated Source.
import ILicenseTypes from "../definitions/LicenseTypes";
import PathSegment from "../PathSegment";

export default class LicenseTypes extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("license-types", id, prv, service);
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Returns supported license types.</p><h4>API Group</h4><p>Light</p>
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
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Returns supported license types.</p><h4>API Group</h4><p>Light</p>
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
