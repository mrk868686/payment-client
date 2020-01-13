import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/shared/model/customer.model';
import { CustomerService } from 'src/app/shared/services/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
        .subscribe(customers => this.customers = customers);
  }

}
