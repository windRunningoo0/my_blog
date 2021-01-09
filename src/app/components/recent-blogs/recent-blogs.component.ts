import { Component, OnInit } from '@angular/core';
import {BlogPreview} from '../../app.interface'
@Component({
  selector: 'app-recent-blogs',
  templateUrl: './recent-blogs.component.html',
  styleUrls: ['./recent-blogs.component.scss']
})
export class RecentBlogsComponent implements OnInit {

  recentBlogs:BlogPreview[]= [
    {title: '随记 2020-9-9', content: '这两天突然想到刚工作那会的一件事。 最近我们组调来一位小同事，97年的。作为老同事的我，自然要带带他。从我的感觉来说，他的技术能力不算太好。有些地方，我会”手把手“的去指导。以前，我可能没有多少耐心去详细的指导一个人，如果我说的比较多，对方还是不懂，我就会感觉，对方怎么这么简单的东西都做不好。现在，', time: '2020-09-10 00:19:11'},
    {title: '随记 2020-8-9', content: '呵呵呵', time: '2020-09-10 00:19:11'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
