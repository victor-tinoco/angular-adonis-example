import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFieldListComponent } from './common-field-list.component';

describe('CommonFieldListComponent', () => {
  let component: CommonFieldListComponent;
  let fixture: ComponentFixture<CommonFieldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFieldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
