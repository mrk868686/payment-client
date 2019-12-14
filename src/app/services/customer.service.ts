import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customertUrl =  'http://localhost:1337/customers'; 

  constructor(private http: HttpClient) { }

  getCustomersFromAPI(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customertUrl);
  }

}
