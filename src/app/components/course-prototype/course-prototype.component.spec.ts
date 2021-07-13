import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePrototypeComponent } from './course-prototype.component';

describe('CoursePrototypeComponent', () => {
  let component: CoursePrototypeComponent;
  let fixture: ComponentFixture<CoursePrototypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePrototypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
