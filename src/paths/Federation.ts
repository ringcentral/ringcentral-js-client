// This is Generated Source.
import FederationResource from "../definitions/FederationResource";
import PathSegment from "../PathSegment";

export default class Federation extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("federation", id, prv, service);
    }

    /**
     *  Returns information on a federation and associated accounts.
     */
    get(): Promise<FederationResource> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Returns information on a federation and associated accounts.
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }
}
