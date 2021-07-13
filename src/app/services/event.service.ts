import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventUrl:string='http://localhost:3001/event';

  constructor(private httpClientEvent:HttpClient) { }

  getAllEvents(){
      return this.httpClientEvent.get<{findedAllEvents:any}>(this.eventUrl);
  }

  getEventById(id){
    return this.httpClientEvent.get<{findedDesiredEvent}>(`${this.eventUrl}/${id}`);
  }

  deleteEvent(id){

    return this.httpClientEvent.delete<{message:string}>(`${this.eventUrl}/${id}`);
  }


  addEvent(eventItem){
    return this.httpClientEvent.post(`${this.eventUrl}/post`,eventItem);

  }

  editEvent(eventItem){

    return this.httpClientEvent.put<{message:string}>(`${this.eventUrl}/${eventItem.id}`,eventItem);
  }

}
