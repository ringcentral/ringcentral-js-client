// This is Generated Source.
import PathSegment from "../PathSegment";

export default class End extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("end", id, prv, service);
    }

    /**
     *  <p>Ends a meetings which is in progress.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [meetingId] is not found</td></tr> </tbody></table>								
     */
    post(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  <p>Ends a meetings which is in progress.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [meetingId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
