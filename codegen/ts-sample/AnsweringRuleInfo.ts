
export default class AnsweringRuleInfo {

    /**
     * Canonical URI to the answering rule resource
     */
    uri: string;

    /**
     * Type of an answering rule
     */
    type: AnsweringRuleInfoType;

    /**
     * Answering rules are applied when calling to selected number(s)
     */
    calledNumbers: CalleeInfo[];

    /**
     * Answering rules are applied when calls are received from specified caller(s)
     */
    callers: CallerInfo[];

    getPropertyMappings() {

        return [
            { property: "uri", Class: null /* string */, isArray: false, isRequired: false },
            { property: "type", Class: AnsweringRuleInfoType, isArray: false, isRequired: false },
            { property: "calledNumbers", Class: CalleeInfo, isArray: true, isRequired: false },
            { property: "callers", Class: CallerInfo, isArray: true, isRequired: false },
        ];

    }

    getClassName() {
        return "AnsweringRuleInfo";
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export class CalleeInfo {

    /**
     * Called phone number
     */
    phoneNumber: string;

    getPropertyMappings() {

        return [
            { property: "phoneNumber", Class: null /* string */, isArray: false, isRequired: false }
        ];

    }

    getClassName() {
        return "CalleeInfo";
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}


/**
    The nested class
*/
export class CallerInfo {

    /**
     * Phone number of a caller
     */
    callerId: string;

    /**
     * Contact name of a caller
     */
    name: string;

    getPropertyMappings() {

        return [
            { property: "callerId", Class: null /* string */, isArray: false, isRequired: false },
            { property: "name", Class: null /* string */, isArray: false, isRequired: false }
        ];

    }

    getClassName() {
        return "CallerInfo";
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum AnsweringRuleInfoType {
    BusinessHours,
    AfterHours,
    Custom
}

export enum AnsweringRuleInfoCallHandlingAction {
    ForwardCalls,
    TakeMessagesOnly,
    PlayAnnouncementOnly,
    UnconditionalForwarding
}