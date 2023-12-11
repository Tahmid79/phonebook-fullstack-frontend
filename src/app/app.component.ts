import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cookieService: CookieService){
    // this.cookieService.set('accessToken', 'This is the access token');
    // const at = this.cookieService.get('accessToken');
    // console.log(document.cookie);
  }
  title = 'frontend';
}
