// This is Generated Source.
import ContactList from "../definitions/ContactList";
import PersonalContactResource from "../definitions/PersonalContactResource";
import PathSegment from "../PathSegment";

export default class Contact extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("contact", id, prv, service);
    }

    /**
     *  Returns user personal contacts.
     */
    list(query?: ListQuery): Promise<ContactList> {
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
     *  Returns user personal contacts.
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
     *  Creates personal user contact.
     */
    post(body: PersonalContactResource, query?: PostQuery): Promise<PersonalContactResource> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Creates personal user contact.
     *  return {ApiResponse}
     */
    postRaw(body: PersonalContactResource, query?: PostQuery): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: query,
        });
    }

    /**
     *  Returns contact(s) by ID(s). Batch request is supported.
     */
    get(): Promise<PersonalContactResource> {
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
     *  Returns contact(s) by ID(s). Batch request is supported.
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
     *  Updates personal contact information by contact ID(s). Batch request is supported
     */
    put(body: PersonalContactResource, query?: PutQuery): Promise<PersonalContactResource> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Updates personal contact information by contact ID(s). Batch request is supported
     *  return {ApiResponse}
     */
    putRaw(body: PersonalContactResource, query?: PutQuery): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: query,
        });
    }

    /**
     *  Deletes contact(s) by ID(s). Batch request is supported.
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
     *  Deletes contact(s) by ID(s). Batch request is supported.
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

export interface ListQuery {

    /**
     * If specified, only contacts whose First name or Last name start with the mentioned substring are returned. Case-insensitive
     */
    startsWith?: string;

    /**
     * Sorts results by the specified property
     */
    sortBy?: ("FirstName" | "LastName" | "Company")[];

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * 
     */
    phoneNumber?: string[];
}

export interface PostQuery {

    /**
     * A country code value complying with the [ISO 3166-1 alpha-2](https://ru.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. The default value is home country of the current extension
     */
    dialingPlan?: string;
}

export interface PutQuery {

    /**
     * A country code value complying with the [ISO 3166-1 alpha-2](https://ru.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. The default value is home country of the current extension
     */
    dialingPlan?: string;
}
