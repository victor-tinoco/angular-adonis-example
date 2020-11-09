import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFieldFormComponent } from './common-field-form.component';

describe('CommonFieldFormComponent', () => {
  let component: CommonFieldFormComponent;
  let fixture: ComponentFixture<CommonFieldFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFieldFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
