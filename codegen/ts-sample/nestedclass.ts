/**
 * ExtensionInfo
 */
export default class ExtensionInfo {
    id: string;
    enabled: boolean;
    static Request = class {
        static ContactInfo = class {
            name: string;
            age: number;
            static RegionalSettings = class {
                lang: string;
            };
        };
    };
}