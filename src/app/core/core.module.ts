import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
    SidebarComponent,
    LoginComponent
  ]
})
export class CoreModule { }
