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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FormData = __importStar(require("form-data"));
var FaxBase_1 = __importDefault(require("./FaxBase"));
var Fax = /** @class */ (function (_super) {
    __extends(Fax, _super);
    function Fax(prv, id, service) {
        return _super.call(this, prv, id, service) || this;
    }
    /**
     *  Create and Send Fax Message
     */
    Fax.prototype.post = function (body, attachments) {
        var meta = JSON.stringify(body);
        var form = new FormData();
        var jsonType = "application/json";
        if (inNode()) {
            form.append("json", meta, { contentType: jsonType, filename: "request.json" });
            for (var _i = 0, attachments_1 = attachments; _i < attachments_1.length; _i++) {
                var atch = attachments_1[_i];
                if (typeof atch === "string") {
                    form.append("attachment", atch, { contentType: "text/plain" });
                }
                else {
                    form.append("attachment", atch);
                }
            }
        }
        else if (browserSupportBlob()) {
            form.append("json", new Blob([meta], { type: jsonType }));
            for (var _a = 0, attachments_2 = attachments; _a < attachments_2.length; _a++) {
                var atch = attachments_2[_a];
                if (typeof atch === "string") {
                    form.append("attachment", new Blob([atch], { type: "text/plain" }));
                }
                else {
                    form.append("attachment", atch);
                }
            }
        }
        else {
            return Promise.reject("Your're not in node and your environment does not support Blob or File API.");
        }
        return this.getService().post(this.getEndpoint(false), form).then(function (res) { return res.json(); });
    };
    return Fax;
}(FaxBase_1.default));
exports.default = Fax;
function inNode() {
    return typeof process !== "undefined" && !process["browser"];
}
function browserSupportBlob() {
    return typeof Blob === "function";
}
//# sourceMappingURL=Fax.js.map