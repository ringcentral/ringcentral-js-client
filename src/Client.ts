import { SDK } from "@ringcentral/sdk";
import Account from "./paths/Account";
import ClientInfo from "./paths/ClientInfo";
import Dictionary from "./paths/Dictionary";
import Glip from "./paths/Glip";
import NumberParser from "./paths/NumberParser";
import Subscription from "./paths/Subscription";

import PathSegment from "./PathSegment";

export default class Client {

    service: SDK;

    protected _isSDKV4: boolean;

    constructor(sv: SDK, isSDKV4 = true) {
        this.service = sv;
        this._isSDKV4 = isSDKV4;
    }

    restPrefix() {
      if (!this._isSDKV4) {
          return null;
      }
      return new PathSegment("restapi/v1.0", null, null, this.service.platform());
    }

    account(id?: string): Account {
        return new Account(this.restPrefix(), id, this.service.platform());
    }

    clientInfo(id?: string): ClientInfo {
        return new ClientInfo(this.restPrefix(), id, this.service.platform());
    }

    dictionary(id?: string): Dictionary {
        return new Dictionary(this.restPrefix(), id, this.service.platform());
    }

    numberParser(id?: string): NumberParser {
        return new NumberParser(this.restPrefix(), id, this.service.platform());
    }

    subscription(id?: string): Subscription {
        return new Subscription(this.restPrefix(), id, this.service.platform());
    }

    glip(id?: string) {
        return new Glip(this.restPrefix(), id, this.service.platform());
    }
}

const SERVER_PRODUCTION = "https://platform.ringcentral.com";
const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";

export {
    Client, // For commonjs
    SERVER_PRODUCTION,
    SERVER_SANDBOX,
};
