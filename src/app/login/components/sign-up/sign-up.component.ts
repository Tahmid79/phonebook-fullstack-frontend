import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private loginService: LoginService, private router: Router){}

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  async submitForm(){
    const {email, password} = this.myForm.value;
    this.loginService.login(email, password).subscribe( (response: any) =>{
      console.log(response);
      if('accessToken' in response && 'refreshToken' in response){
        const {accessToken, refreshToken} = response;
        this.loginService.setTokens(accessToken, refreshToken);
        this.router.navigate(['home']);
      }
    }, error =>{
      console.log(error);
    });
  }

  createUser(value: {name: string, phone: string, email: string, password: string}){
    const {name, phone, email, password} = value;
    // const contact: IContact = {name, phone, email, password};
    // this.homeService.createNewContact(contact).subscribe( result => {
    //   console.log(result);
    // });
  }

}
