/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import presenceinfo = require('../models/PresenceInfo');
import monitoredextensions = require('../models/MonitoredExtensions');

export class Presence extends client.Client {

    /**
     * Get Extension(s) Presence Status by ID
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns presence status of an extension or several extensions by their ID(s). Batch request is supported, see Batch Requests for details.The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not
     *     returned at all) for the following extension types: Department/Announcement Only/Take Messages Only (Voicemail)/Fax User/Paging Only Group/Shared Lines Group/IVR Menu/Application Extension/Park Location.If the user requests his/her own presence status,
     *     the response contains actual presence status even if the status publication is turned off.Batch request is supported. For batch requests the number of extensions in one request is limited to 30. If more extensions are included in the request, the
     *     error code 400 Bad Request is returned with the logical error code InvalidMultipartRequest and the corresponding message 'Extension Presence Info multipart request is limited to 30 extensions'.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadPresence</td>
     *             <td>Getting user presence information</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    getPresenceStatus(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<presenceinfo.PresenceInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence', options, getPresenceStatusOptions),
                         presenceinfo.PresenceInfo);

    }

    /**
     * Get Monitored Extensions
     *
     * <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p>
     * <p>Returns list of lines - extensions which presence status can be indicated and monitored on BLF-enabled (Busy Lamp Field) devices.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadPresence</td>
     *             <td>Getting user presence information</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listMonitoredExtensions(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<monitoredextensions.MonitoredExtensions> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence/line', options, listMonitoredExtensionsOptions),
                         monitoredextensions.MonitoredExtensions);

    }

}

/**
 * Definition of options for getPresenceStatus operation
 */
export var getPresenceStatusOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];

/**
 * Definition of options for listMonitoredExtensions operation
 */
export var listMonitoredExtensionsOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];