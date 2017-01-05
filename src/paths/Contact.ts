// This is Generated Source.
import PersonalContactInfo from "../definitions/PersonalContactInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class Contact extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("contact", id, prv, service);
    }

    /**
     *  Create New Contact
     */
    post(body: PersonalContactInfo): Promise<PersonalContactInfo> {
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
     *  Create New Contact
     *  return {ApiResponse}
     */
    postRaw(body: PersonalContactInfo): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Get Contact List
     */
    list(query?: ListQuery): Promise<PagingResult<PersonalContactInfo>> {
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
     *  Get Contact List
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
     *  Delete Contact by ID
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
     *  Delete Contact by ID
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
     *  Get Contact by ID
     */
    get(): Promise<PersonalContactInfo> {
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
     *  Get Contact by ID
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
     *  Update Contact by ID
     */
    put(body: PersonalContactInfo): Promise<PersonalContactInfo> {
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
     *  Update Contact by ID
     *  return {ApiResponse}
     */
    putRaw(body: PersonalContactInfo): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * Phone number in E.164 (11-digits) format with or without plus '+'. Multiple values are supported
     */
    phoneNumber?: string;

    /**
     * If specified, only contacts whose First name or Last name start with the mentioned substring are returned. Case-insensitive
     */
    startsWith?: string;

    /**
     * Sorts results by the specified property. The default is 'First Name'
     */
    sortBy?: "FirstName" | "LastName" | "Company";

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
