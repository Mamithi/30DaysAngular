import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './children/admin.component';
import { RegisterComponent } from './children/register/register.component';
import { LoginComponent } from './children/login/login.component';

const routes: Routes = [
  { path: '', redirectTo : 'admin/login', pathMatch: 'full' },
  {
    path: '', component : AdminComponent,
    children: [
        { path: 'login', component : LoginComponent },
        { path: 'register', component : RegisterComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
