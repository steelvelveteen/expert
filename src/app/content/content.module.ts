import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { FormsComponent } from './angular/forms/forms.component';
import { RoutingComponent } from './angular/routing/routing.component';
import { HttpComponent } from './angular/http/http.component';
import { ServicesComponent } from './angular/services/services.component';
import { AngSetupComponent } from './angular/ang-setup/ang-setup.component';
import { BindingComponent } from './angular/binding/binding.component';

import { DotnetcliComponent } from './netcore/dotnetcli/dotnetcli.component';
import { StartupclassComponent } from './netcore/startupclass/startupclass.component';


import { EnumsComponent } from './csharp/enums/enums.component';
import { CollectionsComponent } from './csharp/collections/collections.component';
import { NunitComponent } from './csharp/nunit/nunit.component';


import { ObservablesComponent } from './rxjs/observables/observables.component';
import { SubjectsComponent } from './rxjs/subjects/subjects.component';
import { AsyncComponent } from './rxjs/async/async.component';

import { ArraysComponent } from './javascript/arrays/arrays.component';
import { ClosuresComponent } from './javascript/closures/closures.component';

import { SetupFoundationComponent } from './foundation/setup-foundation/setup-foundation.component';
import { FlexboxComponent } from './foundation/flexbox/flexbox.component';
import { FloatComponent } from './foundation/float/float.component';
import { GridsComponent } from './foundation/grids/grids.component';

import { InstallationComponent } from './docker/installation/installation.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OperatorsComponent } from './rxjs/operators/operators.component';
import { SetupComponent } from './webpack/setup/setup.component';
import { OptimizationComponent } from './webpack/optimization/optimization.component';
import { LoggingComponent } from './netcore/logging/logging.component';
import { InterfacesComponent } from './csharp/interfaces/interfaces.component';
import { SelectorsComponent } from './scss/selectors/selectors.component';


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
    CollectionsComponent,
    AngSetupComponent,
    PagenotfoundComponent,
    DotnetcliComponent,
    ClosuresComponent,
    StartupclassComponent,
    NunitComponent,
    InstallationComponent,
    OperatorsComponent,
    SetupComponent,
    OptimizationComponent,
    LoggingComponent,
    InterfacesComponent,
    SelectorsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ContentModule { }
