import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  activeMenu = false;

  constructor() { }

  ngOnInit(): void{
  }

  toogleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}
