import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/shared/model/customer.model';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];

  constructor(
    private customerService: CustomerService,
    private router: Router
    ) { }

  ngOnInit() {
    this.customerService.getCustomers()
        .subscribe(customers => {
          this.customers = customers;
        });
  }

  selectCustomer(customer: Customer) {
    this.router.navigateByUrl(`customers/${customer.id}`);
  }

  deleteCustomer(customer: Customer, i: number) {
        if(window.confirm(`Are sure you want to delete this customer: ${customer.name} ?`)){
          this.customerService.deleteCustomer(customer)
              .subscribe(() => this.customers.splice(i, 1));
        }
      }

  editCustomer(customer: Customer) {
    this.router.navigateByUrl(`customers/${customer.id}/edit`);
  }
}
