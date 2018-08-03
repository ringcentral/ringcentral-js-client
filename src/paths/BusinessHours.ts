// This is Generated Source.
import GetUserBusinessHoursResponse from "../definitions/GetUserBusinessHoursResponse";
import UserBusinessHoursUpdate from "../definitions/UserBusinessHoursUpdate";
import UserBusinessHoursUpdateRequest from "../definitions/UserBusinessHoursUpdateRequest";
import PathSegment from "../PathSegment";

export default class BusinessHours extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("business-hours", id, prv, service);
    }

    /**
     *  Returns the extension user hours when answering rules are to be applied.
     */
    get(): Promise<GetUserBusinessHoursResponse> {
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
     *  Returns the extension user hours when answering rules are to be applied.
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
     *  Updates the extension user hours when answering rules are to be applied.
     */
    put(body: UserBusinessHoursUpdateRequest): Promise<UserBusinessHoursUpdate> {
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
     *  Updates the extension user hours when answering rules are to be applied.
     *  return {ApiResponse}
     */
    putRaw(body: UserBusinessHoursUpdateRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
