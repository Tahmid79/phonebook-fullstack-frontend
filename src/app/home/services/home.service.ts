import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../models/contact';
import { AuthService } from '../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  createNewContact(contact: IContact){
    const url = "http://localhost:3000/contact";
    return this.http.post(url, contact);
  }

  getAllContacts(){
    const url = "http://localhost:3000/contact";
    return this.http.get(url, {withCredentials: true});
  }

  logout(){
    this.authService.logout();
  }

}
