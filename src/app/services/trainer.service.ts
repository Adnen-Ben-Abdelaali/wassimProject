import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  trainerUrl:string='http://localhost:3001/trainer';

  constructor(private httpClientTrainer:HttpClient) { }

  getAllTrainers(){
      return this.httpClientTrainer.get<{findedAllTrainers:any}>(this.trainerUrl);
  }

  getTrainerById(id){
    return this.httpClientTrainer.get<{findedDesiredTrainer:any}>(`${this.trainerUrl}/${id}`);
  }

  deleteTrainer(id){

    return this.httpClientTrainer.delete<{message:string}>(`${this.trainerUrl}/${id}`);
  }


  addTrainer(trainer){
    return this.httpClientTrainer.post(this.trainerUrl,trainer);

  }

  editTrainer(trainer){

    return this.httpClientTrainer.put<{message:string}>(`${this.trainerUrl}/${trainer.id}`,trainer);
  }
}
