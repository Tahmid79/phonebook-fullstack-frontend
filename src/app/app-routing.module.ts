import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  // { path : '' , loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule) },
  { 
    path : 'home' ,
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule),
    canActivate: [() => true]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
