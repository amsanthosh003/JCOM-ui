import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmembersComponent } from './searchmembers.component';

describe('SearchmembersComponent', () => {
  let component: SearchmembersComponent;
  let fixture: ComponentFixture<SearchmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchmembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
