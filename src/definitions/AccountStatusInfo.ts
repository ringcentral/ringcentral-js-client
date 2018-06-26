// Generated Source

interface AccountStatusInfo {

    /**
     * A free-form user comment, describing the status change reason
     */
    comment?: string;

    /**
     * Type of suspension
     */
    reason?: "Voluntarily" | "Involuntarily";

    /**
     * Date until which the account will get deleted. The default value is 30 days since current date
     */
    till?: string;
}

export default AccountStatusInfo;
