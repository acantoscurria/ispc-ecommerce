import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { NavDashboardComponent } from './dashboard/nav-dashboard/nav-dashboard.component';
import { SidebarDashboardComponent } from './dashboard/sidebar-dashboard/sidebar-dashboard.component';
import { FooterDashboardComponent } from './dashboard/footer-dashboard/footer-dashboard.component';
import { DashboardTemplateComponent } from './dashboard/dashboard-template/dashboard-template.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NavDashboardComponent,
    SidebarDashboardComponent,
    FooterDashboardComponent,
    DashboardTemplateComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    NavDashboardComponent,
    SidebarDashboardComponent,
    FooterDashboardComponent,
    DashboardTemplateComponent,

  ]
})
export class LayoutModule { }
