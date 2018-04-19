import { TestBed, async } from '@angular/core/testing';
import { CreatePaymentDetailComponent } from './create-payment-details.component';
import { FormsModule } from '@angular/forms';
import { PaymentDetailService } from '../../shared/services/paymentDetail.service';
import { CreatePaymentDetailView } from '../../shared/entities/paymentDetail/createPaymentDetailView';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { debug } from 'util';

export class PaymentDetailServiceMock{
    constructor() {

    }
    public create(model: CreatePaymentDetailView): Observable<void> {
        return Observable.of();
    }
}

describe('CreatePaymentDetailComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [
                CreatePaymentDetailComponent
            ],
            providers: [
                { provide: PaymentDetailService, useClass: PaymentDetailServiceMock }
            ]
        }).compileComponents();
    }));

    it('should create the CreatePaymentDetailComponent', async(() => {
        const fixture = TestBed.createComponent(CreatePaymentDetailComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should get success', async(() => {
        const fixture = TestBed.createComponent(CreatePaymentDetailComponent);
        fixture.detectChanges();
        const app: CreatePaymentDetailComponent = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "accountname";
        app.paymentDetail.accountNumber = 12542352352;
        app.paymentDetail.bsb = "bsb";
        app.paymentDetail.paymentAmount = 1000;
        app.paymentDetail.reference = "reference";
        app.save();
        expect(app.resultMessage).toEqual("");
    }));

    it('should get error AccountName is required', async(() => {
        const fixture = TestBed.createComponent(CreatePaymentDetailComponent);
        fixture.detectChanges();
        const app: CreatePaymentDetailComponent = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "";
        app.paymentDetail.accountNumber = 12542352352;
        app.paymentDetail.bsb = "bsb";
        app.paymentDetail.paymentAmount = 1000;
        app.save();
        expect(app.resultMessage).toEqual("AccountName is required!");
    }));

    it('should get error AccountNumber is required', async(() => {
        const fixture = TestBed.createComponent(CreatePaymentDetailComponent);
        fixture.detectChanges();
        const app: CreatePaymentDetailComponent = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "accountname";
        app.paymentDetail.accountNumber = -5;
        app.paymentDetail.bsb = "bsb";
        app.paymentDetail.paymentAmount = 1000;
        app.paymentDetail.reference = "reference";
        app.save();
        expect(app.resultMessage).toEqual("AccountNumber is required!");
    }));

    it('should get error BSB is required', async(() => {
        const fixture = TestBed.createComponent(CreatePaymentDetailComponent);
        fixture.detectChanges();
        const app: CreatePaymentDetailComponent = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "accountname";
        app.paymentDetail.accountNumber = 12542352352;
        app.paymentDetail.bsb = "";
        app.paymentDetail.paymentAmount = 1000;
        app.paymentDetail.reference = "reference";
        app.save();
        expect(app.resultMessage).toEqual("BSB is required!");
    }));

    it('should get error paymentAmount is required', async(() => {
        const fixture = TestBed.createComponent(CreatePaymentDetailComponent);
        fixture.detectChanges();
        const app: CreatePaymentDetailComponent = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "accountname";
        app.paymentDetail.accountNumber = 12542352352;
        app.paymentDetail.bsb = "bsb";
        app.paymentDetail.paymentAmount = -1000;
        app.paymentDetail.reference = "reference";
        app.save();
        expect(app.resultMessage).toEqual("PaymentAmount is required!");
    }));

    it('should get error reference is required', async(() => {
        const fixture = TestBed.createComponent(CreatePaymentDetailComponent);
        fixture.detectChanges();
        const app: CreatePaymentDetailComponent = fixture.debugElement.componentInstance;
        app.paymentDetail.accountName = "accountname";
        app.paymentDetail.accountNumber = 12542352352;
        app.paymentDetail.bsb = "bsb";
        app.paymentDetail.paymentAmount = 1000;
        app.paymentDetail.reference = "";
        app.save();
        expect(app.resultMessage).toEqual("Reference is required!");
    }));

});
