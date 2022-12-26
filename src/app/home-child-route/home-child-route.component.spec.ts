import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildRouteComponent } from './home-child-route.component';

describe('HomeChildRouteComponent', () => {
  let component: HomeChildRouteComponent;
  let fixture: ComponentFixture<HomeChildRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChildRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChildRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
