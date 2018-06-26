// Generated Source

interface ExtensionInfoGrants {

    /**
     * Internal identifier of an extension
     */
    id?: string;

    /**
     * Canonical URI of an extension
     */
    uri?: string;

    /**
     * Extension short number (usually 3 or 4 digits)
     */
    extensionNumber?: string;

    /**
     * Extension type
     */
    type?: "User" | "Fax User" | "VirtualUser" | "DigitalUser" | "Department" | "Announcement" | "Voicemail" | "SharedLinesGroup" | "PagingOnly" | "IvrMenu" | "ApplicationExtension" | "Park Location";
}

export default ExtensionInfoGrants;
