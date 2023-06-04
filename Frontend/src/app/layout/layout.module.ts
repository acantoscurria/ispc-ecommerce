import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { NavDashboardComponent } from './dashboard/nav-dashboard/nav-dashboard.component';
import { SidebarDashboardComponent } from './dashboard/sidebar-dashboard/sidebar-dashboard.component';
import { FooterDashboardComponent } from './dashboard/footer-dashboard/footer-dashboard.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NavDashboardComponent,
    SidebarDashboardComponent,
    FooterDashboardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
  ]
})
export class LayoutModule { }
