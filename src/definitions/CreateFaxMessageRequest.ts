// Generated Source
import MessageStoreCallerInfoRequest from "./MessageStoreCallerInfoRequest";

interface CreateFaxMessageRequest {

    /**
     * Recipient information. Phone number property is mandatory. Optional for resend fax request
     */
    to?: MessageStoreCallerInfoRequest[];

    /**
     * Fax resolution
     */
    resolution?: "High" | "Low";

    /**
     * The datetime to send fax at, in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. If time is not specified, the fax will be send immediately
     */
    sendTime?: string;

    /**
     * Optional. Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols
     */
    coverPageText?: string;

    /**
     * Internal identifier of the original fax message which needs to be resent. Mandatory for resend fax request
     */
    originalMessageId?: string;
}

export default CreateFaxMessageRequest;
