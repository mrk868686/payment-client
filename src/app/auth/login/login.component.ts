import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  jwt: string;
  
 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onKeyEmail(event: any) {
    this.email = event.target.value;
  }

  onKeyPass(event: any) {
    this.password = event.target.value;
  }

onUserSubmit() {
  this.authService.login(this.email, this.password);
  this.router.navigate(['/home']);
  window.location.reload();
}


}
