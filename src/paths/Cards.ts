// This is Generated Source.
import GlipMessageAttachmentInfo from "../definitions/GlipMessageAttachmentInfo";
import GlipMessageAttachmentInfoRequest from "../definitions/GlipMessageAttachmentInfoRequest";
import PathSegment from "../PathSegment";

export default class Cards extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("cards", id, prv, service);
    }

    /**
     *  <p>Creates a new card.</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Creates a new card.</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Returns card(s) with given id(s).</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Returns card(s) with given id(s).</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Updates a card</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Updates a card</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Deletes a card by ID.</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Deletes a card by ID.</p><h4>Usage Plan Group</h4><p>Medium</p>
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
