// Generated Source
import MessageChange from "./MessageChange";

interface MessageEvent {

    /**
     * Internal identifier of an extension. Optional parameter
     */
    extensionId?: number;

    /**
     * The datetime when the message was last modified in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    lastUpdated?: string;

    /**
     * Message changes
     */
    changes?: MessageChange[];
}

export default MessageEvent;
