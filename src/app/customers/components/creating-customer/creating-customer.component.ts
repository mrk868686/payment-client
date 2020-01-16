import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-creating-customer',
  templateUrl: './creating-customer.component.html',
  styleUrls: ['./creating-customer.component.css']
})
export class CreatingCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.customerService.createCustomer(this.customerForm.value)
      .subscribe(() => {
        console.warn(this.customerForm.value);
        alert('New Customer Created!');
      });
  }

}
