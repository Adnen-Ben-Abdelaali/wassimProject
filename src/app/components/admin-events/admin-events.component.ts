import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {
  id:any;
  events:any;
  constructor(private routerNav: Router,private eventService:EventService) { }

  getEventsFromDB()
  {
    this.eventService.getAllEvents().subscribe((data)=>
    {
    this.events=data.findedAllEvents;
    });
  }

  ngOnInit()
   {
      this.getEventsFromDB();
   }
  
  editEvent(id :any)
  {
    //alert('Edit btn cliked'+ id);
    this.routerNav.navigate([`edit-event/${id}`]);
  }
  displayEventDetails(id :any)
  {
    //alert('Edit btn cliked'+ id);
    this.routerNav.navigate([`event-details/${id}`]);
  }

  deleteEvent(id)
  {
    this.eventService.deleteEvent(id).subscribe(
      (data)=>{
        console.log('here Data',data.message);
        this.getEventsFromDB();
      }
    )
  }

}
