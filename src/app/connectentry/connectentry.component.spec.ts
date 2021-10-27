import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectentryComponent } from './connectentry.component';

describe('ConnectentryComponent', () => {
  let component: ConnectentryComponent;
  let fixture: ComponentFixture<ConnectentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
