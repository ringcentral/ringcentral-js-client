/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import messageinfo = require('./MessageInfo');
import messagessyncinfo = require('./MessagesSyncInfo');

export class MessageSync extends model.Model {

    /**
     * List of message records with synchronization information
     */
    records:messageinfo.MessageInfo[];

    /**
     * Sync type, token and time
     */
    syncInfo:messagessyncinfo.MessagesSyncInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: messageinfo.MessageInfo, isArray: true,isRequired: true},
            {property: 'syncInfo', Class: messagessyncinfo.MessagesSyncInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'MessageSync';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}