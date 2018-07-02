import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { PoliticsComponent } from './pages/politics/politics.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { HealthComponent } from './pages/health/health.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostComponent } from './pages/post/post.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { AdminComponent } from './auth/admin/admin.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  // Site route here
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
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

  // Basic routes
  

  // Authentication routes
  { path: 'admin', component: AdminComponent },

];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})



export class AppRoutingModule { }
