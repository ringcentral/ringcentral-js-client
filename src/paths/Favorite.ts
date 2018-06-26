// This is Generated Source.
import FavoriteCollection from "../definitions/FavoriteCollection";
import PathSegment from "../PathSegment";

export default class Favorite extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("favorite", id, prv, service);
    }

    /**
     *  
     */
    get(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
            throttlingGroup: "Light",
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
            throttlingGroup: "Light",
        });
    }

    /**
     *  
     */
    put(body: FavoriteCollection): Promise<void> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
            throttlingGroup: "Medium",
        });
    }

    /**
     *  
     *  return {ApiResponse}
     */
    putRaw(body: FavoriteCollection): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
            throttlingGroup: "Medium",
        });
    }
}
