/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ServiceFeatureLimitations extends model.Model {

    /**
     * Free Digital Line service feature is turned off on UBP tier
     */
    AccountTypeLimitation:Principal account type limitation. Feature is not supported for account type;

    /**
     * Announcement Only or Take Messages Only extension types that cannot send SMS, feature is disabled because of immutable extension type limitation and it is impossible to change the type of this extension
     */
    ExtensionTypeLimitation:Principal extension type limitation. Feature is not supported for particular extension type (built-in Product restriction);

    /**
     * SMS can be turned off for a particular account/tier
     */
    AccountLimitation:Account limitation (service parameter setting at brand, tier or account level); can be changed only by RC Customer Support, or by upgrading to a different tier;

    /**
     * For Free Digital Line (FreeDL) service feature, available only if there is at least one paid digital line on this extension
     */
    ExtensionLimitation:Extension limitation, requiring chargeable action; can be changed by Account Administrator, requires chargeable action (except tier upgrades);

    /**
     * International Calling is turned off using extension permissions
     */
    InsufficientPermissions:Extension limitation, resolution is not chargeable; can be changed by Account Administrator without extra charges;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'AccountTypeLimitation', Class: Principal account type limitation. Feature is not supported for account type, isArray: false,isRequired: false},
            {property: 'ExtensionTypeLimitation', Class: Principal extension type limitation. Feature is not supported for particular extension type (built-in Product restriction), isArray: false,isRequired: false},
            {property: 'AccountLimitation', Class: Account limitation (service parameter setting at brand, tier or account level); can be changed only by RC Customer Support, or by upgrading to a different tier, isArray: false,isRequired: false},
            {property: 'ExtensionLimitation', Class: Extension limitation, requiring chargeable action; can be changed by Account Administrator, requires chargeable action (except tier upgrades), isArray: false,isRequired: false},
            {property: 'InsufficientPermissions', Class: Extension limitation, resolution is not chargeable; can be changed by Account Administrator without extra charges, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ServiceFeatureLimitations';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}