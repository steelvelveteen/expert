import { NgModule } from '@angular/core';
import { 
  MatMenuModule,
  MatButtonModule
} from '@angular/material';

const material = [ MatMenuModule, MatButtonModule];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
