import { NgModule } from '@angular/core';
import { 
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule
} from '@angular/material';

const material = [ MatMenuModule, MatButtonModule, MatSidenavModule];
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
