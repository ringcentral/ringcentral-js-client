// This is Generated Source.
import CustomCompanyGreetingInfo from "../definitions/CustomCompanyGreetingInfo";
import CustomCompanyGreetingRequest from "../definitions/CustomCompanyGreetingRequest";
import DictionaryGreetingInfo from "../definitions/DictionaryGreetingInfo";
import DictionaryGreetingList from "../definitions/DictionaryGreetingList";
import PathSegment from "../PathSegment";

export default class Greeting extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("greeting", id, prv, service);
    }

    /**
     *  Returns a list of predefined standard greetings. Custom greetings recorded by user are not returned in response to this request. See Get Extension Custom Greetings.
     */
    list(query?: ListQuery): Promise<DictionaryGreetingList> {
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
     *  Returns a list of predefined standard greetings. Custom greetings recorded by user are not returned in response to this request. See Get Extension Custom Greetings.
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
     *  Returns a standard greeting by ID.
     */
    get(): Promise<DictionaryGreetingInfo> {
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
     *  Returns a standard greeting by ID.
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
     *  Creates a custom company greeting.
     */
    post(body: CustomCompanyGreetingRequest): Promise<CustomCompanyGreetingInfo> {
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
     *  Creates a custom company greeting.
     *  return {ApiResponse}
     */
    postRaw(body: CustomCompanyGreetingRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted.
     */
    page?: number;

    /**
     * Indicates the page size (number of items).
     */
    perPage?: number;

    /**
     * Type of a greeting, specifying the case when the greeting is played
     */
    type?: "Introductory" | "Announcement" | "ConnectingMessage" | "ConnectingAudio" | "Voicemail" | "Unavailable" | "HoldMusic" | "Company";

    /**
     * Usage type of a greeting, specifying if the greeting is applied for user extension or department extension
     */
    usageType?: "UserExtensionAnsweringRule" | "ExtensionAnsweringRule" | "DepartmentExtensionAnsweringRule" | "CompanyAnsweringRule" | "CompanyAfterHoursAnsweringRule";
}
