import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {


  title: string = '你好啊'
  constructor() { }

  ngOnInit(): void {
  }

}
