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
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location(prv, id, service) {
        return _super.call(this, "location", id, prv, service) || this;
    }
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns all the available locations for the certain state.</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    Location.prototype.list = function (query) {
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
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns all the available locations for the certain state.</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    Location.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    return Location;
}(PathSegment_1.default));
exports.default = Location;
//# sourceMappingURL=Location.js.map