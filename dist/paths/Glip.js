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
var Companies_1 = __importDefault(require("./Companies"));
var Groups_1 = __importDefault(require("./Groups"));
var Persons_1 = __importDefault(require("./Persons"));
var Files_1 = __importDefault(require("./Files"));
var Profile_1 = __importDefault(require("./Profile"));
var Glip = /** @class */ (function (_super) {
    __extends(Glip, _super);
    function Glip(prv, id, service) {
        return _super.call(this, "glip", id, prv, service) || this;
    }
    /**
     * Internal identifier of an RC account/Glip company, or tilde (~) to indicate a company the current user belongs to
     */
    Glip.prototype.companies = function (id) {
        return new Companies_1.default(this, id);
    };
    /**
     * Id of a group to send post
     */
    Glip.prototype.groups = function (id) {
        return new Groups_1.default(this, id);
    };
    /**
     * Internal identifier of a user to be returned, the maximum number of IDs is 30
     */
    Glip.prototype.persons = function (id) {
        return new Persons_1.default(this, id);
    };
    /**
     * Internal identifier of file.
     */
    Glip.prototype.files = function (id) {
        return new Files_1.default(this, id);
    };
    /**
     *
     */
    Glip.prototype.profile = function (id) {
        return new Profile_1.default(this, id);
    };
    return Glip;
}(PathSegment_1.default));
exports.default = Glip;
//# sourceMappingURL=Glip.js.map