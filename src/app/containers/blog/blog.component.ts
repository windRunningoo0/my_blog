import { Component, OnInit } from '@angular/core';
import { BlogPreview } from 'src/app/app.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: BlogPreview[] = [
    {title: '随记 · 2020-09-10', content: '记得那会刚工作，我们组长——廖哥——恰也比我大7-8岁的样子，我负责做一个项目，第二天就需要交付，可我手生啊，加班也做不出来。廖哥叫我不要在公司待太晚，晚上一起到他家弄，于是就去他家继续加紧继续工作起来。过程中遇到些瓶颈，技术上我根本无法解决，廖哥也会在我旁边耐心指点，记得我一直弄到大约半夜两点左右，坐在点着台灯的桌前，已经快不行了，眼睛快睁不开了，头又晕，要去看那可恶的密密麻麻的代码，简直就是无比痛苦。廖哥见状...', time: '2020-09-10 22:10:12'},
    {title: '随记 · 2020-09-10', content: '记得那会刚工作，我们组长——廖哥——恰也比我大7-8岁的样子，我负责做一个项目，第二天就需要交付，可我手生啊，加班也做不出来。廖哥叫我不要在公司待太晚，晚上一起到他家弄，于是就去他家继续加紧继续工作起来。过程中遇到些瓶颈，技术上我根本无法解决，廖哥也会在我旁边耐心指点，记得我一直弄到大约半夜两点左右，坐在点着台灯的桌前，已经快不行了，眼睛快睁不开了，头又晕，要去看那可恶的密密麻麻的代码，简直就是无比痛苦。廖哥见状...', time: '2020-09-10 22:10:12'}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
