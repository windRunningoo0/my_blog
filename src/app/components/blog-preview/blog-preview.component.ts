import { Component, OnInit, Input } from '@angular/core';
import { BlogPreview } from 'src/app/app.interface';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {

  @Input()
  blog: BlogPreview;



  constructor() { }

  ngOnInit(): void {
  }

}
