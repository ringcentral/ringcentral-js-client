"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PathSegment_1 = __importDefault(require("../PathSegment"));
var Renew_1 = __importDefault(require("./Renew"));
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    function Subscription(prv, id, service) {
        return _super.call(this, "subscription", id, prv, service) || this;
    }
    /**
     *
     */
    Subscription.prototype.renew = function (id) {
        return new Renew_1.default(this, id);
    };
    /**
     *
     */
    Subscription.prototype.list = function () {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *
     *  return {ApiResponse}
     */
    Subscription.prototype.listRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Creates a new subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    Subscription.prototype.post = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Creates a new subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    Subscription.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Returns the requested subscription.</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    Subscription.prototype.get = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Returns the requested subscription.</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    Subscription.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Renews the existent subscription if the request body is empty. If event filters are specified, calling this method modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    Subscription.prototype.put = function (body, query) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: query,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Renews the existent subscription if the request body is empty. If event filters are specified, calling this method modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    Subscription.prototype.putRaw = function (body, query) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: query,
        });
    };
    /**
     *  <p style='font-style:italic;'></p><p>Cancels the existent subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    Subscription.prototype.delete = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'></p><p>Cancels the existent subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    Subscription.prototype.deleteRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    return Subscription;
}(PathSegment_1.default));
exports.default = Subscription;
//# sourceMappingURL=Subscription.js.map