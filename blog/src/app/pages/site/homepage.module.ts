import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './homepage-routing.module';

import { FooterComponent } from './homepage/children/footer/footer.component';
import { NavComponent } from './homepage/children/nav/nav.component';
import { AboutComponent } from './homepage/children/about/about.component';
import { PopularComponent } from './homepage/children/popular/popular.component';
import { BreadcrumbsComponent } from './homepage/children/breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './homepage/children/pagination/pagination.component';
import { SidebarComponent } from './homepage/children/sidebar/sidebar.component';
import { ContentComponent } from './homepage/children/content/content.component';
import { SliderComponent } from './homepage/children/slider/slider.component';
import { PostComponent } from './homepage/children/post/post.component';
import { HealthComponent } from './homepage/children/health/health.component';
import { FinanceComponent } from './homepage/children/finance/finance.component';
import { PoliticsComponent } from './homepage/children/politics/politics.component';
import { HomeComponent } from './homepage/children/home/home.component';
import { NewsComponent } from './homepage/children/news/news.component';
import { ContactComponent } from './homepage/children/contact/contact.component';
import { SearchComponent } from './homepage/children/search/search.component';
import { SocialComponent } from './homepage/children/social/social.component';
import { HeaderComponent } from './homepage/children/header/header.component';
import { SiteComponent } from './homepage/site.component';
import { PostContentComponent } from './homepage/children/post-content/post-content.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    NewsComponent,
    PoliticsComponent,
    FinanceComponent,
    HealthComponent,
    ContactComponent,
    PostComponent,
    SliderComponent,
    ContentComponent,
    SidebarComponent,
    PaginationComponent,
    BreadcrumbsComponent,
    SearchComponent,
    SocialComponent,
    PopularComponent,
    AboutComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PostContentComponent,
    SiteComponent
  ],
  bootstrap: [
    PostComponent,
  ]
})
export class HomePageModule { }
