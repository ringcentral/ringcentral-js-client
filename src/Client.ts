import {parse as parseUrl} from "url";
import Account from "./generated/url-builders/Account";
import ClientInfo from "./generated/url-builders/ClientInfo";
import NumberPool from "./generated/url-builders/NumberPool";
import * as Ringcentral from "ringcentral";

export default class Client {
    service: any;
    constructor(opts: {
        server?: string;
        appKey: string;
        appSecret: string;
    }) {
        opts.server = opts.server || SERVER_PRODUCTION;
        this.service = new Ringcentral(opts).platform();
    }

    /**
     * FIXME: Allow additional options: brand_id, display, prompte?
     */
    loginUrl(opts: {
        redirectUri: string,
        state?: string
    }): string {
        return this.service.loginUrl(opts);
    }

    login(opts: {
        // Login by password
        username?: string;
        password?: string;
        extension?: string;

        // Login by oauth
        code?: string;
        redirectUri?: string;
        
        // Common options
        accessTokenTtl?: number;
        refreshTokenTtl?: number;
        scope?: string[];
    }):Promise<void> {
        return this.service.login(opts);
    }

    getAuthCode(callbackUrl: string): string {
        let res = parseUrl(callbackUrl, true).query;
        let code  = res["code"];
        if (code) {
            return code;
        } else if (res["error_description"]) {
            let err = new Error(res["error_description"]);
            err.name = res["error"];
            err["errors"] = res["errors"];
            throw err;
        }
    }

    logout():Promise<void> {
        return this.service.logout();
    }

    account(id?: string): Account {
        return new Account(null, id, this.service);
    }

    clientInfo(): ClientInfo {
        return new ClientInfo(null, null, this.service);
    }

    numberPool(): NumberPool {
        return new NumberPool(null, null, this.service);
    }
}

const SERVER_PRODUCTION = "https://platform.ringcentral.com";
const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";

export {
Client, // For commonjs
SERVER_PRODUCTION,
SERVER_SANDBOX
};