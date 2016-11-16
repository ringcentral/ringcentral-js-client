// This is Generated Source.
import PathSegment from "../PathSegment";
import PersonalContactInfo from "../definitions/PersonalContactInfo";
import PagingResult from "../PagingResult";

export default class Contact extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("contact", id, prv, service);
    }

    /**
     *  Create New Contact
     */
    post(body: PersonalContactInfo): Promise<PersonalContactInfo> {
        return this.getService().send({
          body: body,
          method: "post",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Get Contact List
     */
    list(query?: ListQuery): Promise<PagingResult<PersonalContactInfo>> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: query,
          url: this.getEndpoint(false),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Delete Contact by ID
     */
    delete(): Promise<void> {
        return this.getService().send({
          body: undefined,
          method: "delete",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.response();
        });
    }

    /**
     *  Get Contact by ID
     */
    get(): Promise<PersonalContactInfo> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Update Contact by ID
     */
    put(body: PersonalContactInfo): Promise<PersonalContactInfo> {
        return this.getService().send({
          body: body,
          method: "put",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
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
