import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from 'src/app/shared/model/customer.model';

@Component({
  selector: 'app-editing-customer',
  templateUrl: './editing-customer.component.html',
  styleUrls: ['./editing-customer.component.css']
})
export class EditingCustomerComponent implements OnInit {
  msg = 'Payment was succesfully edited!';
  customerChange: FormGroup;
  customerId: string;
  customer: Customer;

  constructor( 
    private customerService: CustomerService, 
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('id');

    this.customerService.getCustomer(this.customerId)
      .subscribe(customer => {
        this.customer = customer;
        this.customerChange.patchValue({
          name: customer.name,
          address: customer.address,
          company: customer.company
        }); 
      });

      this.customerChange = new FormGroup({
        name: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        company: new FormControl('', Validators.required),
        expectedAt: new FormControl('', Validators.required)
      });  
  }

  onSubmit() {
    this.customerService.editCustomer(this.customerChange.value, this.customerId)
      .subscribe(customer => {
        this.customerChange.patchValue({
          name: customer.name,
          adress: customer.address,
          company: customer.company
        });
        alert(this.msg);
      });
  }

}
