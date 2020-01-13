import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private jwtHelper: JwtHelperService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const authToken = this.authService.getAuthToken();
    const isExpired = this.jwtHelper.isTokenExpired(authToken);

    if (isExpired) {
      this.authService.logout();
    } else {
      const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });
      return next.handle(authReq);
    }
    
  }
}