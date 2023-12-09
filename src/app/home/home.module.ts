import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDefaultComponent } from './components/home-default/home-default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    HomeDefaultComponent,
    ContactListComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
