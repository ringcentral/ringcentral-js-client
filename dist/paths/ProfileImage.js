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
// This is Generated Source.
var FormData = __importStar(require("form-data"));
var ProfileImageBase_1 = __importDefault(require("./ProfileImageBase"));
var ProfileImage = /** @class */ (function (_super) {
    __extends(ProfileImage, _super);
    function ProfileImage(prv, id, service) {
        return _super.call(this, prv, id, service) || this;
    }
    /**
     *  Update Profile Image
     */
    ProfileImage.prototype.put = function (imageData, contentType) {
        if (contentType === void 0) { contentType = "image/png"; }
        var form = new FormData();
        form.append("image", imageData, { contentType: contentType, filename: "profile." + contentType.split("/").pop() });
        return this.getService().put(this.getEndpoint(), form);
    };
    /**
     *  Update Profile Image (same as PUT)
     */
    ProfileImage.prototype.post = function (imageData, contentType) {
        if (contentType === void 0) { contentType = "image/png"; }
        var form = new FormData();
        form.append("image", imageData, { contentType: contentType, filename: "profile." + contentType.split("/").pop() });
        return this.getService().put(this.getEndpoint(), form);
    };
    return ProfileImage;
}(ProfileImageBase_1.default));
exports.default = ProfileImage;
//# sourceMappingURL=ProfileImage.js.map