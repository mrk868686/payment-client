import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './pages/customer/customer.component';
import { LoginComponent } from './auth/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { EditingPaymentComponent } from './pages/editing-payment/editing-payment.component';
import { CreatingPaymentComponent } from './pages/creating-payment/creating-payment.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'customers', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'payments', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'editing-payment', component: EditingPaymentComponent, canActivate: [AuthGuard] },
  { path: 'creating-payment', component: CreatingPaymentComponent, canActivate: [AuthGuard] },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
