import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IUser } from '../components/models/loginModels';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email: string, password: string){
    const payload = {
      email, password
    };
    const url = environment.baseUrl + 'auth/login';
    return this.http.post(url, payload);
  }

  signUp(payload: IUser){
    const url = environment.baseUrl + 'auth/signup';
    return this.http.post(url, payload);
  }

  setTokens(accessToken: string, refreshToken: string){
    this.cookieService.set('accessToken', accessToken);
    this.cookieService.set('refreshToken', refreshToken);
    // const authBearer = 'Bearer ' + accessToken;
    // this.cookieService.set('Authorization', authBearer);
  }

}
