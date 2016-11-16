// This is Generated Source.
import PathSegment from "../PathSegment";
import MessageInfo from "../definitions/MessageInfo";
import CallerInfo from "../definitions/CallerInfo";

export default class Sms extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("sms", id , prv, service);
    }

    /**
        Create and Send SMS Message
    */
    post(body: PostBody): Promise<MessageInfo> {
        return this.getService().send({method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    }
}

export interface PostBody {

    /**
     * Sender of an SMS message. The phoneNumber property must be filled to correspond to one of the account phone numbers which is allowed to send SMS
     */
    from?: CallerInfo;

    /**
     * Receiver of an SMS message. The phoneNumber property must be filled
     */
    to?: CallerInfo[];

    /**
     * Text of a message. Max length is 1000 symbols (2-byte UTF-16 encoded). If a character is encoded in 4 bytes in UTF-16 it is treated as 2 characters, thus restricting the maximum message length to 500 symbols
     */
    text?: string;
}
