import FavoriteCollection from "../definitions/FavoriteCollection";
import PathSegment from "../PathSegment";
export default class Favorite extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    get(): Promise<void>;
    /**
     *
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
    /**
     *
     */
    put(body: FavoriteCollection): Promise<void>;
    /**
     *
     *  return {ApiResponse}
     */
    putRaw(body: FavoriteCollection): Promise<any>;
}
