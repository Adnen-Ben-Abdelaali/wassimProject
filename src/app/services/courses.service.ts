import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courseUrl:string='http://localhost:3001/course';

  constructor(private httpClient:HttpClient) { }

  getAllCourses(){
      return this.httpClient.get<{findedCourses:any}>(this.courseUrl);
  }

  getCourseById(id){
    return this.httpClient.get<{findedCourse}>(`${this.courseUrl}/${id}`);
  }

  deleteCourse(id){

    return this.httpClient.delete<{message:string}>(`${this.courseUrl}/${id}`);
  }


  addCourse(course,img:File){
    let formData = new FormData;
    formData.append('name',course.name);
    formData.append('description',course.description);
    formData.append('trainer',course.trainer);
    formData.append('price',course.price);
    formData.append('numberHours',course.numberHours);
    formData.append('studentNumbers',course.studentNumbers);
    formData.append('img',img);


    return this.httpClient.post(this.courseUrl,formData);

  }

  editCourse(course){

    return this.httpClient.put<{message : string}>(`${this.courseUrl}/${course._id}`,course);
  }

  search(course:any){
    return this.httpClient.post<{message:string,findedSearchedCourses:any}>(`${this.courseUrl}/search`,course);
  }

  searchByCourseTitle(course:any)
  {
    return this.httpClient.get<{message:string,findedSearchedCourses:any}>(`${this.courseUrl}/search/${course.title}`);
  }



  

}
