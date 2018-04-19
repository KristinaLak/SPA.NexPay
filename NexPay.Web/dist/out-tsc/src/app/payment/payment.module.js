"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var payment_routing_1 = require("./payment.routing");
var payment_component_1 = require("./payment.component");
var create_payment_details_component_1 = require("./create/create-payment-details.component");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var paymentDetail_service_1 = require("../shared/services/paymentDetail.service");
var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                payment_routing_1.PaymentRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            declarations: [
                payment_component_1.PaymentComponent,
                create_payment_details_component_1.CreatePaymentDetailComponent
            ],
            providers: [
                http_1.HttpClientModule,
                paymentDetail_service_1.PaymentDetailService,
                http_1.HttpClientModule
            ]
        })
    ], PaymentModule);
    return PaymentModule;
}());
exports.PaymentModule = PaymentModule;
//# sourceMappingURL=payment.module.js.map