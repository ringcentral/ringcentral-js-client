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
var V2_1 = __importDefault(require("./V2"));
var Scim = /** @class */ (function (_super) {
    __extends(Scim, _super);
    function Scim(prv, id, service) {
        return _super.call(this, "scim", id, prv, service) || this;
    }
    /**
     *
     */
    Scim.prototype.v2 = function (id) {
        return new V2_1.default(this, id);
    };
    return Scim;
}(PathSegment_1.default));
exports.default = Scim;
//# sourceMappingURL=Scim.js.map