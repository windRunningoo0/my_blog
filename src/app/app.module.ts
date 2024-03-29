import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MaterialModule } from './modules/material/material.module';
import { MatSliderModule, MatSlider } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { NavComponent } from './components/nav/nav.component';
import { GalleryComponent } from './containers/gallery/gallery.component';
import { BlogComponent } from './containers/blog/blog.component';
import { BroadcastComponent } from './containers/broadcast/broadcast.component';
import { RecentBlogsComponent } from './components/recent-blogs/recent-blogs.component';
import { RecentGalleriesComponent } from './components/recent-galleries/recent-galleries.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';
import { GalleryPreviewComponent } from './components/gallery-preview/gallery-preview.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './modules/shared/shared.module';
import { BlogDetailComponent } from './containers/blog-detail/blog-detail.component';
import { BlogEditComponent } from './containers/blog-edit/blog-edit.component';
import { UserZoneComponent } from './containers/user-zone/user-zone.component';
import { BlogEditModule } from './modules/blog-edit/blog-edit.module';
import { QuillModule } from 'ngx-quill';
import { AactpMicroSharesComponent } from './containers/aactp-micro-shares/aactp-micro-shares.component';
import { BlogService } from './services/blog/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WelcomePageComponent } from './containers/welcome-page/welcome-page.component';
import {UserService} from './services/user/user.service';
import { CommonService } from './services/common/common.service';
import { GalleryService } from './services/gallery/gallery.service'
import { GalleryCardComponent } from './components/gallery-card/gallery-card.component';


const modules = {
  toolbar: [
    ['bold', 'italic', 'underline',],        // toggled buttons
    ['blockquote'],
 
    [ { 'header': 2 }],               // custom button values
    [{ 'list': 'bullet' }],
    // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    // [{ 'direction': 'rtl' }],                         // text direction
 
    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
 
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    // [{ 'font': [] }],
    [{ 'align': [] }],
 
    ['clean'],                                         // remove formatting button
 
    [ 'image', 'video']                         // link and image, video
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    GalleryComponent,
    GalleryPreviewComponent,
    BlogComponent,
    BroadcastComponent,
    RecentBlogsComponent,
    RecentGalleriesComponent,
    MessageBoardComponent,
    BlogPreviewComponent,
    BlogDetailComponent,
    // BlogEditComponent,
    UserZoneComponent,
    AactpMicroSharesComponent,
    WelcomePageComponent,
    GalleryCardComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    QuillModule.forRoot({
      modules
    })
    // BlogEditModule
  ],
  providers: [BlogService, UserService, CommonService, GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
