import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  coursesSearched: any;
  searchForm: FormGroup;
  constructor(private fbSearch: FormBuilder, private courseService: CoursesService) {

  }

  ngOnInit() {
    this.searchForm = this.fbSearch.group
      ({
        title: ['', Validators.required]
      });
  }

  searchByTitle(course: any)
   {
    console.log('here course title', course);
    this.courseService.search(course).subscribe(
      (data) => {
        console.log('here received data from BE', data.findedSearchedCourses)
        this.coursesSearched = data.findedSearchedCourses;
      });

  }

  getCoursesByTitle(course:any)
  {
    console.log('here course title', course);
    this.courseService.searchByCourseTitle(course).subscribe(
      (data) => {
        console.log('here received data from BE', data.findedSearchedCourses)
        this.coursesSearched = data.findedSearchedCourses;
      });
  }

}
