// Generated Source
import { PhoneLinesInfoPhoneNumberInfo } from "./PhoneLinesInfoPhoneNumberInfo";

export interface PhoneLinesInfo {

    /**
     * Type of phone line
     */
    lineType?: "Standalone" | "StandaloneFree" | "BlaPrimary" | "BlaSecondary";

    /**
     * Phone number information
     */
    phoneInfo?: PhoneLinesInfoPhoneNumberInfo;
}