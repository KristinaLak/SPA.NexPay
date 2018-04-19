"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var routes = [
    {
        path: '',
        redirectTo: 'payment',
        pathMatch: 'full',
    },
    {
        path: '',
        component: app_component_1.AppComponent,
        data: {
            title: 'payment'
        },
        children: [
            { path: 'payment', loadChildren: 'app/payment/payment.module#PaymentModule' }
        ]
    },
];
exports.routing = router_1.RouterModule.forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map