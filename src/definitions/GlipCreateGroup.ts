// Generated Source

interface GlipCreateGroup {

    /**
     * Type of a group to be created. 'PrivateChat' is a group of 2 members. 'Team' is a chat of 1 and more participants, the membership can be modified in future
     */
    type?: "PrivateChat" | "Team";

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
     * Identifier(s) of group members. For 'PrivateChat' group type 2 members only are supported
     */
    members?: string[];
}

export default GlipCreateGroup;
