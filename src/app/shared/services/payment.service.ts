import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Payment } from '../model/payment.model';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentUrl =  environment.apiUrl + '/payments'; 
    
  constructor(private http: HttpClient) { 
  }

  getPayment(id: string): Observable<Payment> {
    return this.http.get<Payment>(this.paymentUrl  + `/${id}`);
  }

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentUrl);
  }

  createPayment( payment: FormGroup ) {
    return this.http.post<Payment>(this.paymentUrl, payment);
  }

  deletePayment( payment: Payment )  {
    return this.http.delete<Payment>(this.paymentUrl + '/' + payment.id);
  }
  

  editPayment( payment: Payment, id: string ) {
    return this.http.put<Payment>(this.paymentUrl + `/${id}`, payment);
  }

}
