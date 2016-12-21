// This is Generated Source.
import PathSegment from "../PathSegment";
import CallerInfo from "../definitions/CallerInfo";
import MessageInfo from "../definitions/MessageInfo";

export default class CompanyPager extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("company-pager", id, prv, service);
    }

    /**
     *  Create and Send Pager Message
     */
    post(body: PostBody): Promise<MessageInfo> {
        return this.getService().send({
          body: body,
          method: "post",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }
}

export interface PostBody {

    /**
     * Sender of a pager message. The extensionNumber property must be filled
     */
    from?: CallerInfo;

    /**
     * Internal identifier of a message this message replies to
     */
    replyOn?: number;

    /**
     * Text of a pager message. Max length is 1024 symbols (2-byte UTF-16 encoded). If a character is encoded in 4 bytes in UTF-16 it is treated as 2 characters, thus restricting the maximum message length to 512 symbols
     */
    text?: string;

    /**
     * Optional if replyOn parameter is specified. Receiver of a pager message. The extensionNumber property must be filled
     */
    to?: CallerInfo[];
}
