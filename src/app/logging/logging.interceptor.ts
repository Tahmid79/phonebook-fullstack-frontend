import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

// https://danielk.tech/home/angular-retry-an-http-request#create-http-interceptor
// https://www.scaler.com/topics/angular/angular-interceptor/

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Running interceptor');
    const accessToken = this.cookieService.get('accessToken');
    if(request.withCredentials && accessToken){
      const authBearer = 'Bearer ' + accessToken;
     //  request.headers.set('Authorization', authBearer);
      const authReq = request.clone({
        headers: request.headers.set('Authorization', authBearer)
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
