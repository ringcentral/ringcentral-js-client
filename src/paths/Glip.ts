// This is Generated Source.
import PathSegment from "../PathSegment";
import Groups from "./Groups";
import Posts from "./Posts";
import Files from "./Files";
import Cards from "./Cards";
import Persons from "./Persons";
import Companies from "./Companies";
import Webhooks from "./Webhooks";

export default class Glip extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("glip", id, prv, service);
    }

    /**
     * 
     */
    groups(id?: string) {
        return new Groups(this, id);
    }

    /**
     * 
     */
    posts(id?: string) {
        return new Posts(this, id);
    }

    /**
     * 
     */
    files(id?: string) {
        return new Files(this, id);
    }

    /**
     * card id to delete.
     */
    cards(id?: string) {
        return new Cards(this, id);
    }

    /**
     * Internal identifier of a user to be returned, the maximum number of IDs is 30
     */
    persons(id?: string) {
        return new Persons(this, id);
    }

    /**
     * Internal identifier of an RC account/Glip company, or tilde (~) to indicate a company the current user belongs to
     */
    companies(id?: string) {
        return new Companies(this, id);
    }

    /**
     * Internal identifier of a webhook
     */
    webhooks(id?: string) {
        return new Webhooks(this, id);
    }
}
