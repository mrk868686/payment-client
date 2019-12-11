import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Payments } from 'src/app/model/payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
  }

  onGetPayments() {
    this.paymentService.getPayments();
  }

  // showPayments() {
  //   this.paymentService.getPayments()
  //       .subscribe((data: Payments) => this.config = {
          
  //       });
  // }

}
