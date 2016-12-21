// This is Generated Source.
import Authorize from "./Authorize";
import PathSegment from "../PathSegment";
import Revoke from "./Revoke";
import Token from "./Token";

export default class Oauth extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("oauth", id, prv, service);
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
