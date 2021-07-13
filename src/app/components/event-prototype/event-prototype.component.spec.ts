import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPrototypeComponent } from './event-prototype.component';

describe('EventPrototypeComponent', () => {
  let component: EventPrototypeComponent;
  let fixture: ComponentFixture<EventPrototypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPrototypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
