import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router
  ) { }
  
  isAuthenticated(){
    const accessTokenPresent = this.cookieService.get('accessToken');
    const refreshTokenPresent = this.cookieService.get('refreshToken');
    if(accessTokenPresent && refreshTokenPresent){
      return true ;
    }
    return false;
  }

  logout(){
    const url = environment.baseUrl + 'auth/logout';
    const sub = this.http.get(url, {withCredentials: true}).subscribe( response => {
      this.cookieService.delete('accessToken');
      this.cookieService.delete('refreshToken');
      this.router.navigate(['/']);
      sub.unsubscribe();
    } , error => {
    });
  }

}
