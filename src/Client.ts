import * as Ringcentral from "ringcentral";
import { parse as parseUrl } from "url";
import Account from "./paths/Account";
import ClientInfo from "./paths/ClientInfo";
import Dictionary from "./paths/Dictionary";
import NumberParser from "./paths/NumberParser";
import NumberPool from "./paths/NumberPool";
import Subscription from "./paths/Subscription";

export default class Client {

    service: Ringcentral;

    constructor(sv: Ringcentral) {
        this.service = sv;
    }

    account(id?: string): Account {
        return new Account(null, id, this.service.platform());
    }

    clientInfo(): ClientInfo {
        return new ClientInfo(null, null, this.service.platform());
    }

    dictionary(): Dictionary {
        return new Dictionary(null, null, this.service.platform());
    }

    numberParser(): NumberParser {
        return new NumberParser(null, null, this.service.platform());
    }

    numberPool(): NumberPool {
        return new NumberPool(null, null, this.service.platform());
    }

    subscription(): Subscription {
        return new Subscription(null, null, this.service.platform());
    }

}

const SERVER_PRODUCTION = "https://platform.ringcentral.com";
const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";

export {
    Client, // For commonjs
    SERVER_PRODUCTION,
    SERVER_SANDBOX
};
