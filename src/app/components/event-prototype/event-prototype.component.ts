import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-prototype',
  templateUrl: './event-prototype.component.html',
  styleUrls: ['./event-prototype.component.css']
})
export class EventPrototypeComponent implements OnInit {
  @Input() eventInput:any;
  
  constructor() { }

  ngOnInit() {
  }

}
