// Generated Source
import GcmInfo from "./GcmInfo";
import GlipApnsInfo from "./GlipApnsInfo";

interface GlipUnreadMessageCountEvent {

    /**
     * Universally unique identifier of a notification
     */
    uuid?: string;

    /**
     * Apple notification data
     */
    pn_apns?: GlipApnsInfo;

    /**
     * GCM data
     */
    pn_gcm?: GcmInfo;
}

export default GlipUnreadMessageCountEvent;
