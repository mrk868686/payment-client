import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { Payment } from '../model/payment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  paymentUrl =  environment.apiUrl + '/payments'; 

  payment: Payment;
  _selectedPaymentSource = new BehaviorSubject<Payment>(this.payment);
  

  constructor(private http: HttpClient) { 
    this.payment;
    this._selectedPaymentSource.next(this.payment);
  }

  getPaymentsFromAPI(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentUrl);
  }

  createPayment( payment: string ){
    return this.http.post(this.paymentUrl, payment);
  }

  deletePaymentinAPI( payment )  {
    return this.http.delete(this.paymentUrl + '/' + payment.id);
  }
  

  editPaymentinAPI( payment ) {
    return this.http.put(this.paymentUrl + payment.id, payment);
  }

  changeSelectedPayment(payment: Payment) {
    this.payment = payment;
    this._selectedPaymentSource.next(this.payment);
  }

}
