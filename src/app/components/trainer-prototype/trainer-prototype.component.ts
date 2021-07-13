import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-prototype',
  templateUrl: './trainer-prototype.component.html',
  styleUrls: ['./trainer-prototype.component.css']
})
export class TrainerPrototypeComponent implements OnInit {

  @Input() trainerInput:any;
  constructor() { }

  ngOnInit() {
  }

}
