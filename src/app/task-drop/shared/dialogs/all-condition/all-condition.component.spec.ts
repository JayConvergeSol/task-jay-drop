import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConditionComponent } from './all-condition.component';

describe('AllConditionComponent', () => {
  let component: AllConditionComponent;
  let fixture: ComponentFixture<AllConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllConditionComponent]
    });
    fixture = TestBed.createComponent(AllConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
