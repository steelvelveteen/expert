import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './content/angular/forms/forms.component';
import { RoutingComponent } from './content/angular/routing/routing.component';
import { HttpComponent } from './content/angular/http/http.component';
import { ServicesComponent } from './content/angular/services/services.component';
import { ObservablesComponent } from './content/rxjs/observables/observables.component';
import { SubjectsComponent } from './content/rxjs/subjects/subjects.component';
import { EnumsComponent } from './content/netcore/enums/enums.component';
import { SetupFoundationComponent } from './content/foundation/setup-foundation/setup-foundation.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    FormsComponent,
    RoutingComponent,
    HttpComponent,
    ServicesComponent,
    ObservablesComponent,
    SubjectsComponent,
    EnumsComponent,
    SetupFoundationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
