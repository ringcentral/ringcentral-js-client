import ContactList from "../definitions/ContactList";
import PersonalContactResource from "../definitions/PersonalContactResource";
import PathSegment from "../PathSegment";
export default class Contact extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    list(query?: ListQuery): Promise<ContactList>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Contacts</td><td>Creating, viewing, editing and deleting user personal contacts</td></tr><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    post(body: PersonalContactResource): Promise<PersonalContactResource>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Contacts</td><td>Creating, viewing, editing and deleting user personal contacts</td></tr><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    postRaw(body: PersonalContactResource): Promise<any>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    get(): Promise<PersonalContactResource>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Contacts</td><td>Creating, viewing, editing and deleting user personal contacts</td></tr><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    put(body: PersonalContactResource): Promise<PersonalContactResource>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Contacts</td><td>Creating, viewing, editing and deleting user personal contacts</td></tr><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    putRaw(body: PersonalContactResource): Promise<any>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Contacts</td><td>Creating, viewing, editing and deleting user personal contacts</td></tr><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    delete(): Promise<void>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Contacts</td><td>Creating, viewing, editing and deleting user personal contacts</td></tr><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any>;
}
export interface ListQuery {
    /**
     * If specified, only contacts whose First name or Last name start with the mentioned substring are returned. Case-insensitive
     */
    startsWith?: string;
    /**
     * Sorts results by the specified property. The default is 'First Name'
     */
    sortBy?: ("FirstName" | "LastName" | "Company")[];
    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;
    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
    /**
     *
     */
    phoneNumber?: string[];
}
