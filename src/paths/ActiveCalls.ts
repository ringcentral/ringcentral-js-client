// This is Generated Source.
import ExtensionActiveCallsResponse from "../definitions/ExtensionActiveCallsResponse";
import PathSegment from "../PathSegment";

export default class ActiveCalls extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("active-calls", id, prv, service);
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p><p>Returns records of all extension calls that are in progress, ordered by start time in descending order.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    list(query?: ListQuery): Promise<ExtensionActiveCallsResponse> {
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
     *  <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p><p>Returns records of all extension calls that are in progress, ordered by start time in descending order.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadCallLog</td><td>Viewing user call logs</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
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
}

export interface ListQuery {

    /**
     * The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted
     */
    direction?: ("Inbound" | "Outbound")[];

    /**
     * Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted
     */
    type?: ("Voice" | "Fax")[];

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
