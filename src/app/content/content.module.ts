import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsComponent } from './angular/forms/forms.component';
import { RoutingComponent } from './angular/routing/routing.component';
import { HttpComponent } from './angular/http/http.component';
import { ServicesComponent } from './angular/services/services.component';
import { ObservablesComponent } from './rxjs/observables/observables.component';
import { SubjectsComponent } from './rxjs/subjects/subjects.component';
import { EnumsComponent } from './netcore/enums/enums.component';
import { SetupFoundationComponent } from './foundation/setup-foundation/setup-foundation.component';
import { ArraysComponent } from './javascript/arrays/arrays.component';
import { BindingComponent } from './angular/binding/binding.component';
import { AsyncComponent } from './rxjs/async/async.component';
import { FlexboxComponent } from './foundation/flexbox/flexbox.component';
import { FloatComponent } from './foundation/float/float.component';
import { GridsComponent } from './foundation/grids/grids.component';
import { CollectionsComponent } from './netcore/collections/collections.component';


@NgModule({
  declarations: [
    FormsComponent,
    RoutingComponent,
    HttpComponent,
    ServicesComponent,
    ObservablesComponent,
    SubjectsComponent,
    EnumsComponent,
    SetupFoundationComponent,
    ArraysComponent,
    BindingComponent,
    AsyncComponent,
    FlexboxComponent,
    FloatComponent,
    GridsComponent,
    CollectionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
