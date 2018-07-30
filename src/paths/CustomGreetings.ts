// This is Generated Source.
import PathSegment from "../PathSegment";

export default class CustomGreetings extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("custom-greetings", id, prv, service);
    }

    /**
     *  <p>Returns call recording custom greetings.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyInfo</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    get(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  <p>Returns call recording custom greetings.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyInfo</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Deletes call recording custom greetings.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>EditCompanyInfo</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Deletes call recording custom greetings.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>EditCompanyInfo</p><h4>Usage Plan Group</h4><p>Medium</p>
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
