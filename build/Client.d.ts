import * as Ringcentral from "ringcentral";
import Account from "./paths/Account";
import ClientInfo from "./paths/ClientInfo";
import Dictionary from "./paths/Dictionary";
import Glip from "./paths/Glip";
import NumberParser from "./paths/NumberParser";
import Subscription from "./paths/Subscription";
export default class Client {
    service: Ringcentral;
    constructor(sv: Ringcentral);
    account(id?: string): Account;
    clientInfo(id?: string): ClientInfo;
    dictionary(id?: string): Dictionary;
    numberParser(id?: string): NumberParser;
    subscription(id?: string): Subscription;
    glip(id?: string): Glip;
}
declare const SERVER_PRODUCTION = "https://platform.ringcentral.com";
declare const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";
export { Client, // For commonjs
SERVER_PRODUCTION, SERVER_SANDBOX, };
