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
// This is Generated Source.
var PathSegment_1 = __importDefault(require("../PathSegment"));
var FaxCoverPage = /** @class */ (function (_super) {
    __extends(FaxCoverPage, _super);
    function FaxCoverPage(prv, id, service) {
        return _super.call(this, "fax-cover-page", id, prv, service) || this;
    }
    /**
     *
     */
    FaxCoverPage.prototype.get = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    };
    /**
     *
     *  return {ApiResponse}
     */
    FaxCoverPage.prototype.getRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    };
    return FaxCoverPage;
}(PathSegment_1.default));
exports.default = FaxCoverPage;
//# sourceMappingURL=FaxCoverPage.js.map