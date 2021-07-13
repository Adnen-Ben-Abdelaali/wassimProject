import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {
  addTrainerForm:FormGroup;
  trainer:any={};
  id : any;
  title:string;
  constructor(private formBuilder:FormBuilder, private trainerService : TrainerService, private activatedRoute :ActivatedRoute) { }

  ngOnInit()
   {
     this.id= this.activatedRoute.snapshot.paramMap.get('id');
     if(this.id)
     {
        this.title='Edit'
        this.trainerService.getTrainerById(this.id).subscribe(
          (data)=>{
            this.trainer=data.findedDesiredTrainer;
          }
        );
     }

     else
     {
        this.title = 'Add'
     }
        this.addTrainerForm=this.formBuilder.group({
          firstName:[''],
          lastName:[''],
          speciality:[''],
          grade:[''],
          email:[''],
          password:[''],
          tel:[''],
          img:['']
        });
    }

  submitTrainerData()
  {
     /*---------------Local Storage Static Aspect--------------------------------*/ 
   // var trainers=JSON.parse(localStorage.getItem("trainers")||"[]");
    //var idTrainer=JSON.parse(localStorage.getItem("idTrainer")||"1");
    //this.trainer.id=idTrainer;
    //trainers.push(this.trainer);
    //localStorage.setItem("trainers",JSON.stringify(trainers));
    //localStorage.setItem("idTrainer",idTrainer+1);
/*-----------------------------------------------------------------------------------*/

      if (this.id)
      {
        this.trainerService.editTrainer(this.trainer).subscribe(
              (data)=>
              {
                console.log('Here Data from BE',data.message);
              }     
        )
      }
      else
      {
        this.trainerService.addTrainer(this.trainer).subscribe(
          (data)=>{
            console.log('Data from BE',data);
           
          }
        );
      }

  }

}
