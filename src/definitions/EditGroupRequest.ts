// Generated Source

interface EditGroupRequest {

    /**
     * List of users to be added to the team
     */
    addedPersonIds?: string[];

    /**
     * List of user email addresses to be added to the team (i.e. as guests)
     */
    addedPersonEmails?: string[];

    /**
     * List of users to be removed from the team
     */
    removedPersonIds?: string[];
}

export default EditGroupRequest;
