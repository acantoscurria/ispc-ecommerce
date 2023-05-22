import { Component,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

    constructor(private renderer: Renderer2) {


     }

    ngOnInit() {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'href', '../../../assets/dashboard/vendor/fontawesome-free/css/all.min.css');
      this.renderer.setAttribute(linkElement, 'href', '../../../../../assets/dashboard/css/sb-admin-2.min.css');
      this.renderer.appendChild(document.head, linkElement);

    }



}
