import CustomCompanyGreetingInfo from "../definitions/CustomCompanyGreetingInfo";
import CustomGreetingRequest from "../definitions/CustomGreetingRequest";
import DictionaryGreetingInfo from "../definitions/DictionaryGreetingInfo";
import DictionaryGreetingList from "../definitions/DictionaryGreetingList";
import PathSegment from "../PathSegment";
export default class Greeting extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'>Since 8.2 (Release 1.0.26)</p><p>Returns a list of predefined standard greetings. Please note: Custom greetings recorded by user are not returned in response to this request. See Get Extension Custom Greetings.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>View Greetings</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    list(query?: ListQuery): Promise<DictionaryGreetingList>;
    /**
     *  <p style='font-style:italic;'>Since 8.2 (Release 1.0.26)</p><p>Returns a list of predefined standard greetings. Please note: Custom greetings recorded by user are not returned in response to this request. See Get Extension Custom Greetings.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>View Greetings</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 8.2 (Release 1.0.26)</p><p>Returns a standard greeting by ID</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>View Greetings</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     */
    get(): Promise<DictionaryGreetingInfo>;
    /**
     *  <p style='font-style:italic;'>Since 8.2 (Release 1.0.26)</p><p>Returns a standard greeting by ID</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>View Greetings</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
    /**
     *
     */
    post(body: CustomGreetingRequest): Promise<CustomCompanyGreetingInfo>;
    /**
     *
     *  return {ApiResponse}
     */
    postRaw(body: CustomGreetingRequest): Promise<any>;
}
export interface ListQuery {
    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;
    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
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