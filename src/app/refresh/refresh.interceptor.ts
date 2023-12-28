import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class RefreshInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if(error.status === 401){
         return this.refresh().pipe(
          switchMap((response: any)=> {
            
            if('accessToken' in response && 'refreshToken' in response){
              const {accessToken, refreshToken} = response;
              this.cookieService.set('accessToken', accessToken);
              this.cookieService.set('refreshToken', refreshToken);
              
              const authBearer = 'Bearer ' + accessToken;

              const authReq = request.clone({
                headers: request.headers.set('Authorization', authBearer)
              });

              return next.handle(authReq);
            }
            this.resetTokens();
            
            return throwError(error);
          })
         ) 
        }
        return throwError(error);
      })
    );
  }
  
  refresh(){
    const url = "http://localhost:3000/auth/refresh";
    const refreshToken = this.cookieService.get('refreshToken');
    const bearerAuth = 'Bearer ' + refreshToken
    const headers= new HttpHeaders().set('Authorization', bearerAuth);

    return this.http.get(url, {headers : headers });
  }
  
  resetTokens(){
    this.cookieService.delete('accessToken');
    this.cookieService.delete('refreshToken');
  }

}
