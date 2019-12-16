import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
// import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payment-client';
  token = localStorage.getItem('token');

  constructor( private authService: AuthService) {

  }

  loggedOut() {
    this.authService.logout();
    window.location.reload();
  }

}
