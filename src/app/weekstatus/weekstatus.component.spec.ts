import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekstatusComponent } from './weekstatus.component';

describe('WeekstatusComponent', () => {
  let component: WeekstatusComponent;
  let fixture: ComponentFixture<WeekstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
