import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';


@Injectable()
export class AuthService {
  
  public getToken(): string {
    return localStorage.getItem('token');
  }


   public isAuthenticated() {
     // get the token
     const token = this.getToken();
     // return a boolean reflecting 
     // whether or not the token is expired
      if (token !== null) {
        return true;
      } else {
        return false;
      };

   }

  cachedRequests: Array<HttpRequest<any>> = [];
public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

}