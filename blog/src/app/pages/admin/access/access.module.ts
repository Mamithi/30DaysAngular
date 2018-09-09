import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './children/admin.component';
import { AuthHeaderComponent } from './children/auth-header/auth-header.component';
import { RegisterComponent } from './children/register/register.component';
import { LoginComponent } from './children/login/login.component';

import { AccessRoutingModule } from './access-routing.module';
import { FooterComponent } from '../../site/homepage/children/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AccessRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    AuthHeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ]
})
export class AccessModule { }
