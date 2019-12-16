import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthToken();

    const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}