import { Component, OnInit } from '@angular/core';
import {BlogPreview} from '../../app.interface';
import {BlogService} from '../../services/blog/blog.service';


@Component({
  selector: 'app-recent-blogs',
  templateUrl: './recent-blogs.component.html',
  styleUrls: ['./recent-blogs.component.scss']
})
export class RecentBlogsComponent implements OnInit {

  recentBlogs:BlogPreview[]= []
  constructor(private blogService: BlogService) { }

  async ngOnInit() {
    this.blogService.getPreviewPosts()
      .subscribe(res => {
        this.recentBlogs = res.data;
        console.log(res, 'safsf')
      });
  }

}
