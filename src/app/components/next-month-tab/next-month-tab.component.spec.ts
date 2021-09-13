import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMonthTabComponent } from './next-month-tab.component';

describe('NextMonthTabComponent', () => {
  let component: NextMonthTabComponent;
  let fixture: ComponentFixture<NextMonthTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextMonthTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMonthTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
