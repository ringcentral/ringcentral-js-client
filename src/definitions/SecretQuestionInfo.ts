// Generated Source

interface SecretQuestionInfo {

    /**
     * Internal identifier of a question
     */
    id?: string;

    /**
     * Internal identifier of a question type
     */
    questionType?: number;

    /**
     * Internal identifier of a question language
     */
    languageId?: string;

    /**
     * Text of a secret question shown to the end user
     */
    questionText?: string;

    /**
     * Specifies if the question is used during signup
     */
    showInSignUp?: boolean;
}

export default SecretQuestionInfo;
