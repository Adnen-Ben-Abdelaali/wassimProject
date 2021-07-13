import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomesliderComponent } from './components/homeslider/homeslider.component';
import { FeaturesComponent } from './components/features/features.component';
import { CounterComponent } from './components/counter/counter.component';
import { EventsComponent } from './components/events/events.component';
import { TeamComponent } from './components/team/team.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { AddTrainerComponent } from './components/add-trainer/add-trainer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { AllTrainersComponent } from './components/all-trainers/all-trainers.component';
import { CoursePrototypeComponent } from './components/course-prototype/course-prototype.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminTeachersComponent } from './components/admin-teachers/admin-teachers.component';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { EventPrototypeComponent } from './components/event-prototype/event-prototype.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { TrainerPrototypeComponent } from './components/trainer-prototype/trainer-prototype.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MyfilterPipe } from './pipes/myfilter.pipe';
import { SearchComponent } from './components/search/search.component';
import { WeatherComponent } from './components/weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    MenuComponent,
    HomesliderComponent,
    FeaturesComponent,
    CounterComponent,
    EventsComponent,
    TeamComponent,
    SignupComponent,
    LoginComponent,
    NewsComponent,
    NewsLetterComponent,
    AddTrainerComponent,
    AddCourseComponent,
    AllCoursesComponent,
    AllTrainersComponent,
    CoursePrototypeComponent,
    AdminComponent,
    AdminCoursesComponent,
    AdminTeachersComponent,
    AdminEventsComponent,
    CourseDetailsComponent,
    EventPrototypeComponent,
    TeacherDetailsComponent,
    EventDetailsComponent,
    AddEventComponent,
    TrainerPrototypeComponent,
    ReversePipe,
    MyfilterPipe,
    SearchComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
