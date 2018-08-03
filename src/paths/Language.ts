// This is Generated Source.
import LanguageInfo from "../definitions/LanguageInfo";
import LanguageList from "../definitions/LanguageList";
import PathSegment from "../PathSegment";

export default class Language extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("language", id, prv, service);
    }

    /**
     *  Returns the information about supported languages.
     */
    list(): Promise<LanguageList> {
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
     *  Returns the information about supported languages.
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
     *  Returns language by ID.
     */
    get(): Promise<LanguageInfo> {
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
     *  Returns language by ID.
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
}
