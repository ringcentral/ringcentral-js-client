// Generated Source

interface ExtensionInfoMonitoredLines {

    /**
     * Internal identifier of a monitored extension
     */
    id?: string;

    /**
     * Canonical URI of a monitored extension
     */
    uri?: string;

    /**
     * Brief information on a monitored extension
     */
    extensionNumber?: string;

    /**
     * Type of a monitored extension
     */
    type?: "User" | "FaxUser" | "VirtualUser" | "DigitalUser" | "Department" | "ApplicationExtension" | "ParkLocation";
}

export default ExtensionInfoMonitoredLines;
