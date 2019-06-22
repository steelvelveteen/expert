import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionService } from './services/section.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DataService,
    SectionService
  ]
})
export class SharedModule { }
