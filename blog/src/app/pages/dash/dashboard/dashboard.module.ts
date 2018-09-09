import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashComponent } from './children/dash.component';
import { DashSidebarComponent } from './children/dash-sidebar/dash-sidebar.component';
import { DashHeaderComponent } from './children/dash-header/dash-header.component';
import { UnpublishedPostsComponent } from './children/unpublished-posts/unpublished-posts.component';
import { PublishedPostsComponent } from './children/published-posts/published-posts.component';
import { EditPostComponent } from './children/edit-post/edit-post.component';
import { AddPostComponent } from './children/add-post/add-post.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './children/landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    AddPostComponent,
    EditPostComponent,
    LandingComponent,
    PublishedPostsComponent,
    UnpublishedPostsComponent,
    DashHeaderComponent,
    DashSidebarComponent,
    DashComponent
  ]
})
export class DashboardModule { }
