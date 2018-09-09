import { AuthGuard } from './../../../auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPostComponent } from './children/edit-post/edit-post.component';
import { AddPostComponent } from './children/add-post/add-post.component';
import { DashComponent } from './children/dash.component';
import { LandingComponent } from './children/landing/landing.component';
import { PublishedPostsComponent } from './children/published-posts/published-posts.component';
import { UnpublishedPostsComponent } from './children/unpublished-posts/unpublished-posts.component';

const routes: Routes = [
  {
    path: '', component : DashComponent,
    canActivateChild: [AuthGuard],
    children: [
    { path: 'add/post', component: AddPostComponent },
    { path: 'edit/post', component: EditPostComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'published/posts', component: PublishedPostsComponent },
    { path: 'unpublished/posts', component: UnpublishedPostsComponent },
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
