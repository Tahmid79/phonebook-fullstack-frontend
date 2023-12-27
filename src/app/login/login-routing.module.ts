import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDefaultComponent } from './components/login-default/login-default.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '', component: LoginDefaultComponent, children: [
      { path: '', component: SignInComponent, pathMatch: 'full' },
      { path: 'signUp', component: SignUpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
