import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPrototypeComponent } from './trainer-prototype.component';

describe('TrainerPrototypeComponent', () => {
  let component: TrainerPrototypeComponent;
  let fixture: ComponentFixture<TrainerPrototypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerPrototypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
