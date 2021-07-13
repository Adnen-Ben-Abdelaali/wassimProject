import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

id:any;
event :any;

  constructor(private activatedRoute:ActivatedRoute,private eventService:EventService) { }

  ngOnInit() 
  {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //alert(this.id);
    this.eventService.getEventById(this.id).subscribe(
      (data)=>
        {
          console.log('Here is Data',data.findedDesiredEvent);
          this.event = data.findedDesiredEvent;
        }
    )
  }

}
