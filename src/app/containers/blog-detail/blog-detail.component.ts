import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {


  id: string = '';
  title: string = '';
  content: string = ''

  author: string = '晓龙'

  constructor(
    private activeRoute: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id
    // console.log(this.activeRoute.snapshot.params)
    this.blogService.getPost(this.id)
      .subscribe(res => {
        // console.log(res)
        this.title = res.data.title;
        this.content = res.data.content;
      })

  }

}
