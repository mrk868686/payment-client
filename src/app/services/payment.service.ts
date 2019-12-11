import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentUrl =  'http://localhost:1337/payments'; 

  constructor(private http: HttpClient) { }

  getPayments() {
    console.log((this.http.get(this.paymentUrl)));
  }

}
