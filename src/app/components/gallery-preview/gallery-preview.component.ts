import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from 'src/app/app.interface';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss']
})
export class GalleryPreviewComponent implements OnInit {

  @Input()
  gallery: Gallery;

  constructor() { }

  ngOnInit(): void {
  }

}
