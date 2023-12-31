import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _login:LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler):
    Observable<HttpEvent<any>> {
    // add the JWT token to every request
    let authReq = req;
    const token = this._login.getToken();    
    if (token != null) {
        authReq = authReq.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
        })
    }
    return next.handle(authReq);
}
}

export const authInterceptorProviders = [
  {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
  },
];

