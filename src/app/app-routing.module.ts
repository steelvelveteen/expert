import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CollectionsComponent } from './content/csharp/collections/collections.component';
import { GridsComponent } from './content/foundation/grids/grids.component';
import { FloatComponent } from './content/foundation/float/float.component';
import { FormsComponent } from './content/angular/forms/forms.component';
import { RoutingComponent } from './content/angular/routing/routing.component';
import { EnumsComponent } from './content/csharp/enums/enums.component';
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
import { PagenotfoundComponent } from './content/pagenotfound/pagenotfound.component';
import { DotnetcliComponent } from './content/netcore/dotnetcli/dotnetcli.component';
import { ClosuresComponent } from './content/javascript/closures/closures.component';
import { StartupclassComponent } from './content/netcore/startupclass/startupclass.component';
import { NunitComponent } from './content/csharp/nunit/nunit.component';
import { OperatorsComponent } from './content/rxjs/operators/operators.component';
import { InstallationpgsqlComponent } from './content/postgres/installationpgsql/installationpgsql.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: AngSetupComponent },
      { path: 'setup-angular', component: AngSetupComponent },
      { path: 'binding', component: BindingComponent },
      { path: 'routing', component: RoutingComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'async', component: AsyncComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'http', component: HttpComponent },
      { path: 'enums', component: EnumsComponent },
      { path: 'collections', component: CollectionsComponent },
      { path: 'setup-foundation', component: SetupFoundationComponent },
      { path: 'flexbox', component: FlexboxComponent },
      { path: 'dotnet', component: DotnetcliComponent },
      { path: 'float', component: FloatComponent },
      { path: 'gridxy', component: GridsComponent },
      { path: 'observables', component: ObservablesComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'arrays', component: ArraysComponent },
      { path: 'closures', component: ClosuresComponent },
      { path: 'startupclass', component: StartupclassComponent },
      { path: 'nunit', component: NunitComponent },
      { path: 'installationpgsql', component: InstallationpgsqlComponent },
      { path: '*', redirectTo: '/', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
