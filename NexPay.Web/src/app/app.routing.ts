import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'payment',
        pathMatch: 'full',
    },
    {
        path: '',
        component: AppComponent,
        data: {
            title: 'payment'
        },
        children: [
            { path: 'payment', loadChildren: 'app/payment/payment.module#PaymentModule' }
        ]
    },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
