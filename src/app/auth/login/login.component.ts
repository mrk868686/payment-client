import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  login = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('',[Validators.required, Validators.minLength(5)]);
  error: string = null;
  
  constructor(private authService: AuthService, private router: Router) { }

  onUserSubmit() {
    this.authService.login(this.login.value, this.password.value)
      .then(response => {
        if (response.data.jwt) {
          this.router.navigate(['payments']);
        } else{
          this.error = response.data.error;
        }
    });
  }
}
 
