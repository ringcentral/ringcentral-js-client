import * as Ringcentral from "ringcentral";
import { parse as parseUrl } from "url";
import Account from "./paths/Account";
import ClientInfo from "./paths/ClientInfo";
import Dictionary from "./paths/Dictionary";
import Glip from "./paths/Glip";
import NumberParser from "./paths/NumberParser";
import Subscription from "./paths/Subscription";

export default class Client {

    service: Ringcentral;

    constructor(sv: Ringcentral) {
        this.service = sv;
    }

    account(id?: string): Account {
        return new Account(null, id, this.service.platform());
    }

    clientInfo(id?: string): ClientInfo {
        return new ClientInfo(null, id, this.service.platform());
    }

    dictionary(id?: string): Dictionary {
        return new Dictionary(null, id, this.service.platform());
    }

    numberParser(id?: string): NumberParser {
        return new NumberParser(null, id, this.service.platform());
    }

    subscription(id?: string): Subscription {
        return new Subscription(null, id, this.service.platform());
    }

    glip(id?: string) {
        return new Glip(null, id, this.service.platform());
    }
}

const SERVER_PRODUCTION = "https://platform.ringcentral.com";
const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";

export {
    Client, // For commonjs
    SERVER_PRODUCTION,
    SERVER_SANDBOX,
};
