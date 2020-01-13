import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { PaymentService } from 'src/app/shared/services/payment.service';
import { Payment } from 'src/app/shared/model/payment.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editing-payment',
  templateUrl: './editing-payment.component.html',
  styleUrls: ['./editing-payment.component.css']
})
export class EditingPaymentComponent implements OnInit {
  msg = 'Payment was succesfully edited!';
  paymentChange: FormGroup;
  paymentId: string;
  payment: Payment;

  constructor( 
    private paymentService: PaymentService, 
    private activatedRout: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.paymentId = this.activatedRout.snapshot.paramMap.get('id');

    this.paymentService.getPayment(this.paymentId)
      .subscribe(payment => {
        this.payment = payment;
        this.paymentChange.patchValue({
          name: payment.name,
          value: payment.value,
          type: payment.type,
          expectedAt: payment.expectedAt
        }); 
      });

      this.paymentChange = new FormGroup({
        name: new FormControl('', Validators.required),
        value: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required),
        expectedAt: new FormControl('', Validators.required)
      });  
  }

  onSubmit() {
    this.paymentService.editPayment(this.paymentChange.value, this.paymentId)
      .subscribe(payment => {
        this.paymentChange.patchValue({
          name: payment.name,
          value: payment.value,
          type: payment.type,
          expectedAt: payment.expectedAt
        });
        alert(this.msg);
      });
  }

}
