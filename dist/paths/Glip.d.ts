import PathSegment from "../PathSegment";
import Companies from "./Companies";
import Groups from "./Groups";
import Persons from "./Persons";
import Files from "./Files";
import Profile from "./Profile";
export default class Glip extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     * Internal identifier of an RC account/Glip company, or tilde (~) to indicate a company the current user belongs to
     */
    companies(id?: string): Companies;
    /**
     * Id of a group to send post
     */
    groups(id?: string): Groups;
    /**
     * Internal identifier of a user to be returned, the maximum number of IDs is 30
     */
    persons(id?: string): Persons;
    /**
     * Internal identifier of file.
     */
    files(id?: string): Files;
    /**
     *
     */
    profile(id?: string): Profile;
}
