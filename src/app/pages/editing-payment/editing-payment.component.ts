import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/model/payment.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editing-payment',
  templateUrl: './editing-payment.component.html',
  styleUrls: ['./editing-payment.component.css']
})
export class EditingPaymentComponent implements OnInit {
  payments: Payment[];
  selectedRowId;
   selectedRow = {
     name: "",
     value: "",
     type: "",
     id: ""
   }
  
   paymentChange = new FormGroup({
    name: new FormControl(''),
    value: new FormControl(''),
    type: new FormControl(''),
    id: new FormControl('')
  });

  

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getPaymentsFromAPI()
        .subscribe(payments => this.payments = payments);
  }

  getPayments() {
    this.paymentService.getPaymentsFromAPI()
        .subscribe(payments => this.payments = payments);
  }

  rowSelected(event: any, payment: any){
      this.selectedRowId = payment.id // declare variable in component.
      this.selectedRow = payment;
    }  

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.paymentChange.value);
    }

    onChangeValues() {
      const changingRow = this.paymentChange.value;
      const oldRow = this.selectedRow;

      changingRow.id = oldRow.id;

      if (changingRow.name === "") {
        changingRow.name = oldRow.name
      }

      if (changingRow.value === "") {
        changingRow.value = oldRow.value
      }

      if (changingRow.type === "") {
        changingRow.type = oldRow.type
      }

      return this.paymentService.createPaymentinAPI(changingRow)
                 .subscribe(); 
    }



}
