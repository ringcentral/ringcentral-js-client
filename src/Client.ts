import Account from "./generated/url-builders/Account";
import ClientInfo from "./generated/url-builders/ClientInfo";
import NumberPool from "./generated/url-builders/NumberPool";
import * as ringcentral from "ringcentral";

export default class Client {
    _service: any;
    constructor(service) {
        this._service = service.platform();
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

export {
Client, // For commonjs
SERVER_PRODUCTION,
SERVER_SANDBOX
};