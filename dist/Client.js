"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = __importDefault(require("./paths/Account"));
var ClientInfo_1 = __importDefault(require("./paths/ClientInfo"));
var Dictionary_1 = __importDefault(require("./paths/Dictionary"));
var Glip_1 = __importDefault(require("./paths/Glip"));
var NumberParser_1 = __importDefault(require("./paths/NumberParser"));
var Subscription_1 = __importDefault(require("./paths/Subscription"));
var Client = /** @class */ (function () {
    function Client(sv) {
        this.service = sv;
    }
    Client.prototype.account = function (id) {
        return new Account_1.default(null, id, this.service.platform());
    };
    Client.prototype.clientInfo = function (id) {
        return new ClientInfo_1.default(null, id, this.service.platform());
    };
    Client.prototype.dictionary = function (id) {
        return new Dictionary_1.default(null, id, this.service.platform());
    };
    Client.prototype.numberParser = function (id) {
        return new NumberParser_1.default(null, id, this.service.platform());
    };
    Client.prototype.subscription = function (id) {
        return new Subscription_1.default(null, id, this.service.platform());
    };
    Client.prototype.glip = function (id) {
        return new Glip_1.default(null, id, this.service.platform());
    };
    return Client;
}());
exports.Client = Client;
exports.default = Client;
var SERVER_PRODUCTION = "https://platform.ringcentral.com";
exports.SERVER_PRODUCTION = SERVER_PRODUCTION;
var SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";
exports.SERVER_SANDBOX = SERVER_SANDBOX;
//# sourceMappingURL=Client.js.map