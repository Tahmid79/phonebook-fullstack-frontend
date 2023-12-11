import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginDefaultComponent } from './components/login-default/login-default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    LoginDefaultComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [CookieService]
})
export class LoginModule { }
