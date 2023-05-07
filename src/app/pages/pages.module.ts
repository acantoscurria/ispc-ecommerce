import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { LayoutModule } from '../layout/layout.module';
import { NavbarComponent } from '../layout/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    // NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
  ]
})
export class PagesModule { }
