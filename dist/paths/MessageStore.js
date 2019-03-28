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
var Content_1 = __importDefault(require("./Content"));
var MessageStore = /** @class */ (function (_super) {
    __extends(MessageStore, _super);
    function MessageStore(prv, id, service) {
        return _super.call(this, "message-store", id, prv, service) || this;
    }
    /**
     * Internal identifier of a message attachment
     */
    MessageStore.prototype.content = function (id) {
        return new Content_1.default(this, id);
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.2</p><p>Returns the list of messages from an extension mailbox.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    MessageStore.prototype.list = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.2</p><p>Returns the list of messages from an extension mailbox.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    MessageStore.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    /**
     *
     */
    MessageStore.prototype.delete = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: query,
        });
    };
    /**
     *
     *  return {ApiResponse}
     */
    MessageStore.prototype.deleteRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: query,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.2</p><p>Returns individual message record(s) by the given message ID(s). The length of inbound messages is unlimited. Batch request is supported, see Batch Requests for details.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    MessageStore.prototype.get = function () {
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
     *  <p style='font-style:italic;'>Since 1.0.2</p><p>Returns individual message record(s) by the given message ID(s). The length of inbound messages is unlimited. Batch request is supported, see Batch Requests for details.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    MessageStore.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.2</p><p>Updates message(s) by ID(s). Batch request is supported, see Batch Requests for details. Currently, only the message read status updating is supported.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditMessages</td><td>Viewing and updating user messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     */
    MessageStore.prototype.put = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.2</p><p>Updates message(s) by ID(s). Batch request is supported, see Batch Requests for details. Currently, only the message read status updating is supported.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditMessages</td><td>Viewing and updating user messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    MessageStore.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return MessageStore;
}(PathSegment_1.default));
exports.default = MessageStore;
//# sourceMappingURL=MessageStore.js.map