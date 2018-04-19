import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { CreatePaymentDetailComponent } from './create/create-payment-details.component';

export const routes: Routes = [
    {
        path: '',
        component: PaymentComponent,
        data: {
            title: 'Payments'
        },
        children: [{
            path: '',
            redirectTo: 'create',
            pathMatch: 'full'
        },
        { path: 'create', component: CreatePaymentDetailComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PaymentRoutingModule { };
