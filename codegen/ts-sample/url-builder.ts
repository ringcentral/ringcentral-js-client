import UrlSection from "../../src/UrlSection";
import AccountInfo from "../../src/generated/AccountInfo";
import ExtensionInfo from "../../src/generated/ExtensionInfo";
import PagingResult from "../../src/PagingResult";
import auth from "../../src/test/auth";

/*
/account/{accountId}/call-log
/account/{accountId}/extention/{extensionId}/call-log
*/

/**
 * RingcentralClient
 */
class RingcentralClient {
    _service: any;
    constructor(service) {
        this._service = service;
    }
    account(id?: string): Account {
        return new Account(this._service, id);
    }
}

// url/Account.ts
/**
 * UAccount
 */
class Account extends UrlSection {
    constructor(service, id?: string) {
        super("account", id || "~", null, service);
    }
    callLog(id?) {
        return new CallLog(id, this);
    }
    extention(id?) {
        return new Extension(id, this);
    }
    get(): Promise<AccountInfo> {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return new AccountInfo(res.json());
        });
    }
}

/**
 * CallLog
 */
class CallLog extends UrlSection {
    constructor(id?, prv?) {
        super("call-log", id, prv);
    }

    get(): Promise<CallLogInfo> {
        this.getService().get();
        return null;
    }
    list(): Promise<CallLogInfo> {
        return;
    }
}

/**
 * Promise
 */
interface Promise<T> {
    then(f: (result: T) => any): Promise<T>;
    catch(f: (e: Error) => any);
}

/**
 * CallLogInfo
 */
class CallLogInfo {
}

/**
 * Extension
 */
class Extension extends UrlSection {
    constructor(id?: string, prv?: UrlSection) {
        super("extension", id, prv);
    }

    callLog(id?) {
        return new CallLog(id, this);
    }

    list(options?: {
        page?: number, /** Indicates the page number to retrieve. Only positive number value */
        perPage?: number, /** Indicates the page size (number of items). If not specified, the val */
    }): Promise<PagingResult<ExtensionInfo>> {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult(res.json());
        });
    }
}

auth.then(function (rcService) {
    let client = new RingcentralClient(rcService);
    client.account().get().then(function (ac: AccountInfo) {
        console.log("My account info", ac);
    }).catch(function (e) {
        console.error("Fail to get account info", e);
    });
    client.account().extention().list({perPage: 2}).then(function (extensionPages) {
        console.log("extension list slice", extensionPages);
    }).catch(function (e) {
        console.error("Fail to get extensions", e);
    });
    console.log("" + client.account().getEndpoint());
    console.log("" + client.account("TheAccountId").getEndpoint());
    console.log("" + client.account().callLog().getEndpoint());
    console.log("" + client.account("TheAccountId").callLog("logId").getEndpoint());
    console.log("" + client.account().extention("extId").getEndpoint());
    console.log("" + client.account().extention("extId").callLog().getEndpoint());
});