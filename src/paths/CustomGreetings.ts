// This is Generated Source.
import PathSegment from "../PathSegment";

export default class CustomGreetings extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("custom-greetings", id, prv, service);
    }

    /**
     *  Returns call recording custom greetings.
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
     *  Returns call recording custom greetings.
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
     *  Deletes call recording custom greetings.
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
     *  Deletes call recording custom greetings.
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
