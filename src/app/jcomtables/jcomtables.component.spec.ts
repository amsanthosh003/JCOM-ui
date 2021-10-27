import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcomtablesComponent } from './jcomtables.component';

describe('JcomtablesComponent', () => {
  let component: JcomtablesComponent;
  let fixture: ComponentFixture<JcomtablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JcomtablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JcomtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
