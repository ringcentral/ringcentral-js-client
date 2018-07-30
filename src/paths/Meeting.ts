// This is Generated Source.
import MeetingRequestResource from "../definitions/MeetingRequestResource";
import MeetingResponseResource from "../definitions/MeetingResponseResource";
import MeetingsResource from "../definitions/MeetingsResource";
import PathSegment from "../PathSegment";
import End from "./End";
import ServiceInfo from "./ServiceInfo";

export default class Meeting extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("meeting", id, prv, service);
    }

    /**
     * 
     */
    end(id?: string) {
        return new End(this, id);
    }

    /**
     * 
     */
    serviceInfo(id?: string) {
        return new ServiceInfo(this, id);
    }

    /**
     *  <p>Returns a list of meetings for a particular extension. The list of meetings does not include meetings of &#39;Instant&#39; type.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    list(): Promise<MeetingsResource> {
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
     *  <p>Returns a list of meetings for a particular extension. The list of meetings does not include meetings of &#39;Instant&#39; type.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Light</p>
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

    /**
     *  <p>Creates a new meeting.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [schedule] value is invalid</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    post(body: MeetingRequestResource): Promise<void> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  <p>Creates a new meeting.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [schedule] value is invalid</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: MeetingRequestResource): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  <p>Returns a particular meetings details by ID.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [meetingId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<MeetingResponseResource> {
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
     *  <p>Returns a particular meetings details by ID.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [meetingId] is not found</td></tr> </tbody></table>								
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
     *  <p>Modifies a particular meeting.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [password] value is invalid</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    put(body: MeetingRequestResource): Promise<MeetingResponseResource> {
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
     *  <p>Modifies a particular meeting.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [password] value is invalid</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: MeetingRequestResource): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  <p>Deletes a scheduled meeting.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Deletes a scheduled meeting.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Medium</p>
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
