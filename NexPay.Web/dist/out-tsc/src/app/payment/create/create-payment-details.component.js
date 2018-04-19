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
var paymentDetail_service_1 = require("../../shared/services/paymentDetail.service");
var createPaymentDetailView_1 = require("../../shared/entities/paymentDetail/createPaymentDetailView");
var CreatePaymentDetailComponent = /** @class */ (function () {
    function CreatePaymentDetailComponent(paymentDetailService) {
        this.paymentDetailService = paymentDetailService;
        this.paymentDetail = new createPaymentDetailView_1.CreatePaymentDetailView();
    }
    CreatePaymentDetailComponent.prototype.ngOnInit = function () { };
    CreatePaymentDetailComponent.prototype.save = function () {
        var _this = this;
        this.resultMessage = "";
        if (!this.paymentDetail.accountName || this.paymentDetail.accountName == "") {
            this.resultMessage = "AccountName is required!";
            return;
        }
        if (!this.paymentDetail.accountNumber || this.paymentDetail.accountNumber <= 0) {
            this.resultMessage = "AccountNumber is required!";
            return;
        }
        if (!this.paymentDetail.bsb || this.paymentDetail.bsb == "") {
            this.resultMessage = "BSB is required!";
            return;
        }
        if (!this.paymentDetail.paymentAmount || this.paymentDetail.paymentAmount <= 0) {
            this.resultMessage = "PaymentAmount is required!";
            return;
        }
        if (!this.paymentDetail.reference || this.paymentDetail.reference == "") {
            this.resultMessage = "Reference is required!";
            return;
        }
        this.paymentDetailService.create(this.paymentDetail).subscribe(function (result) {
            _this.resultMessage = "Success";
        }, function (error) {
            _this.resultMessage = error.error;
        });
    };
    CreatePaymentDetailComponent = __decorate([
        core_1.Component({
            selector: 'create-payment',
            templateUrl: './create-payment-details.component.html'
        }),
        __metadata("design:paramtypes", [paymentDetail_service_1.PaymentDetailService])
    ], CreatePaymentDetailComponent);
    return CreatePaymentDetailComponent;
}());
exports.CreatePaymentDetailComponent = CreatePaymentDetailComponent;
//# sourceMappingURL=create-payment-details.component.js.map