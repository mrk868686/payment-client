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

  getCustomer(id: string) {
    return this.http.get<Customer>(this.customerUrl + `/${id}`);
  }

  createCustomer( customer ) {
    return this.http.post<Customer>(this.customerUrl, customer);
  }

  deleteCustomer( customer: Customer )  {
    return this.http.delete<Customer>(this.customerUrl + '/' + customer.id);
  }
  

  editCustomer( customer: Customer, id: string ) {
    return this.http.put<Customer>(this.customerUrl + `/${id}`, customer);
  }

}
