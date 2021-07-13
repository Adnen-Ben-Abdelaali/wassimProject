import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

trainers:any;

  constructor(private trainerService:TrainerService) { }

  ngOnInit() 
  {
    this.trainerService.getAllTrainers().subscribe
    (
      (data)=>{
                   this.trainers=data.findedAllTrainers;
              }
    );

  }

}
