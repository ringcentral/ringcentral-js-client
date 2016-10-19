// This is Generated Source.
import UrlSection from "../../UrlSection";
import Authorize from "./Authorize";
import Revoke from "./Revoke";
import Token from "./Token";

export default class Oauth extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("oauth", id , prv, service);
    }

    /**
     * 
     */
    authorize(id?: string) {
        return new Authorize(this, id);
    }

    /**
     * 
     */
    revoke(id?: string) {
        return new Revoke(this, id);
    }

    /**
     * 
     */
    token(id?: string) {
        return new Token(this, id);
    }
}
