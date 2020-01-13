import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { Payment } from 'src/app/shared/model/payment.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments: Payment[];

  constructor(
    private paymentService: PaymentService,
    private router: Router
     ) { }

  ngOnInit() {
    this.paymentService.getPayments()
        .subscribe(payments => {
          this.payments = payments;
        });
  }

  deletePayment(payment: Payment, i: number) {
    if(window.confirm('Are sure you want to delete this item ?')){
      this.paymentService.deletePayment(payment)
          .subscribe((response) => {
            this.payments.splice(i, 1);
          });
     }
  }

  editPayment(payment: Payment) {
    this.router.navigateByUrl(`payments/${payment.id}/edit`);
  } 

}
