import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Payment } from '../model/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentUrl =  'http://localhost:1337/payments'; 

  constructor(private http: HttpClient) { }

  getPaymentsFromAPI(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentUrl);
  }

  createPaymentinAPI(payment){
    return this.http.post(this.paymentUrl, payment);
  }

  deletePaymentinAPI( payment )  {
    return this.http.delete(this.paymentUrl + '/' + payment.id)
  }
  

  editPaymentinAPI( payment ) {
    return this.http.put(this.paymentUrl + payment.id, payment);
  }


}
