"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var PaymentDetailService = /** @class */ (function () {
    function PaymentDetailService(http) {
        this.http = http;
        this.apiUrl = window['apiUrl'];
    }
    PaymentDetailService.prototype.create = function (model) {
        return this.http.post(this.apiUrl + 'api/PaymentDetail/Create', model);
    };
    PaymentDetailService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PaymentDetailService);
    return PaymentDetailService;
}());
exports.PaymentDetailService = PaymentDetailService;
//# sourceMappingURL=paymentDetail.service.js.map