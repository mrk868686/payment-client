import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/model/payment.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments: Payment[];
  payment: Payment;

  
  

  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit() {
    this.paymentService.getPaymentsFromAPI()
        .subscribe(payments => this.payments = payments);
  }

  // getPayments() {
  //   this.paymentService.getPaymentsFromAPI()
  //       .subscribe(payments => this.payments = payments);
  // }

  deletePayment(event: any, payment: Payment, i: number) {
    // const deletedPayment = payment;

    if(window.confirm('Are sure you want to delete this item ?')){
      //put your delete method logic here
      this.paymentService.deletePaymentinAPI(payment)
          .subscribe();

      this.payments.splice(i, 1);
      console.log(this.payments);
     }
  }

  editPayment(payment: Payment) {
    this.paymentService.changeSelectedPayment(payment);
    this.router.navigateByUrl('edit-payment');
  } 

}
