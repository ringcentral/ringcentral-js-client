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
        return this._send("get", false, undefined, undefined).then((res) => {
            return res.json();
        });
    }

    /**
     *  Get Language by ID
     */
    get(): Promise<LanguageInfo> {
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.json();
        });
    }
}
