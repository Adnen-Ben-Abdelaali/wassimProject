import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title:string ='Admin Dashboard';
  currentDate : Date;
  constructor() { }

  ngOnInit() {
    this.title;
    this.currentDate = new Date;
  }

}
