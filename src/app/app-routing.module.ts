import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './pages/customer/customer.component';
import { LoginComponent } from './auth/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { EditingPaymentComponent } from './pages/payment/editing-payment/editing-payment.component';
import { CreatingPaymentComponent } from './pages/creating-payment/creating-payment.component';
import { AuthGuard } from './auth/auth.guard';
import { LoggedoutGuard } from './auth/loggedout.guard';

const routes: Routes = [
  { path: '', redirectTo: '/payments', pathMatch: 'full' },
  { path: 'customers', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedoutGuard] },
  { path: 'payments', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'edit-payment', component: EditingPaymentComponent, canActivate: [AuthGuard] },
  { path: 'creating-payment', component: CreatingPaymentComponent, canActivate: [AuthGuard] },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
