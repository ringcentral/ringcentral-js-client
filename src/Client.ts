import Account from "./generated/url-builders/Account";
import ClientInfo from "./generated/url-builders/ClientInfo";
import NumberPool from "./generated/url-builders/NumberPool";

export default class Client {
    _service: any;
    constructor(service) {
        this._service = service;
    }

    account(id?: string): Account {
        return new Account(null, id, this._service);
    }

    clientInfo(): ClientInfo {
        return new ClientInfo(null, null, this._service);
    }

    numberPool(): NumberPool {
        return new NumberPool(null, null, this._service);
    }
}