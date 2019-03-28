"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PagingResult
 */
var PagingResult = /** @class */ (function () {
    function PagingResult(data) {
        this.records = data["records"];
        this.navigation = data["navigation"];
        this.paging = data["paging"];
    }
    return PagingResult;
}());
exports.default = PagingResult;
//# sourceMappingURL=PagingResult.js.map