import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: string;
  isLoggedIn: boolean;

  constructor( private authService: AuthService) {}

  ngOnInit() {
    this.token = this.authService.getAuthToken();
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  loggedOut() {
    this.authService.logout();
  }

}
