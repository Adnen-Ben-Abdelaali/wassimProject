import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTrainerComponent } from './components/add-trainer/add-trainer.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { AllTrainersComponent } from './components/all-trainers/all-trainers.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CoursePrototypeComponent } from './components/course-prototype/course-prototype.component';
import { AdminComponent } from './components/admin/admin.component';
import { EventsComponent } from './components/events/events.component';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = 
[
  {path: '' , component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'add-trainer',component:AddTrainerComponent},
  {path:'add-course',component:AddCourseComponent},
  {path:'add-event',component:AddEventComponent},
  {path:'all-courses',component:AllCoursesComponent},
  {path:'all-trainers',component:AllTrainersComponent},
  {path:'admin',component:AdminComponent},
  {path:'events',component:EventsComponent},
  {path:'edit-course/:id',component:AddCourseComponent},
  {path:'edit-teacher/:id',component:AddTrainerComponent},
  {path:'edit-event/:id',component:AddEventComponent},
  {path:'details/:id',component:CourseDetailsComponent},
  {path:'teacher-details/:id',component:TeacherDetailsComponent},
  {path:'event-details/:id',component:EventDetailsComponent},
  {path:'signup-admin',component:SignupComponent},
  {path:'search',component:SearchComponent},
  {path:'weather',component:WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
