import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaymentService } from 'src/app/shared/services/payment.service';
import { Payment } from 'src/app/shared/model/payment.model';

@Component({
  selector: 'app-customers-payments',
  templateUrl: './customers-payments.component.html',
  styleUrls: ['./customers-payments.component.css']
})
export class CustomersPaymentsComponent implements OnInit {
  payments;
  customerId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService,
  ) { }

  ngOnInit() {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('id');

    this.paymentService.filterPayment(`customers=${this.customerId}`)
      .subscribe(payments => this.payments = payments);
  }

  editPayment(payment: Payment) {
    this.paymentService.goToEditPayment(payment);
  } 

  deletePayment(payment: Payment, i: number) {
    if(window.confirm('Are sure you want to delete this item ?')){
      this.paymentService.deletePayment(payment)
          .subscribe(() => this.payments.splice(i, 1));
     }
  }

}