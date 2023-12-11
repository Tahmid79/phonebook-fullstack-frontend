import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor(private cookieService: CookieService) { }

  isAuthenticated(){
    const accessTokenPresent = this.cookieService.get('accessToken');
    const refreshTokenPresent = this.cookieService.get('refreshToken');
    if(accessTokenPresent && refreshTokenPresent){
      return true ;
    }
    return false;
  }
}
