import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-admin-teachers',
  templateUrl: './admin-teachers.component.html',
  styleUrls: ['./admin-teachers.component.css']
})
export class AdminTeachersComponent implements OnInit {
trainers :any;
  constructor(private trainerService : TrainerService ,private router:Router) { }

  getTrainersFromBE(){
    this.trainerService.getAllTrainers().subscribe
    (
      (data)=>{
                   this.trainers=data.findedAllTrainers;
              }
    )
  }

  ngOnInit() 
  {
    this.getTrainersFromBE();
  }

  editTrainer(id:any)
  {
    this.router.navigate([`edit-teacher/${id}`]);

  }

  displayTrainer(id :any)
  {
    //alert('Display btn cliked'+ id);
    this.router.navigate([`teacher-details/${id}`]);
  }

  deleteTrainer(id)
  {
    this.trainerService.deleteTrainer(id).subscribe(
      (data)=>{
          console.log('Here Data',data.message);
          this.getTrainersFromBE();
      }

    )
  
  }


}
