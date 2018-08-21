import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  aliases: this.formBuilder.array([
    this.formBuilder.control('')
    ])
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstname: 'Nancy',
      address : {
        street: '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

}
