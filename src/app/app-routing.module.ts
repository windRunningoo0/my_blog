import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { GalleryComponent } from './containers/gallery/gallery.component';
import { BlogComponent } from './containers/blog/blog.component';
import { BroadcastComponent } from './containers/broadcast/broadcast.component';
import { BlogDetailComponent } from './containers/blog-detail/blog-detail.component';
import { BlogEditComponent } from './containers/blog-edit/blog-edit.component';
import { UserZoneComponent } from './containers/user-zone/user-zone.component';

const routes: Routes = [
  {
    path: 'people/windRunning',
    component: UserZoneComponent,
    children: [
      {path:'', component: HomepageComponent},
      {path:'broadcast', component: BroadcastComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'blog', component: BlogComponent},
      {path: '**', redirectTo: ''}
    ]
  },
  {
    path: 'note/:id',
    children: [
      {path: '', component: BlogDetailComponent},
      {path: 'edit', component: BlogEditComponent,}
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
