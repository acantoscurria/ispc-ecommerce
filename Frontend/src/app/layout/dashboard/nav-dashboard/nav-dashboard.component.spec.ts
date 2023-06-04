import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDashboardComponent } from './nav-dashboard.component';

describe('NavDashboardComponent', () => {
  let component: NavDashboardComponent;
  let fixture: ComponentFixture<NavDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
