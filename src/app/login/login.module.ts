import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginDefaultComponent } from './components/login-default/login-default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    LoginDefaultComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [CookieService]
})
export class LoginModule { }
