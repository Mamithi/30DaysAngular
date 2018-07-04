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
import { AddPostComponent } from './pages/dash/children/add-post/add-post.component';
import { PublishedPostsComponent } from './pages/dash/children/published-posts/published-posts.component';
import { UnpublishedPostsComponent } from './pages/dash/children/unpublished-posts/unpublished-posts.component';


const routes: Routes = [
  // Site route here for unauthenticated users
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

  // Dash board routes here for activated users
  { path: 'dash', redirectTo: 'dash/landing', pathMatch: 'full' },
  {
    path: 'dash',
    component: DashComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'landing', component: LandingComponent },
      { path: 'add/post', component: AddPostComponent },
      { path: 'published/posts', component: PublishedPostsComponent},
      { path: 'unpublished/posts', component: UnpublishedPostsComponent},
    ]
  }


];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})



export class AppRoutingModule { }
