/*
/account/{accountId}/call-log
/account/{accountId}/extension
/account/{accountId}/extension/{extensionId}/call-log
*/

/**
 * RingcentralClient
 */
class RingcentralClient {
    constructor() {
    }
    account(id?: string): Account {
        return new Account(id);
    }
}

/**
 * UrlParts
 */
class UrlSection {
    private name: string;
    private value: string;
    private previous: UrlSection;
    constructor(name, value?, prv?) {
        // this.sdk = sdk;
        this.name = name;
        this.value = value || null;
        this.previous = prv;
    }

    toString(): string {
        let str = "/" + this.name;
        if (this.value) {
            str += "/" + this.value;
        }
        return str;
    }

    getEndpoint(): string {
        let end: string = "";
        if (this.previous) {
            end = this.previous.getEndpoint();
        }
        return end + this;
    }
}

// url/Account.ts
/**
 * UAccount
 */
class Account extends UrlSection {
    constructor(id?) {
        super("account", id || "~");
    }
    callLog(id?) {
        return new CallLog(id, this);
    }
    extention(id?) {
        return new Extension(id, this);
    }
}

/**
 * CallLog
 */
class CallLog extends UrlSection {
    constructor(id?, prv?) {
        super("call-log", id, prv);
    }
}

/**
 * Extension
 */
class Extension extends UrlSection {
    constructor(id?, prv?) {
        super("extension", id, prv);
    }

    callLog(id?) {
        return new CallLog(id, this);
    }
}


let client = new RingcentralClient();
console.log("" + client.account().getEndpoint());
console.log("" + client.account("TheAccountId").getEndpoint());
console.log("" + client.account().callLog().getEndpoint());
console.log("" + client.account("TheAccountId").callLog("logId").getEndpoint());
console.log("" + client.account().extention("extId").getEndpoint());
console.log("" + client.account().extention("extId").callLog().getEndpoint());