import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevMonthTabComponent } from './prev-month-tab.component';

describe('PrevMonthTabComponent', () => {
  let component: PrevMonthTabComponent;
  let fixture: ComponentFixture<PrevMonthTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevMonthTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevMonthTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
