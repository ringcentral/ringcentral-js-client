// Generated Source
import UserInfo from "./UserInfo";

interface GetUserListResponse {

    /**
     * Specification links
     */
    schemas?: string[];

    /**
     * 1-based index of query result
     */
    startIndex?: number;

    /**
     * Results count
     */
    totalResults?: number;

    /**
     * List of users with detailed info
     */
    Resources?: UserInfo[];

    /**
     * Number of users displayed per page
     */
    itemsPerPage?: number;
}

export default GetUserListResponse;
