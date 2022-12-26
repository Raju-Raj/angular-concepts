import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipespracComponent } from './pipesprac.component';

describe('PipespracComponent', () => {
  let component: PipespracComponent;
  let fixture: ComponentFixture<PipespracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipespracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipespracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
