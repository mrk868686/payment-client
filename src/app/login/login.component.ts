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
  jwt: String;
  
 

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
    identifier: this.email,
    password: this.password,
  })
  .then(response => {
    localStorage.setItem('token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
}

isAuth() {

  const token = localStorage.getItem('token');
  console.log(token);
  // Request API.
axios
.get('http://localhost:1337/posts', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
.then(response => {
  // Handle success.
  console.log('Data: ', response.data);
})
.catch(error => {
  // Handle error.
  console.log('An error occurred:', error);
});
}

}
