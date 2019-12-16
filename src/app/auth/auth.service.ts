import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
   // store the URL so we can redirect after logging in
  redirectUrl: string = 'http://localhost:4200/home';
  authToken = localStorage.getItem('token');

  constructor() { }

  ngOnInit() {
  }


  getAuthToken() {
    return this.authToken;
}

login(email: string, password: string) {
  // Request API.
  axios
    .post('http://localhost:1337/auth/local', {
      identifier: email,
      password: password,
    })
    .then(response => {
      localStorage.setItem('token', response.data.jwt);
      this.authToken = localStorage.getItem('token');
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    });
  }

  logout() {
    localStorage.clear();
  }


}
