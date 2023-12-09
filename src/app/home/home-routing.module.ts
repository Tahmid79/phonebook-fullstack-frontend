import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDefaultComponent } from './components/home-default/home-default.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  { 
    path: '', component: HomeDefaultComponent,
    children: [
      { path: '' , component: ContactFormComponent },
      { path: 'list', component: ContactListComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
