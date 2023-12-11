import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email: string, password: string){
    const payload = {
      email, password
    };
    const url = "http://localhost:3000/auth/login";
    return this.http.post(url, payload);
  }

  setTokens(accessToken: string, refreshToken: string){
    this.cookieService.set('accessToken', accessToken);
    this.cookieService.set('refreshToken', refreshToken);
  }

}
