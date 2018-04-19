"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var payment_component_1 = require("./payment.component");
var create_payment_details_component_1 = require("./create/create-payment-details.component");
exports.routes = [
    {
        path: '',
        component: payment_component_1.PaymentComponent,
        data: {
            title: 'Payments'
        },
        children: [{
                path: '',
                redirectTo: 'create',
                pathMatch: 'full'
            },
            { path: 'create', component: create_payment_details_component_1.CreatePaymentDetailComponent },
        ]
    }
];
var PaymentRoutingModule = /** @class */ (function () {
    function PaymentRoutingModule() {
    }
    PaymentRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(exports.routes)],
            exports: [router_1.RouterModule]
        })
    ], PaymentRoutingModule);
    return PaymentRoutingModule;
}());
exports.PaymentRoutingModule = PaymentRoutingModule;
;
//# sourceMappingURL=payment.routing.js.map