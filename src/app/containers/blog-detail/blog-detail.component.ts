import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  title: string = '你好';
  content: string = '<p>这是日记内容</p>'

  author: string = '晓龙'

  constructor() { }

  ngOnInit(): void {
  }

}
