import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-dashboard',
  templateUrl: './sidebar-dashboard.component.html',
  styleUrls: ['./sidebar-dashboard.component.css']
})
export class SidebarDashboardComponent {
  @Input() navActive :string = 'main-dashboard'
}
