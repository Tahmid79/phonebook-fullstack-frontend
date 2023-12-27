import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material/material.module';
import { LoggingModule } from '../logging/logging.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoggingModule
  ],
  exports: [MaterialModule]
})
export class SharedModule { }
