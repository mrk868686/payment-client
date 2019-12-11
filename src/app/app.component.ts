import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payment-client';

  constructor(private auth: AuthService) {}

  isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
