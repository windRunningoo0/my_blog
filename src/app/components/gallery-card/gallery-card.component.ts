import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from 'src/app/app.interface';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent implements OnInit {

  @Input()
  gallery: Gallery;

  constructor() { }

  ngOnInit(): void {
  }

}