import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = new User('John',
    'Doe', 'Kenya', '+254705601827',
    'test@gmail.com', '123456', '123456');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }



  register() {
    console.log(this.user);
  }

}
