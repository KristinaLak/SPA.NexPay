import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { CreatePaymentDetailView } from '../entities/paymentDetail/createPaymentDetailView';

@Injectable()
export class PaymentDetailService {
    apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = window['apiUrl'];
    }

    public create(model: CreatePaymentDetailView): Observable<void> {
        return this.http.post<void>(this.apiUrl + 'api/PaymentDetail/Create', model);
    }
}
