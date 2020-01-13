import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

import axios from 'axios';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private jwtHelper: JwtHelperService) { }

  getAuthToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    const token = this.getAuthToken();
    return !this.jwtHelper.isTokenExpired(token);
}

login(login: FormControl, password: FormControl) {
  // Request API.
  return axios
    .post( environment.apiUrl + '/auth/local', {
      identifier: login,
      password,
    })
  }

  logout() {
    localStorage.removeItem('token');
  }

}
