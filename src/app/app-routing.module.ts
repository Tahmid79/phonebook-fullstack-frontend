import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { alreadyAuthenticatedGuard } from './shared/guards/already-authenticated.guard';

const routes: Routes = [
  { 
    path : '' ,
    loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule),
    canActivate: [alreadyAuthenticatedGuard],
    pathMatch: 'full'
  },
  { 
    path : 'home' ,
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
