// Generated Source

interface AddBlockedAllowedPhoneNumber {

    /**
     * A blocked/allowed phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
     */
    phoneNumber?: string;

    /**
     * Custom name of a blocked/allowed phone number
     */
    label?: string;

    /**
     * Status of a phone number
     */
    status?: "Blocked" | "Allowed";
}

export default AddBlockedAllowedPhoneNumber;
