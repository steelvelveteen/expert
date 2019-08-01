import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

const material = [ 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
