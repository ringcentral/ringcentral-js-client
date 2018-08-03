// This is Generated Source.
import INotificationSettings from "../definitions/NotificationSettings";
import NotificationSettingsUpdateRequest from "../definitions/NotificationSettingsUpdateRequest";
import PathSegment from "../PathSegment";

export default class NotificationSettings extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("notification-settings", id, prv, service);
    }

    /**
     *  Returns notification settings for the current extension.
     */
    get(): Promise<INotificationSettings> {
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
     *  Returns notification settings for the current extension.
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
     *  Updates notification settings for the current extension.
     */
    put(body: NotificationSettingsUpdateRequest): Promise<INotificationSettings> {
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
     *  Updates notification settings for the current extension.
     *  return {ApiResponse}
     */
    putRaw(body: NotificationSettingsUpdateRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
