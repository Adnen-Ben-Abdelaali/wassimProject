import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id:any;
  course:any;
  constructor(private activatedRoute:ActivatedRoute, private courseService:CoursesService) { }

  ngOnInit() 
  {
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   // alert(this.id);
    this.courseService.getCourseById(this.id).subscribe(
      (data)=>{
        console.log('Here data', data.findedCourse);
        this.course=data.findedCourse;
      });
  }

}
