import "../typings/index.d.ts";
import "../typings/ringcentral.d.ts";
import {parse as parseUrl} from "url";
import Account from "./generated/url-segments/Account";
import ClientInfo from "./generated/url-segments/ClientInfo";
import NumberPool from "./generated/url-segments/NumberPool";
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

    numberPool(): NumberPool {
        return new NumberPool(null, null, this.service.platform());
    }
}

const SERVER_PRODUCTION = "https://platform.ringcentral.com";
const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";

// Auth events
const EVT_LOGIN_START = "beforeLogin";
const EVT_LOGIN_SUCCESS = "loginSuccess";
const EVT_LOGIN_ERROR = "loginError";
const EVT_REFRESH_START = "beforeRefresh";
const EVT_REFRESH_SUCCESS = "refreshSuccess";
const EVT_REFRESH_ERROR = "refreshError";
const EVT_LOGOUT_START = "beforeLogout";
const EVT_LOGOUT_SUCCESS = "logoutSuccess";
const EVT_LOGOUT_ERROR = "logoutError";

export {
Client, // For commonjs
SERVER_PRODUCTION,
SERVER_SANDBOX,

EVT_LOGIN_START,
EVT_LOGIN_SUCCESS,
EVT_LOGIN_ERROR,
EVT_REFRESH_START,
EVT_REFRESH_SUCCESS,
EVT_REFRESH_ERROR,
EVT_LOGOUT_START,
EVT_LOGOUT_SUCCESS,
EVT_LOGOUT_ERROR
};
