import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  error: string = null;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('',[Validators.required, Validators.minLength(5)])
    });
  }

  onUserSubmit() {
     this.authService.login(this.loginForm.controls.login.value, this.loginForm.controls.password.value)
     .then(response => {
       localStorage.setItem('token', response.data.jwt);
       this.router.navigate(['payments']);
    })
    .catch(error => {
     this.error = "Invalid password or username";
    });
   }

}
 
