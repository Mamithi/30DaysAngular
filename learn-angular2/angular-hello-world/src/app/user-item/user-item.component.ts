import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  name : string;  // Added name property

  constructor() {
    this.name ='Felipe'; //  Set the name
  }

  ngOnInit() {
  }

}
