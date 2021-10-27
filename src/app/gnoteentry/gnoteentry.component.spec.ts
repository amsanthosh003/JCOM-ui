import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnoteentryComponent } from './gnoteentry.component';

describe('GnoteentryComponent', () => {
  let component: GnoteentryComponent;
  let fixture: ComponentFixture<GnoteentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnoteentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnoteentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
