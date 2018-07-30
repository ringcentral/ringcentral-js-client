// This is Generated Source.
import IServiceProviderConfig from "../definitions/ServiceProviderConfig";
import PathSegment from "../PathSegment";

export default class ServiceProviderConfig extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("ServiceProviderConfig", id, prv, service);
    }

    /**
     *  
     */
    get(): Promise<IServiceProviderConfig> {
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
     *  
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
