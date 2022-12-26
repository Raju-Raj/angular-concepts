import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContRouteComponent } from './cont-route.component';

describe('ContRouteComponent', () => {
  let component: ContRouteComponent;
  let fixture: ComponentFixture<ContRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
