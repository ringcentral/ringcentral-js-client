import UrlSection from "../../src/UrlSection";
import { AccountInfo } from "../../src/generated/AccountInfo";
import GenAccount from "../../src/generated/url-builders/Account";
import { ExtensionInfo } from "../../src/generated/ExtensionInfo";
import { MessageInfo } from "../../src/generated/MessageInfo";
import { CallerInfo } from "../../src/generated/CallerInfo";
import { PersonalContactInfo } from "../../src/generated/PersonalContactInfo";
import { BusinessAddressInfo } from "../../src/generated/BusinessAddressInfo";
import PagingResult from "../../src/PagingResult";
import Client from "../../src/Client";
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
    account(id?: string): GenAccount {
        return new GenAccount(null, id, this._service);
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

    businessAddress(id?: string) {
        return new BusinessAddress(id, this);
    }

    get(): Promise<AccountInfo> {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    }
}

/**
 * BusinessAddress
 */
class BusinessAddress extends UrlSection {
    constructor(id?: string, prv?: UrlSection) {
        super("business-address", id, prv);
    }

    /**
     * BusinessAddress sample
     *  { street: 'Simin',
         city: 'San Mateo',
         state: 'ON',
         zip: '300188',
         country: 'Canada' },
      company: 'RC',
      email: 'a7031x@ringcentral.com' }
    
      // TODO: Assume that put method allow only body parameters
    */
    put(body: {
        company?: string, /* Company business name */
        email?: string, /* Company business email address */
        businessAddress?: BusinessAddressInfo
    }): Promise<UpdateResponse> {
        return this.getService().put(this.getEndpoint(), body).then(function (data) {
            return new UpdateResponse(data);
        });
    }
}

/**
 * UpdateResponse
 */
class UpdateResponse {
    uri: string;
    company: string;
    email: string;
    businessAddress: BusinessAddressInfo;
    constructor(data) {
        this.uri = data["uri"];
        this.company = data["company"];
        this.email = data["email"];
        this.businessAddress = data["businessAddress"];
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
            return res.json();
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

    /* 
        FIXME: Assumes post doe not accept query parameters, only body parameters are accepted
        FIXME: All properties of body will be optional
    */
    post(body: {
        from?: CallerInfo,
        replyOn?: number, /* Internal identifier of a message this message replies to */
        text: string, /* Text of a pager message. Max length is 1024 symbols (2-byte UTF-16 encoded). If a character is encoded in 4 bytes in UTF-16 it is treated as 2 characters, thus restricting the maximum message length to 512 symbols */
        to: CallerInfo[]    /* Optional if replyOn parameter is specified. Receiver of a pager message. The extensionNumber property must be filled */
    }): Promise<MessageInfo> {
        return this.getService().post(this.getEndpoint(false), body).then(function (res) {
            return res.json();
        });
    }
}

auth.then(function (rcService) {
    let client = new Client(rcService);
    // # delete
    client.account().extension().callLog().delete().then(function (res) {
        console.log("delete ok", res);
    }).catch(function (e) {
        console.log("Delete fail", e);
    });

    // # put
    client.account().extension().addressBook().contact("397569004").get().then(function (contacts) {
        console.log("@@@ original contact", contacts);
        client.account().extension().addressBook().contact("397569004").put({ lastName: "updatedAt" + Date.now() }).then(function (updated) {
            console.log("Updated contact", updated);
        }).catch(function (e) {
            console.error("Fail update contact", e);
        });
    });

    // # post
    client.account().extension().addressBook().contact().post({ firstName: "Kevin" }).then(function (res) {
        console.log("Create Contact", res);
    }).catch(function (e) {
        console.error("Error", e.apiResponse._request, e);
    });

    client.account().extension().companyPager().post({
        to: [{ extensionNumber: "109" }],
        text: "test generated post pager message"
    }).then(function (msgInfo) {
        console.log(">>> Post pager message result", msgInfo);
    }).catch(function (e) {
        console.error("Fail to send company page", e);
    });

    // Get By ID
    client.account().get().then(function (ac: AccountInfo) {
        console.log(">>> My account info", ac);
    }).catch(function (e) {
        console.error("Fail to get account info", e);
    });

    // Get a list
    client.account().extension().list({ perPage: 2 }).then(function (extensionPages) {
        console.log(">>>extension list slice", extensionPages);
    }).catch(function (e) {
        console.error("Fail to get extensions", e);
    });
    /*
        client._service.get("/account/~/extension/~").then(function (res) {
            console.log("ExtensionInfo", res.json());
        });
    
        client._service.put("/account/~/extension/~", {
            contact: {
                lastName: "Stolyarchuk3"
            }
        }).then(function (res) {
            console.log("Put extension result", res.json());
        }).catch(function (e) {
            console.error("put extension error:" + e);
        });
        */

}).catch(function (e) {
    console.error("Fail to login: " + e);
});