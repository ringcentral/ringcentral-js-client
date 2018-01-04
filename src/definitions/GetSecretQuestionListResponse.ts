// Generated Source
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";
import SecretQuestionInfo from "./SecretQuestionInfo";

interface GetSecretQuestionListResponse {

    /**
     * Canonical URI of a question list resource
     */
    uri?: string;

    /**
     * List of secret questions with their descriptions
     */
    records?: SecretQuestionInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetSecretQuestionListResponse;
