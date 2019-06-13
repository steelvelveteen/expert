import { FormsComponent } from './content/angular/forms/forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingComponent } from './content/angular/routing/routing.component';
import { EnumsComponent } from './content/netcore/enums/enums.component';
import { SetupFoundationComponent } from './content/foundation/setup-foundation/setup-foundation.component';
import { ObservablesComponent } from './content/rxjs/observables/observables.component';
import { SubjectsComponent } from './content/rxjs/subjects/subjects.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'routing', component: RoutingComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'enums', component: EnumsComponent},
  { path: 'setup-foundation', component: SetupFoundationComponent},
  { path: 'observables', component: ObservablesComponent},
  { path: 'subjects', component: SubjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
