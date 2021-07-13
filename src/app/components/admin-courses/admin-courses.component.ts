import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  courses : any;
  constructor(private routerEdit :Router,private courseService:CoursesService) { }
  // function defined for code amelioration :
  getCourses()
  {
      this.courseService.getAllCourses().subscribe((data)=>
        {
          this.courses=data.findedCourses;
        }
      );
  }

  ngOnInit()
  {
    this.getCourses();
  }

  editCourse(id :any)
  {
    //alert('Edit btn cliked'+ id);
    this.routerEdit.navigate([`edit-course/${id}`]);
  }
  displayCourse(id :any)
  {
    //alert('Edit btn cliked'+ id);
    this.routerEdit.navigate([`details/${id}`]);
  }

  deleteCourse(id)
  {
    this.courseService.deleteCourse(id).subscribe(
      (data)=>{
        console.log('here Data',data.message);
        this.getCourses();
      }
    )
  
  }


}
