import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payments/components/payment/payment.component';
import { AuthInterceptor } from './shared/http-interceptors/auth-interceptor';
import { CustomerComponent } from './customers/components/customers/customer.component';
import { AppRoutingModule } from './app-routing.module';
import { EditingPaymentComponent } from './payments/components/editing-payment/editing-payment.component';
import { CreatingPaymentComponent } from './payments/components/creating-payment/creating-payment.component';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { NavbarComponent } from './shared/components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentComponent,
    CustomerComponent,
    EditingPaymentComponent,
    CreatingPaymentComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("token");
        }
      }
    })
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
