import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

  onKeyEmail(event: any) {
    this.email = event.target.value;
  }

  onKeyPass(event: any) {
    this.password = event.target.value;
  }

onUserSubmit() {

// Request API.
axios
  .post('http://localhost:1337/auth/local', {
    identifier: 'user@strapi.io',
    password: 'strapiPassword',
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
}

}