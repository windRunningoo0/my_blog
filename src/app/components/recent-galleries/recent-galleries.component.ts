import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/app.interface';

@Component({
  selector: 'app-recent-galleries',
  templateUrl: './recent-galleries.component.html',
  styleUrls: ['./recent-galleries.component.scss']
})
export class RecentGalleriesComponent implements OnInit {

  recentGalleries: Gallery[] = [
    {name: '青海湖', coverImg: '', time: '2020-09-10'},
    {name: '黄山', coverImg: '', time: '2019-09-10'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
