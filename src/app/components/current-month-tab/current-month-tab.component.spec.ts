import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMonthTabComponent } from './current-month-tab.component';

describe('CurrentMonthTabComponent', () => {
  let component: CurrentMonthTabComponent;
  let fixture: ComponentFixture<CurrentMonthTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMonthTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMonthTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
