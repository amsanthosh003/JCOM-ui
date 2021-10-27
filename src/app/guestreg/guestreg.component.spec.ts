import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestregComponent } from './guestreg.component';

describe('GuestregComponent', () => {
  let component: GuestregComponent;
  let fixture: ComponentFixture<GuestregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
