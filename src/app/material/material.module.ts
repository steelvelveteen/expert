import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const material = [ 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
