import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDaysComponent } from './plan-days.component';

describe('PlanDaysComponent', () => {
  let component: PlanDaysComponent;
  let fixture: ComponentFixture<PlanDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
