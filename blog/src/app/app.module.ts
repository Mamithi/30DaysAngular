import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/site/children/home/home.component';
import { AboutComponent } from './pages/site/children/about/about.component';
import { ContactComponent } from './pages/site/children/contact/contact.component';
import { NavComponent } from './pages/site/children/nav/nav.component';
import { HeaderComponent } from './pages/site/children/header/header.component';
import { SliderComponent } from './pages/site/children/slider/slider.component';
import { PostComponent } from './pages/site/children/post/post.component';
import { ContentComponent } from './pages/site/children/content/content.component';
import { FooterComponent } from './pages/site/children/footer/footer.component';
import { SidebarComponent } from './pages/site/children/sidebar/sidebar.component';
import { PopularComponent } from './pages/site/children/popular/popular.component';
import { SocialComponent } from './pages/site/children/social/social.component';
import { SearchComponent } from './pages/site/children/search/search.component';
import { PaginationComponent } from './pages/site/children/pagination/pagination.component';
import { NewsComponent } from './pages/site/children/news/news.component';
import { PoliticsComponent } from './pages/site/children/politics/politics.component';
import { FinanceComponent } from './pages/site/children/finance/finance.component';
import { HealthComponent } from './pages/site/children/health/health.component';
import { BreadcrumbsComponent } from './pages/site/children/breadcrumbs/breadcrumbs.component';
import { PostService } from './services/post.service';
import { PostContentComponent } from './pages/site/children/post-content/post-content.component';
import { AppRoutingModule } from './app.routes';
import { SiteComponent } from './pages/site/site.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterComponent } from './pages/admin/children/register/register.component';
import { AuthHeaderComponent } from './pages/admin/children/auth-header/auth-header.component';
import { LoginComponent } from './pages/admin/children/login/login.component';



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
    PostContentComponent,
    AdminComponent,
    SiteComponent,
    RegisterComponent,
    AuthHeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PostService
  ],
bootstrap: [AppComponent]
})
export class AppModule { }
