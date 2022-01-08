import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { GalleryComponent } from './containers/gallery/gallery.component';
import { BlogComponent } from './containers/blog/blog.component';
import { BroadcastComponent } from './containers/broadcast/broadcast.component';
import { BlogDetailComponent } from './containers/blog-detail/blog-detail.component';
import { BlogEditComponent } from './containers/blog-edit/blog-edit.component';
import { UserZoneComponent } from './containers/user-zone/user-zone.component';
import { AactpMicroSharesComponent } from './containers/aactp-micro-shares/aactp-micro-shares.component';
import { WelcomePageComponent } from './containers/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: 'user/:userId/welcome', component: WelcomePageComponent},
  {
    path: 'user/:userId',
    component: UserZoneComponent,
    children: [
      {path:'homepage', component: HomepageComponent},
      {path:'broadcast', component: BroadcastComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'blog', component: BlogComponent},
      {path: '**', redirectTo: ''}
    ]
  },
  {
    path: 'note',
    children: [
      {path: 'edit', component: BlogEditComponent},
      {
        path: ':id',
        children: [
          {path: '', component: BlogDetailComponent},
          {path: 'edit', component: BlogEditComponent,}
        ]
      },
      
    ]
  },
  {
    path: 'aactp/micro-shares',
    component: AactpMicroSharesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
