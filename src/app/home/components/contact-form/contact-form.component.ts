import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { IContact } from '../../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  constructor(private homeService: HomeService){}

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  ngOnInit(): void { 
  }

  submitForm(){
    let value = this.myForm.value;
    // value = JSON.stringify(value);
    this.createContact(value);
  }

  createContact(value: IContact){
    const {name, phone, email} = value;
    const contact: IContact = {name, phone, email};
    this.homeService.createNewContact(contact).subscribe( result => {
      console.log(result);
      this.myForm.reset();
    });
  }
}
