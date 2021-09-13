import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwbDetailsComponent } from './dwb-details.component';

describe('DwbDetailsComponent', () => {
  let component: DwbDetailsComponent;
  let fixture: ComponentFixture<DwbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwbDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
