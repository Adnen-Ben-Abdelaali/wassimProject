import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  [x: string]: any;
  
  addCourseForm:FormGroup;
  course:any={};
  id :any;
  title : string;
  imagePreview :any;

  constructor(private formBuilder:FormBuilder, private courseService :CoursesService, private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

          if(this.id)
            {
                this.title='Edit'              
                this.courseService.getCourseById(this.id).subscribe(
                  (data)=>
                  {
                      this.course = data.findedCourse;
                  }
                )
            }
          else
            {
                this.title = 'Add'
            }
    this.addCourseForm=this.formBuilder.group({
      name:[''],
      description:[''],
      numberHours:[''],
      trainer:[''],
      studentNumbers:[''],
      price:[''],
      img:[''] // l'attribut ajouté
  });


  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('here my file',file);
    this.addCourseForm.patchValue({ img: file });//attribut à ajouter 
    this.addCourseForm.updateValueAndValidity();// update Form (formulaire)
    const reader = new FileReader(); // lecteur d'image 57 au 62
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
  submitCourseData()
  {
   // var courses=JSON.parse(localStorage.getItem("courses")||"[]");
    //var idCourse=JSON.parse(localStorage.getItem("idCourse")||"1");
    //this.course.id=idCourse;
    //courses.push(this.course);
    //localStorage.setItem("courses",JSON.stringify(courses));
    //localStorage.setItem("idCourse",idCourse+1);

    if(this.id)
    {
        //editCourse
        this.courseService.editCourse(this.course).subscribe(
          (data)=>
          {
              console.log('Here data from BE',data.message)
          }
        )
    }
    else
    {
        //addCourse
          console.log('Here my object',this.course);
          this.courseService.addCourse(this.course,this.addCourseForm.value.img).subscribe(
            (data)=>{
          console.log('Data from BE',data)});
    }
    
  }
}
