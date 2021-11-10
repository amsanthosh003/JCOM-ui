import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectpendingComponent } from './connectpending.component';

describe('ConnectpendingComponent', () => {
  let component: ConnectpendingComponent;
  let fixture: ComponentFixture<ConnectpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectpendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
