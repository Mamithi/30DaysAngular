import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavComponent } from './pages/nav/nav.component';
import { HeaderComponent } from './pages/header/header.component';
import { SliderComponent } from './pages/slider/slider.component';
import { PostComponent } from './pages/post/post.component';
import { ContentComponent } from './pages/content/content.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { PopularComponent } from './pages/popular/popular.component';
import { SocialComponent } from './pages/social/social.component';
import { SearchComponent } from './pages/search/search.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { NewsComponent } from './pages/news/news.component';
import { PoliticsComponent } from './pages/politics/politics.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { HealthComponent } from './pages/health/health.component';
import { BreadcrumbsComponent } from './pages/breadcrumbs/breadcrumbs.component';
import { PostService } from './services/post.service';
import { ArticleComponent } from './pages/article/article.component';
import { PostContentComponent } from './pages/post-content/post-content.component';

const routes: Routes = [
  // Basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'health', component: HealthComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
  { path: 'read', component: ArticleComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    HeaderComponent,
    SliderComponent,
    PostComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    PopularComponent,
    SocialComponent,
    SearchComponent,
    PaginationComponent,
    NewsComponent,
    PoliticsComponent,
    FinanceComponent,
    HealthComponent,
    BreadcrumbsComponent,
    ArticleComponent,
    PostContentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
