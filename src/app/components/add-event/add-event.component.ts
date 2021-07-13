import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit 
{

      addEventForm:FormGroup;
      event:any={};
      idInUrl:any;
      title:string;

      constructor(private fbEvent :FormBuilder, private eventService:EventService,
        private activatedRoute:ActivatedRoute ) { }

      ngOnInit()
      {
        this.idInUrl = this.activatedRoute.snapshot.paramMap.get('id');

        if(this.idInUrl)
          {
              this.title='Edit'              
              this.eventService.getEventById(this.idInUrl).subscribe(
                (data)=>
                {
                    this.event = data.findedDesiredEvent;
                }
              )
          }
        else
          {
              this.title = 'Add'
          }
            this.addEventForm=this.fbEvent.group({
              title:[''],
              day:[''],
              month:[''],
              year : [''],
              beginTime:[''],
              endTime:[''],
              place:[''],
              description:[''],
              image:['']
            });
      }


      submitEventData()
        {
          /*--------------------Notion de Static data localStorage--------------*/ 
                  // var events=JSON.parse(localStorage.getItem("events")||"[]");
                    //var idEvent=JSON.parse(localStorage.getItem("idEvent")||"1");
                    //this.event.id=idEvent;
                    //events.push(this.event);
                    //localStorage.setItem("events",JSON.stringify(events));
                    //localStorage.setItem("idEvent",idEvent+1);
/*----------------------------------------------------------------------------------------*/ 
              if(this.idInUrl)
                {
                   //editCourse
                    this.eventService.editEvent(this.event).subscribe(
                    (data)=>
                         {
                          console.log('Here data from BE',data.message);
                         });
                }
              else
                {
                    //addCourse
                      console.log('Here my object',this.event);
                      this.eventService.addEvent(this.event).subscribe(
                        (data)=>
                        {
                            console.log('Data from BE',data);
                        });
                }
        }
      
}
