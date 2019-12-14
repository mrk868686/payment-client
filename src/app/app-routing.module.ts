import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './pages/customer/customer.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { EditingPaymentComponent } from './pages/editing-payment/editing-payment.component';
import { CreatingPaymentComponent } from './pages/creating-payment/creating-payment.component';

const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payments', component: PaymentComponent },
  { path: 'editing-payment', component: EditingPaymentComponent },
  { path: 'creating-payment', component: CreatingPaymentComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
