"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductChannelAssignmentApi = void 0;
const util_1 = require("../util");
class ProductChannelAssignmentApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllChannelAssignments(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/channel-assignments`, params), page, limit);
            return response.data;
        });
    }
    createChannelAssignments(channelAssignments) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.post(`/v3/catalog/products/channel-assignments`, channelAssignments);
        });
    }
    deleteChannelAssignments(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete((0, util_1.appendQueryString)(`/v3/catalog/products/channel-assignments`, params));
        });
    }
}
exports.ProductChannelAssignmentApi = ProductChannelAssignmentApi;