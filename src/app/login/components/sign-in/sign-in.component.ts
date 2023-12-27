import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private loginService: LoginService, private router: Router){}

  myForm: FormGroup = new FormGroup({
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

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  goToSignUp(){
    this.router.navigateByUrl('signUp');
  }
}
