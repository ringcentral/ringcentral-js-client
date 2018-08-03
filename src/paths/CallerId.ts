// This is Generated Source.
import ExtensionCallerIdInfo from "../definitions/ExtensionCallerIdInfo";
import PathSegment from "../PathSegment";

export default class CallerId extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("caller-id", id, prv, service);
    }

    /**
     *  Returns information on an outbound caller ID of an extension.
     */
    get(): Promise<ExtensionCallerIdInfo> {
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
     *  Returns information on an outbound caller ID of an extension.
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

    /**
     *  Updates outbound caller ID information of an extension.
     */
    put(body: ExtensionCallerIdInfo): Promise<ExtensionCallerIdInfo> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Updates outbound caller ID information of an extension.
     *  return {ApiResponse}
     */
    putRaw(body: ExtensionCallerIdInfo): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
