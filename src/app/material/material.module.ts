import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  
} from '@angular/material';

const material = [ 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
