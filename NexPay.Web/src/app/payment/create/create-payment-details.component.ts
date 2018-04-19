import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/services/paymentDetail.service';
import { CreatePaymentDetailView } from '../../shared/entities/paymentDetail/createPaymentDetailView';

@Component({
    selector: 'create-payment',
    templateUrl: './create-payment-details.component.html'
})

export class CreatePaymentDetailComponent implements OnInit {
    public paymentDetail: CreatePaymentDetailView = new CreatePaymentDetailView();
    public resultMessage: string;

    constructor(private paymentDetailService: PaymentDetailService) { }

    ngOnInit(): void { }

    public save(): void {
        this.resultMessage = "";
        if (!this.paymentDetail.accountName || this.paymentDetail.accountName=="") {
            this.resultMessage = "AccountName is required!";
            return;
        }
        if (!this.paymentDetail.accountNumber || this.paymentDetail.accountNumber <=0) {
            this.resultMessage = "AccountNumber is required!";
            return;
        }
        if (!this.paymentDetail.bsb || this.paymentDetail.bsb == "") {
            this.resultMessage = "BSB is required!";
            return;
        }
        if (!this.paymentDetail.paymentAmount || this.paymentDetail.paymentAmount <=0) {
            this.resultMessage = "PaymentAmount is required!";
            return;
        }
        if (!this.paymentDetail.reference || this.paymentDetail.reference == "") {
            this.resultMessage = "Reference is required!";
            return;
        }
        this.paymentDetailService.create(this.paymentDetail).subscribe(
            result => {
                this.resultMessage = "Success";
            },
            error => {
                this.resultMessage = error.error;
            }
        );
    }
}



