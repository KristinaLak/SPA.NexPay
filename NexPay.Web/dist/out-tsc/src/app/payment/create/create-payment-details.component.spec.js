"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var create_payment_details_component_1 = require("./create-payment-details.component");
var forms_1 = require("@angular/forms");
var paymentDetail_service_1 = require("../../shared/services/paymentDetail.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var PaymentDetailServiceMock = /** @class */ (function () {
    function PaymentDetailServiceMock() {
    }
    PaymentDetailServiceMock.prototype.create = function (model) {
        return Observable_1.Observable.of();
    };
    return PaymentDetailServiceMock;
}());
exports.PaymentDetailServiceMock = PaymentDetailServiceMock;
describe('CreatePaymentDetailComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [
                create_payment_details_component_1.CreatePaymentDetailComponent
            ],
            providers: [
                { provide: paymentDetail_service_1.PaymentDetailService, useClass: PaymentDetailServiceMock }
            ]
        }).compileComponents();
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(create_payment_details_component_1.CreatePaymentDetailComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should get success', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(create_payment_details_component_1.CreatePaymentDetailComponent);
        fixture.detectChanges();
        var app = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "accountname";
        app.paymentDetail.accountNumber = 12542352352;
        app.paymentDetail.bsb = "bsb";
        app.paymentDetail.paymentAmount = 1000;
        app.paymentDetail.reference = "reference";
        app.save();
        expect(app.resultMessage).toEqual("");
    }));
    it('should get error AccountName is required', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(create_payment_details_component_1.CreatePaymentDetailComponent);
        fixture.detectChanges();
        var app = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "";
        app.paymentDetail.accountNumber = 12542352352;
        app.paymentDetail.bsb = "bsb";
        app.paymentDetail.paymentAmount = 1000;
        app.save();
        expect(app.resultMessage).toEqual("AccountName is required!");
    }));
    it('should get error AccountNumber is required', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(create_payment_details_component_1.CreatePaymentDetailComponent);
        fixture.detectChanges();
        var app = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "accountname";
        app.paymentDetail.accountNumber = -5;
        app.paymentDetail.bsb = "bsb";
        app.paymentDetail.paymentAmount = 1000;
        app.paymentDetail.reference = "reference";
        app.save();
        expect(app.resultMessage).toEqual("AccountNumber is required!");
    }));
    it('should get error BSB is required', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(create_payment_details_component_1.CreatePaymentDetailComponent);
        fixture.detectChanges();
        var app = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "accountname";
        app.paymentDetail.accountNumber = 12542352352;
        app.paymentDetail.bsb = "";
        app.paymentDetail.paymentAmount = 1000;
        app.paymentDetail.reference = "reference";
        app.save();
        expect(app.resultMessage).toEqual("BSB is required!");
    }));
    it('should get error paymentAmount is required', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(create_payment_details_component_1.CreatePaymentDetailComponent);
        fixture.detectChanges();
        var app = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "accountname";
        app.paymentDetail.accountNumber = 12542352352;
        app.paymentDetail.bsb = "bsb";
        app.paymentDetail.paymentAmount = -1000;
        app.paymentDetail.reference = "reference";
        app.save();
        expect(app.resultMessage).toEqual("PaymentAmount is required!");
    }));
    it('should get error reference is required', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(create_payment_details_component_1.CreatePaymentDetailComponent);
        fixture.detectChanges();
        var app = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "accountname";
        app.paymentDetail.accountNumber = 12542352352;
        app.paymentDetail.bsb = "bsb";
        app.paymentDetail.paymentAmount = 1000;
        app.paymentDetail.reference = "";
        app.save();
        expect(app.resultMessage).toEqual("Reference is required!");
    }));
});
//# sourceMappingURL=create-payment-details.component.spec.js.map