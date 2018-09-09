import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/blog/home', pathMatch: 'full' },
  { path: 'blog', loadChildren: './pages/site/homepage.module#HomePageModule'},
  { path: 'dash', loadChildren: './pages/dash/dashboard/dashboard.module#DashboardModule'},
  { path: 'admin', loadChildren: './pages/admin/access/access.module#AccessModule'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})



export class AppRoutingModule { }
