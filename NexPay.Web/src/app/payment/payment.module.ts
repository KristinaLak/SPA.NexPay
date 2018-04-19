import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment.routing';
import { PaymentComponent } from './payment.component';
import { CreatePaymentDetailComponent } from './create/create-payment-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaymentDetailService } from '../shared/services/paymentDetail.service';

@NgModule({
    imports: [
        CommonModule,
        PaymentRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        PaymentComponent,
        CreatePaymentDetailComponent
    ],
    providers: [
        HttpClientModule,
        PaymentDetailService,
        HttpClientModule
    ]
})

export class PaymentModule { }
