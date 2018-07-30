// This is Generated Source.
import TemplateInfo from "../definitions/TemplateInfo";
import UserTemplates from "../definitions/UserTemplates";
import PathSegment from "../PathSegment";

export default class Templates extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("templates", id, prv, service);
    }

    /**
     *  
     */
    list(query?: ListQuery): Promise<UserTemplates> {
        return this._send({
            body: undefined,
            ignoreId: false,
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
    listRaw(query?: ListQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    }

    /**
     *  
     */
    get(): Promise<TemplateInfo> {
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

export interface ListQuery {

    /**
     * 
     */
    type?: "UserSettings" | "CallHandling";

    /**
     * 
     */
    page?: string;

    /**
     * 
     */
    perPage?: string;
}
