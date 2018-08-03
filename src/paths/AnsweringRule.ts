// This is Generated Source.
import AnsweringRuleInfo from "../definitions/AnsweringRuleInfo";
import CompanyAnsweringRuleList from "../definitions/CompanyAnsweringRuleList";
import CreateAnsweringRuleRequest from "../definitions/CreateAnsweringRuleRequest";
import UpdateAnsweringRuleRequest from "../definitions/UpdateAnsweringRuleRequest";
import PathSegment from "../PathSegment";

export default class AnsweringRule extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("answering-rule", id, prv, service);
    }

    /**
     *  Returns the extension answering rules.
     */
    get(query?: GetQuery): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }

    /**
     *  Returns the extension answering rules.
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
     *  Creates a custom answering rule for a particular caller ID.
     */
    post(body: CreateAnsweringRuleRequest): Promise<AnsweringRuleInfo> {
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
     *  Creates a custom answering rule for a particular caller ID.
     *  return {ApiResponse}
     */
    postRaw(body: CreateAnsweringRuleRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Updates a custom answering rule for a particular caller ID.
     */
    put(body: UpdateAnsweringRuleRequest): Promise<AnsweringRuleInfo> {
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
     *  Updates a custom answering rule for a particular caller ID.
     *  return {ApiResponse}
     */
    putRaw(body: UpdateAnsweringRuleRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  Deletes a custom answering rule by a particular ID.
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
     *  Deletes a custom answering rule by a particular ID.
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

    /**
     *  Returns a list of company answering rules.
     */
    list(): Promise<CompanyAnsweringRuleList> {
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
     *  Returns a list of company answering rules.
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

export interface GetQuery {

    /**
     * 
     */
    page?: string;

    /**
     * 
     */
    perPage?: string;
}
