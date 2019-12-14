import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/model/payment.model';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments: Payment[];
  selectedRow;
  
  

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getPaymentsFromAPI()
        .subscribe(payments => this.payments = payments);
  }

  // getPayments() {
  //   this.paymentService.getPaymentsFromAPI()
  //       .subscribe(payments => this.payments = payments);
  // }

  deletePayment(event: any, payment) {
    // const deletedPayment = payment;

    if(window.confirm('Are sure you want to delete this item ?')){
      //put your delete method logic here
      this.paymentService.deletePaymentinAPI(payment)
          .subscribe();

          this.paymentService.getPaymentsFromAPI()
              .subscribe(payments => this.payments = payments);
     }


  }

 

}
