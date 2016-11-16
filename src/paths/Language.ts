// This is Generated Source.
import UrlSection from "../../UrlSection";
import {LanguageInfo} from "../LanguageInfo";
import PagingResult from "../../PagingResult";

export default class Language extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("language", id , prv, service);
    }

    /**
        Get Supported Language List
    */
    list(): Promise<PagingResult<LanguageInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(false), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Language by ID
    */
    get(): Promise<LanguageInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }
}
