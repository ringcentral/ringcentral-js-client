import UrlSection from "../../src/UrlSection";
import AccountInfo from "../../src/generated/AccountInfo";
import ExtensionInfo from "../../src/generated/ExtensionInfo";
import MessageInfo from "../../src/generated/MessageInfo";
import CallerInfo from "../../src/generated/CallerInfo";
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
        super("extension", id || "~", prv);
    }

    callLog(id?) {
        return new CallLog(id, this);
    }

    companyPager(id?: string) {
        return new CompanyPager(this, id);
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

/**
 * CompanyPager
 */
class CompanyPager extends UrlSection {
    constructor(prv: UrlSection, id?: string) {
        super("company-pager", id, prv);
    }

    // FIXME Assumes post doest not accept query parameters
    post(body: {
        from?: CallerInfo,
        replyOn?: number, /* Internal identifier of a message this message replies to */
        text: string, /* Text of a pager message. Max length is 1024 symbols (2-byte UTF-16 encoded). If a character is encoded in 4 bytes in UTF-16 it is treated as 2 characters, thus restricting the maximum message length to 512 symbols */
        to: CallerInfo[]    /* Optional if replyOn parameter is specified. Receiver of a pager message. The extensionNumber property must be filled */
    }): Promise<MessageInfo> {
        return this.getService().post(this.getEndpoint(false), body).then(function (res) {
            return new MessageInfo(res.json());
        });
    }
}

auth.then(function (rcService) {
    let client = new RingcentralClient(rcService);
    client.account().get().then(function (ac: AccountInfo) {
        console.log(">>> My account info", ac);
    }).catch(function (e) {
        console.error("Fail to get account info", e);
    });

    client.account().extention().list({ perPage: 2 }).then(function (extensionPages) {
        console.log(">>>extension list slice", extensionPages.records.slice(3));
    }).catch(function (e) {
        console.error("Fail to get extensions", e);
    });

    client.account().extention().companyPager().post({
        to: [new CallerInfo({ extensionNumber: "109" })],
        text: "test pager message"
    }).then(function (msgInfo) {
        console.log(">>> Post pager message result", msgInfo);
    }).catch(function (e) {
        console.error("Fail to send company page", e);
    });
}).catch(function (e) {
    console.error("Fail to login: " + e);
});