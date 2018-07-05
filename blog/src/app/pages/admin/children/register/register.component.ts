import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterUserService } from '../../../../services/register-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidTelephoneService } from '../../../../services/valid-telephone.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm;
  regResponse;

  constructor(
    private register_service: RegisterUserService,
    private validPhone: ValidTelephoneService,
  ) { }

  ngOnInit() {

  }


  user = new User('', '', '', '', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  


  register() {
    this.register_service.registerUser(this.user).subscribe(
      res => {
        this.regResponse = res
        if (this.regResponse.status == 200) {
          this.onSubmit();
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client side error occured")
        } else {
          console.log(err)
        }
      }
    );

  }

  validTelephone(telephone){
    return this.validPhone.validateTelephone(this.user.telephone).subscribe(
      (res:  any )=> {
        this.user.telephone = res.telephone
      }
    )
  }

}
