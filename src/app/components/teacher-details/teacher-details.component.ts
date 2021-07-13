import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  id:any;
  trainer:any;

  constructor(private activatedRoute:ActivatedRoute, private trainerService:TrainerService) { }

  ngOnInit()
   {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // alert(this.id);
     this.trainerService.getTrainerById(this.id).subscribe(
       (data)=>{
         console.log('Here data', data.findedDesiredTrainer);
         this.trainer=data.findedDesiredTrainer;
       });
  }

}
