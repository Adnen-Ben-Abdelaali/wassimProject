import { Component, OnInit, Output } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit 
{
      coursesArray:any;
      constructor(private courseService : CoursesService) 
      {

      }

      ngOnInit()
      {
        
      this.courseService.getAllCourses().subscribe(
        (data)=>{
          console.log('Here Data is :', data)
          this.coursesArray=data.findedCourses;
        });           
      }

      updateCourses(courses:any)
      {
          this.coursesArray = courses;
      }
}
