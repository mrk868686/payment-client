import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/model/payment.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editing-payment',
  templateUrl: './editing-payment.component.html',
  styleUrls: ['./editing-payment.component.css']
})
export class EditingPaymentComponent {
  msg = 'Payment was succesfully edited!';
  payment: Payment;
  paymentChange = new FormGroup({
    name: new FormControl(''),
    value: new FormControl(''),
    type: new FormControl('')
  });

  constructor( private paymentService: PaymentService, private router: Router ) { }

    onSubmit() {

      const changingRow = this.paymentChange.value;
       const oldRow = this.payment;

       if (changingRow.name === "") {
         changingRow.name = oldRow.name
       }

       if (changingRow.value === "") {
         changingRow.value = oldRow.value
       }

       if (changingRow.type === "") {
         changingRow.type = oldRow.type
       }

       return this.paymentService.createPayment(changingRow)
                  .subscribe( data => {
                    this.router.navigate(['payments']);
                    alert(this.msg);
                  }); 
    }

    ngAfterContentChecked() {
      this.payment = this.paymentService.payment;
    }

 



}
