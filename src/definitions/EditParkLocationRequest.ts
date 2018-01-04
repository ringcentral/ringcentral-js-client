// Generated Source

interface EditParkLocationRequest {

    /**
     * List of users that will be allowed to park/unpark calls using the specified park location
     */
    addedUserIds?: string[];

    /**
     * List of users that will be unallowed to park/unpark calls using the specified park location
     */
    removedUserIds?: string[];
}

export default EditParkLocationRequest;
