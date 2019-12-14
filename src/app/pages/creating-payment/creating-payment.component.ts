import { Component, OnInit } from '@angular/core';

import { PaymentService } from 'src/app/services/payment.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-creating-payment',
  templateUrl: './creating-payment.component.html',
  styleUrls: ['./creating-payment.component.css']
})
export class CreatingPaymentComponent implements OnInit {
  paymentForm = new FormGroup({
    name: new FormControl(''),
    value: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private paymentService: PaymentService) {
   }

  ngOnInit() {
  }

  createPayment() {
    this.paymentService.createPaymentinAPI(this.paymentForm.value)
        .subscribe();    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.paymentForm.value);
  }


}
