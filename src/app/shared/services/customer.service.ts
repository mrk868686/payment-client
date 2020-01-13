import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerUrl =  environment.apiUrl + '/customers'; 

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  createCustomer( Customer ) {
    return this.http.post<Customer>(this.customerUrl, Customer);
  }

  deleteCustomer( Customer: Customer )  {
    return this.http.delete<Customer>(this.customerUrl + '/' + Customer.id);
  }
  

  editCustomer( Customer: Customer ) {
    return this.http.put<Customer>(this.customerUrl + Customer.id, Customer);
  }

}
