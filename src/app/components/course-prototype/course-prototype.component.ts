import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-prototype',
  templateUrl: './course-prototype.component.html',
  styleUrls: ['./course-prototype.component.css']
})

export class CoursePrototypeComponent implements OnInit
{

  @Input() courseInput:any;
  @Input() displayBtn:boolean;
  @Output() newCourses:EventEmitter<any> = new EventEmitter();
  constructor(private courseService:CoursesService) 
  { 

  }

  ngOnInit() 
  {
    
  }

  deleteCourse(id:any)
  {
      this.courseService.deleteCourse(id).subscribe(
        (data)=>
        {
          this.courseService.getAllCourses().subscribe(
            (data)=>
            {
                this.newCourses.emit(data.findedCourses);
            });
        });
  }
    
}
