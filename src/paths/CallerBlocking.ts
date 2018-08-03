// This is Generated Source.
import CallerBlockingSettings from "../definitions/CallerBlockingSettings";
import CallerBlockingSettingsUpdate from "../definitions/CallerBlockingSettingsUpdate";
import PathSegment from "../PathSegment";
import PhoneNumbers from "./PhoneNumbers";

export default class CallerBlocking extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("caller-blocking", id, prv, service);
    }

    /**
     * 
     */
    phoneNumbers(id?: string) {
        return new PhoneNumbers(this, id);
    }

    /**
     *  Returns the current call blocking settings of a user.
     */
    get(): Promise<CallerBlockingSettings> {
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
     *  Returns the current call blocking settings of a user.
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
     *  Updates the current call blocking settings of a user.
     */
    put(body: CallerBlockingSettingsUpdate): Promise<CallerBlockingSettings> {
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
     *  Updates the current call blocking settings of a user.
     *  return {ApiResponse}
     */
    putRaw(body: CallerBlockingSettingsUpdate): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
