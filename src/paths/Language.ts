// This is Generated Source.
import LanguageInfo from "../definitions/LanguageInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class Language extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("language", id, prv, service);
    }

    /**
     *  Get Supported Language List
     */
    list(): Promise<PagingResult<LanguageInfo>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Supported Language List
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
     *  Get Language by ID
     */
    get(): Promise<LanguageInfo> {
        return this.getRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Language by ID
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
