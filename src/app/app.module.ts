import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { CustomerComponent } from './pages/customer/customer.component';
import { AppRoutingModule } from './app-routing.module';
import { EditingPaymentComponent } from './pages/editing-payment/editing-payment.component';
import { CreatingPaymentComponent } from './pages/creating-payment/creating-payment.component';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentComponent,
    CustomerComponent,
    EditingPaymentComponent,
    CreatingPaymentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
