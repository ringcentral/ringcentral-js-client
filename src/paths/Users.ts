// This is Generated Source.
import User from "../definitions/User";
import UserResponse from "../definitions/UserResponse";
import UserSearchResponse from "../definitions/UserSearchResponse";
import PathSegment from "../PathSegment";

export default class Users extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("Users", id, prv, service);
    }

    /**
     *  
     */
    get(query?: GetQuery): Promise<UserSearchResponse> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }

    /**
     *  
     */
    post(body: User): Promise<UserResponse> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  
     *  return {ApiResponse}
     */
    postRaw(body: User): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  
     */
    put(body: User): Promise<UserResponse> {
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
     *  
     *  return {ApiResponse}
     */
    putRaw(body: User): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  
     */
    delete(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }
}

export interface GetQuery {

    /**
     * only support 'userName' or 'email' filter expressions for now
     */
    filter?: string;

    /**
     * start index (1-based)
     */
    startIndex?: number;

    /**
     * page size
     */
    count?: number;
}
