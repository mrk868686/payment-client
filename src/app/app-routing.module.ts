import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customers/components/customers/customer.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payments/components/payment/payment.component';
import { EditingPaymentComponent } from './payments/components/editing-payment/editing-payment.component';
import { CreatingPaymentComponent } from './payments/components/creating-payment/creating-payment.component';
import { AuthGuard } from './auth/auth.guard';
import { LoggedoutGuard } from './auth/loggedout.guard';

const routes: Routes = [
  { path: '', redirectTo: '/payments', pathMatch: 'full' },
  { path: 'customers', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedoutGuard] },
  { path: 'payments', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'payments/:id', component: EditingPaymentComponent, canActivate: [AuthGuard] },
  { path: 'payments/:id/edit', component: EditingPaymentComponent, canActivate: [AuthGuard] },
  { path: 'payments/create', component: CreatingPaymentComponent, canActivate: [AuthGuard] }

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
