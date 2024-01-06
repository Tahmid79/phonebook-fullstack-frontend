import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../models/contact';
import { AuthService } from '../../shared/services/auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  createNewContact(contact: IContact){
    const url = environment.baseUrl + 'phone-entry' ;
    return this.http.post(url, contact, { withCredentials: true });
  }

  getAllContacts(){
    const url = environment.baseUrl + 'phone-entry' ;
    return this.http.get(url, {withCredentials: true});
  }

  logout(){
    this.authService.logout();
  }

}
