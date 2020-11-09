import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaryContainerComponent } from './auxiliary-container.component';

describe('AuxiliaryContainerComponent', () => {
  let component: AuxiliaryContainerComponent;
  let fixture: ComponentFixture<AuxiliaryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliaryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
