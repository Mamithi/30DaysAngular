import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './homepage/children/post/post.component';
import { ContactComponent } from './homepage/children/contact/contact.component';
import { HealthComponent } from './homepage/children/health/health.component';
import { FinanceComponent } from './homepage/children/finance/finance.component';
import { PoliticsComponent } from './homepage/children/politics/politics.component';
import { NewsComponent } from './homepage/children/news/news.component';
import { HomeComponent } from './homepage/children/home/home.component';
import { SiteComponent } from './homepage/site.component';

const routes: Routes = [
  {
    path: '', component: SiteComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'home/:id', component: HomeComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsComponent },
      { path: 'politics', component: PoliticsComponent },
      { path: 'politics/:id', component: PoliticsComponent },
      { path: 'finance', component: FinanceComponent },
      { path: 'finance/:id', component: FinanceComponent },
      { path: 'health', component: HealthComponent },
      { path: 'health/:id', component: HealthComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'contactus', redirectTo: 'contact' },
      { path: 'post/:id', component: PostComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
