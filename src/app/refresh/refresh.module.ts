import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RefreshInterceptor } from './refresh.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RefreshInterceptor , multi: true}
  ]
})
export class RefreshModule { }
