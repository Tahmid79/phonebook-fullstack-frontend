import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoggingModule } from './logging/logging.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoggingModule,
    SharedModule,
    LoginModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
