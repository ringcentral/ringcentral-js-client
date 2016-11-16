import { parse as parseUrl } from "url";
import Account from "./paths/Account";
import ClientInfo from "./paths/ClientInfo";
import NumberPool from "./paths/NumberPool";
import NumberParser from "./paths/NumberParser";
import Dictionary from "./paths/Dictionary";
import Subscription from "./paths/Subscription";
import * as Ringcentral from "ringcentral";

export default class Client {

    service: Ringcentral;

    constructor(opts: {
        server?: string;
        appKey: string;
        appSecret: string;
    } | Ringcentral) {
        if (opts instanceof Ringcentral) {
            this.service = opts;
        } else {
            opts.server = opts.server || SERVER_PRODUCTION;
            this.service = new Ringcentral(opts);
        }
    }

    /**
     * FIXME: Allow additional options: brand_id, display, prompte?
     */
    loginUrl(opts: {
        redirectUri: string,
        state?: string
    }): string {
        return this.service.platform().loginUrl(opts);
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
    }): Promise<void> {
        return this.service.platform().login(opts);
    }

    getAuthCode(callbackUrl: string): string {
        let res = parseUrl(callbackUrl, true).query;
        let code = res["code"];
        if (code) {
            return code;
        } else if (res["error_description"]) {
            let err = new Error(res["error_description"]);
            err.name = res["error"];
            err["errors"] = res["errors"];
            throw err;
        }
    }

    logout(): Promise<void> {
        return this.service.platform().logout();
    }

    on(evtName: string, handler: Function) {
        this.service.platform().on(evtName, handler);
    }

    createSubscription() {
        return this.service.createSubscription();
    }

    /** Returns a promise that resovles if access token is valid or refresh token is valid, and refresh the token if needed. */
    ensureLoggedIn(): Promise<void> {
        return this.service.platform().ensureLoggedIn();
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

// Auth events
const EVENT_LOGIN_START = "beforeLogin";
const EVENT_LOGIN_SUCCESS = "loginSuccess";
const EVENT_LOGIN_ERROR = "loginError";
const EVENT_REFRESH_START = "beforeRefresh";
const EVENT_REFRESH_SUCCESS = "refreshSuccess";
const EVENT_REFRESH_ERROR = "refreshError";
const EVENT_LOGOUT_START = "beforeLogout";
const EVENT_LOGOUT_SUCCESS = "logoutSuccess";
const EVENT_LOGOUT_ERROR = "logoutError";

export {
    Client, // For commonjs
    SERVER_PRODUCTION,
    SERVER_SANDBOX,

    EVENT_LOGIN_START,
    EVENT_LOGIN_SUCCESS,
    EVENT_LOGIN_ERROR,
    EVENT_REFRESH_START,
    EVENT_REFRESH_SUCCESS,
    EVENT_REFRESH_ERROR,
    EVENT_LOGOUT_START,
    EVENT_LOGOUT_SUCCESS,
    EVENT_LOGOUT_ERROR
};
