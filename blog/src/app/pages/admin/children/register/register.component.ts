import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterUserService } from '../../../../services/register-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm;
  regResponse;

  constructor(private register_service: RegisterUserService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'firstname': new FormControl(this.user.firstname, [
        Validators.required,
        Validators.minLength(4),
        // forbiddenNameValidator(/bob/i)
      ]),
    });
  }

  get firstname(){
    return this.registrationForm.get('firstname');
  }

  user = new User('','', '', '','', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }



  register() {
    this.register_service.registerUser(this.user).subscribe(res => this.regResponse = res);
    if(this.regResponse.status == 200){
      this.onSubmit();
    }
  }

}
