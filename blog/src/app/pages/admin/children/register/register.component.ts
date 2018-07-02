import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'firstname': new FormControl(this.user.firstname, [
        Validators.required,
        Validators.minLength(4),
        // forbiddenNameValidator(/bob/i)
      ])
    });
  }

  get firstname(){
    return this.registrationForm.get('firstname');
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



  // register() {
  // //  this.user = new User("", "", "", "", "", "", "");
  // }

}
