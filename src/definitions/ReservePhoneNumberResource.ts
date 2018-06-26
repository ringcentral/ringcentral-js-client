// Generated Source

interface ReservePhoneNumberResource {

    /**
     * Phone number in E.164
     */
    phoneNumber?: string;

    /**
     * Domestic format of a phone number
     */
    formattedNumber?: string;

    /**
     * Datetime up to which the number is reserved in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. No value means that number is not reserved anymore
     */
    reservedTill?: string;

    /**
     * nternal identifier of phone number reservation; encoded data including reservation type (by brand, by account, by session), particular brand/account/session data, and reservation date and time
     */
    reservationId?: string;

    /**
     * Phone number status = ['Enabled', 'Pending', 'Disabled'],
     */
    status?: "Enabled" | "Pending" | "Disabled";

    /**
     * The error code in case of reservation/un-reservation failure = ['NumberIsAlreadyProvisioned', 'NumberReserved', 'NumberNotAvailable']
     */
    error?: "NumberIsAlreadyProvisioned" | "NumberReserved" | "NumberNotAvailable";
}

export default ReservePhoneNumberResource;
