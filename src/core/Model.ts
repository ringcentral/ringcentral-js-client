export default class Model {

    json() {
        return JSON.parse(JSON.stringify(this));
    }

    getPropertyMappings(): ModelPropertyMapping[] {
        return [];
    }

    getClassName() {
        return 'Model';
    }

    getId() {
        return this['id'];
    }

}

export interface ModelPropertyMapping {
    property: string;
    Class?: typeof Model | any;
    isArray: boolean;
    isRequired: boolean;
}