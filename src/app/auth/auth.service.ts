import { Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  error = new Subject<string>();
  
  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  ngOnInit() {
  }

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
    .then(response => {
      localStorage.setItem('token', response.data.jwt);
      this.router.navigate(['payments']);
      return response;
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
      this.error.next(error.message);
    });
  }

  logout() {
    localStorage.clear();
  }


}
