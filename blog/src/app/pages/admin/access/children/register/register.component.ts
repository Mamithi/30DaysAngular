import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { RegisterUserService } from '../../../../../services/register-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidTelephoneService } from '../../../../../services/valid-telephone.service';
import { GetCountriesService } from '../../../../../services/get-countries.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    'firstname' : ['', Validators.required],
    'lastname' : ['', Validators.required],
    'country' : ['', Validators.required],
    'telephone' : ['', Validators.required],
    'email' : ['', Validators.required],
    'password' : ['', Validators.required],
    'password_confirmation' : ['', Validators.required],
  });

  regResponse;
  countries;
  submitted = false;

  constructor(
    private register_service: RegisterUserService,
    private validPhone: ValidTelephoneService,
    private fetch_countries: GetCountriesService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.listCountries();
  }




  onSubmit() {
    this.submitted = true;
  }


  register() {
    this.register_service.registerUser(this.registerForm.value).subscribe(
      res => {
        this.regResponse = res;
        if (this.regResponse.status === 200) {
          this.onSubmit();
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client side error occured');
        } else {
          console.log(err);
        }
      });

  }


  listCountries() {
    return this.fetch_countries.getCountries().subscribe(
      (res: any) => {
        this.countries = this.fetch_countries.transformCountries(res.data);
      }
    );
  }


}
