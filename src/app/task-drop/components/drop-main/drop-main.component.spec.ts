import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMainComponent } from './drop-main.component';

describe('DropMainComponent', () => {
  let component: DropMainComponent;
  let fixture: ComponentFixture<DropMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropMainComponent]
    });
    fixture = TestBed.createComponent(DropMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
