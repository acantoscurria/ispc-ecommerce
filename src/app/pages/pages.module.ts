import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { LayoutModule } from '../layout/layout.module';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    // NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
  ]
})
export class PagesModule { }
