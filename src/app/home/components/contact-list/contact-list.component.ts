import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: any = [];

  constructor(private homeService: HomeService){}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    this.homeService.getAllContacts().subscribe( (response) => {
      this.contacts = response;
    });
  }

}
