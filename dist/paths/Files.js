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
var Files = /** @class */ (function (_super) {
    __extends(Files, _super);
    function Files(prv, id, service) {
        return _super.call(this, "files", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Posts a file.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Heavy</p>
     */
    Files.prototype.post = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: query,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Posts a file.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    Files.prototype.postRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: query,
        });
    };
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Returns a file.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    Files.prototype.get = function () {
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
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Returns a file.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    Files.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Files;
}(PathSegment_1.default));
exports.default = Files;
//# sourceMappingURL=Files.js.map