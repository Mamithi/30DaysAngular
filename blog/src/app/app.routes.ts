import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/site/children/home/home.component';
import { NewsComponent } from './pages/site/children/news/news.component';
import { PoliticsComponent } from './pages/site/children/politics/politics.component';
import { FinanceComponent } from './pages/site/children/finance/finance.component';
import { HealthComponent } from './pages/site/children/health/health.component';
import { ContactComponent } from './pages/site/children/contact/contact.component';
import { PostComponent } from './pages/site/children/post/post.component';
import { PaginationComponent } from './pages/site/children/pagination/pagination.component';
import { SiteComponent } from './pages/site/site.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterComponent } from './pages/admin/children/register/register.component';
import { LoginComponent } from './pages/admin/children/login/login.component';
import { DashComponent } from './pages/dash/dash.component';
import { LandingComponent } from './pages/dash/children/landing/landing.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  // Site route here
  { path: '', redirectTo: 'blog/home', pathMatch: 'full' },
  {
    path: 'blog',
    component: SiteComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'news', component: NewsComponent },
      { path: 'politics', component: PoliticsComponent },
      { path: 'finance', component: FinanceComponent },
      { path: 'health', component: HealthComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'contactus', redirectTo: 'contact' },
      { path: 'post/:id', component: PostComponent },
      { path: 'page/:page', component: PaginationComponent },
    ]
  },

  // Access routes
  { path: 'admin', redirectTo: 'admin/login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },

  
  { path: 'dash', redirectTo: 'dash/landing', pathMatch: 'full' },
  {
    path: 'dash',
    component: DashComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'landing', component: LandingComponent,  canActivate: [AuthGuard], }
    ]
  }


];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})



export class AppRoutingModule { }
