import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  createNewContact(contact: IContact){
    const url = "http://localhost:3000/contact";
    return this.http.post(url, contact);
  }

  getAllContacts(){
    const url = "http://localhost:3000/contact";
    return this.http.get(url);
  }

}
