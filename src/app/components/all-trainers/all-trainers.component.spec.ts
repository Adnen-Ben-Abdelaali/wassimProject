import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrainersComponent } from './all-trainers.component';

describe('AllTrainersComponent', () => {
  let component: AllTrainersComponent;
  let fixture: ComponentFixture<AllTrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTrainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
