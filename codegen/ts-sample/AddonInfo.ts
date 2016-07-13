
export default class AddonInfo {

    /**
     * Addon identifier. For HardPhones of certain types, which are compatible with this addon identifier
     */
    id: string;

    /**
     * Number of addons. For HardPhones of certain types, which are compatible with such addon identifier
     */
    count: number;

    getPropertyMappings() {

        return [
            { property: "id", Class: null /* string */, isArray: false, isRequired: false },
            { property: "count", Class: null /* number */, isArray: false, isRequired: false }
        ];

    }

    getClassName() {
        return "AddonInfo";
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}