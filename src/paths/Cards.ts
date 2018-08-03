// This is Generated Source.
import GlipMessageAttachmentInfo from "../definitions/GlipMessageAttachmentInfo";
import GlipMessageAttachmentInfoRequest from "../definitions/GlipMessageAttachmentInfoRequest";
import PathSegment from "../PathSegment";

export default class Cards extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("cards", id, prv, service);
    }

    /**
     *  Creates a new card.
     */
    post(body: GlipMessageAttachmentInfoRequest, query?: PostQuery): Promise<GlipMessageAttachmentInfo> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Creates a new card.
     *  return {ApiResponse}
     */
    postRaw(body: GlipMessageAttachmentInfoRequest, query?: PostQuery): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: query,
        });
    }

    /**
     *  Returns card(s) with given id(s).
     */
    get(): Promise<GlipMessageAttachmentInfo> {
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
     *  Returns card(s) with given id(s).
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

    /**
     *  Updates a card
     */
    put(body: GlipMessageAttachmentInfoRequest): Promise<void> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  Updates a card
     *  return {ApiResponse}
     */
    putRaw(body: GlipMessageAttachmentInfoRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  Deletes a card by ID.
     */
    delete(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  Deletes a card by ID.
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }
}

export interface PostQuery {

    /**
     * Internal identifier of a group where to create a post with the card
     */
    groupId?: number;
}
