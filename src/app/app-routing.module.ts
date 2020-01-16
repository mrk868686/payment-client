import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customers/components/customers/customer.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payments/components/payment/payment.component';
import { EditingPaymentComponent } from './payments/components/editing-payment/editing-payment.component';
import { CreatingPaymentComponent } from './payments/components/creating-payment/creating-payment.component';
import { AuthGuard } from './auth/auth.guard';
import { LoggedoutGuard } from './auth/loggedout.guard';
import { CustomersPaymentsComponent } from './customers/components/customers-payments/customers-payments.component';
import { CreatingCustomerComponent } from './customers/components/creating-customer/creating-customer.component';
import { EditingCustomerComponent } from './customers/components/editing-customer/editing-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/payments', pathMatch: 'full' },
  { path: 'customers', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'customers/create', component: CreatingCustomerComponent, canActivate: [AuthGuard] },
  { path: 'customers/:id', component: CustomersPaymentsComponent, canActivate: [AuthGuard] },
  { path: 'customers/:id/edit', component: EditingCustomerComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedoutGuard] },
  { path: 'payments', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'payments/create', component: CreatingPaymentComponent, canActivate: [AuthGuard] },
  // { path: 'payments/:id', component: EditingPaymentComponent, canActivate: [AuthGuard] },
  { path: 'payments/:id/edit', component: EditingPaymentComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
