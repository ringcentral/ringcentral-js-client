// This is Generated Source.
import PathSegment from "../PathSegment";
import LanguageInfo from "../definitions/LanguageInfo";
import PagingResult from "../PagingResult";

export default class Language extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("language", id, prv, service);
    }

    /**
     *  Get Supported Language List
     */
    list(): Promise<PagingResult<LanguageInfo>> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(false),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Get Language by ID
     */
    get(): Promise<LanguageInfo> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }
}
