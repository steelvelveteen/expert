import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionsComponent } from './content/netcore/collections/collections.component';
import { GridsComponent } from './content/foundation/grids/grids.component';
import { FloatComponent } from './content/foundation/float/float.component';
import { FormsComponent } from './content/angular/forms/forms.component';

import { RoutingComponent } from './content/angular/routing/routing.component';
import { EnumsComponent } from './content/netcore/enums/enums.component';
import { SetupFoundationComponent } from './content/foundation/setup-foundation/setup-foundation.component';
import { ObservablesComponent } from './content/rxjs/observables/observables.component';
import { SubjectsComponent } from './content/rxjs/subjects/subjects.component';
import { HttpComponent } from './content/angular/http/http.component';
import { BindingComponent } from './content/angular/binding/binding.component';
import { AsyncComponent } from './content/rxjs/async/async.component';
import { ServicesComponent } from './content/angular/services/services.component';
import { ArraysComponent } from './content/javascript/arrays/arrays.component';
import { FlexboxComponent } from './content/foundation/flexbox/flexbox.component';
import { AngSetupComponent } from './content/angular/ang-setup/ang-setup.component';

const routes: Routes = [
  { path: '*', redirectTo: '/', pathMatch: 'full'},
  { path: 'binding', component: BindingComponent},
  { path: 'routing', component: RoutingComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'async', component: AsyncComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'http', component: HttpComponent},
  { path: 'enums', component: EnumsComponent},
  { path: 'collections', component: CollectionsComponent},
  { path: 'setup-foundation', component: SetupFoundationComponent},
  { path: 'flexbox', component: FlexboxComponent},
  { path: 'float', component: FloatComponent},
  { path: 'gridxy', component: GridsComponent},
  { path: 'observables', component: ObservablesComponent},
  { path: 'subjects', component: SubjectsComponent},
  { path: 'arrays', component: ArraysComponent},
  { path: 'setup-angular', component: AngSetupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
