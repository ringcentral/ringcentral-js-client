// Generated Source

interface GlipGroupInfo {

    /**
     * Internal identifier of a group
     */
    id?: string;

    /**
     * Type of a group. 'PrivateChat' is a group of 2 members. 'Group' is a chat of 2 and more participants, the membership cannot be changed after group creation. 'Team' is a chat of 1 and more participants, the membership can be modified in future
     */
    type?: "PrivateChat" | "Group" | "Team";

    /**
     * For 'Team' group type only. Team access level
     */
    isPublic?: boolean;

    /**
     * For 'Team' group type only. Team name
     */
    name?: string;

    /**
     * For 'Team' group type only. Team description
     */
    description?: string;

    /**
     * Identifier(s) of group members
     */
    members?: string[];

    /**
     * Group creation datetime in ISO 8601 format
     */
    creationTime?: string;

    /**
     * Group last change datetime in ISO 8601 format
     */
    lastModifiedTime?: string;
}

export default GlipGroupInfo;
