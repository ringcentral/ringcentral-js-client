// This is Generated Source.
import ILicenseTypes from "../definitions/LicenseTypes";
import PathSegment from "../PathSegment";

export default class LicenseTypes extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("license-types", id, prv, service);
    }

    /**
     *  Returns supported license types.
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
     *  Returns supported license types.
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
