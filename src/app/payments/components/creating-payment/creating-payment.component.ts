import { Component, OnInit } from '@angular/core';

import { PaymentService } from 'src/app/shared/services/payment.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-creating-payment',
  templateUrl: './creating-payment.component.html',
  styleUrls: ['./creating-payment.component.css']
})
export class CreatingPaymentComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(private paymentService: PaymentService) {
   }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.paymentService.createPayment(this.paymentForm.value)
      .subscribe(() => {
        console.warn(this.paymentForm.value);
        alert('New Payment Created!');
      });
  }


}
