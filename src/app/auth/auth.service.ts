import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import axios from 'axios';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
   isLoggedIn = false;
   token = localStorage.getItem('token');

   // store the URL so we can redirect after logging in
   redirectUrl: string;

  login() {
    if (this.token) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.clear();
  }
}