// This is Generated Source.
import PathSegment from "../PathSegment";
import Companies from "./Companies";
import Groups from "./Groups";
import Persons from "./Persons";
import Files from "./Files";
import Profile from "./Profile";

export default class Glip extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("glip", id, prv, service);
    }

    /**
     * Internal identifier of an RC account/Glip company, or tilde (~) to indicate a company the current user belongs to
     */
    companies(id?: string) {
        return new Companies(this, id);
    }

    /**
     * Id of a group to send post
     */
    groups(id?: string) {
        return new Groups(this, id);
    }

    /**
     * Internal identifier of a user to be returned, the maximum number of IDs is 30
     */
    persons(id?: string) {
        return new Persons(this, id);
    }

    /**
     * Internal identifier of file.
     */
    files(id?: string) {
        return new Files(this, id);
    }

    /**
     * 
     */
    profile(id?: string) {
        return new Profile(this, id);
    }
}
