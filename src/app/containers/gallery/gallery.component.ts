import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery = {name: '黄山', coverImg: '', time: '2019-09-10'};
  galleries = [];
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getGalleries()
      .subscribe(res => {
        console.log(res, '哈哈');
        this.galleries = res.data;
      })
  }

}
