import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{
  login = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('',[Validators.required, Validators.minLength(5)]);
  error: string;
  errorSub: Subscription;
  
  constructor(private authService: AuthService,) { }

  onUserSubmit() {
    this.authService.login(this.login.value, this.password.value);
    this.errorSub = this.authService.error.subscribe(errMessage => {
          this.error = errMessage;
        });
}
 
 ngOnDestroy() {
   this.errorSub.unsubscribe();
 }

}
