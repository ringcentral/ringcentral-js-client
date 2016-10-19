// Generated Source
import { RuleInfoForwardingNumberInfo } from "./RuleInfoForwardingNumberInfo";

export interface RuleInfo {

    /**
     * Forwarding number (or group) ordinal
     */
    index?: number;

    /**
     * Number of rings for a forwarding number (or group)
     */
    ringCount?: number;

    /**
     * Forwarding number (or group) data
     */
    forwardingNumbers?: RuleInfoForwardingNumberInfo[];
}