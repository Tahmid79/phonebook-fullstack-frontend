import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { IContact } from '../../models/contact';

@Component({
  selector: 'app-home-default',
  templateUrl: './home-default.component.html',
  styleUrls: ['./home-default.component.scss']
})
export class HomeDefaultComponent implements OnInit{

  constructor(private homeService: HomeService){}

  ngOnInit(): void {
  }

  logout(){
    this.homeService.logout();
  }
  
}
