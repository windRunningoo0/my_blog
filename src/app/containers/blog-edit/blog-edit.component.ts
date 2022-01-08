import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuillModules } from 'ngx-quill';
import { BlogService } from 'src/app/services/blog/blog.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  id: string = '';
  title: string = '';
  content: string = '';
  previewContent: string = '';

  editor;
  constructor(
    private blogService: BlogService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.id = this.activedRoute.snapshot.params.id;
    // alert(id)
    if (this.id) {
      this.blogService.getPost(this.id)
        .subscribe(res => {
          this.title = res.data.title;
          this.content = res.data.content;
        })

    }
  }

  onContentChanged(e) {
    console.log(e, this.title)
    this.content = e.html;
    this.previewContent = e.text;
  }

  onSave = () => {
    this.blogService.savePost({
      id: this.id,
      title: this.title,
      content: this.content,
      previewContent: this.previewContent.slice(0, 300),
      uid: '5f4e5f3ccddca225cd49700c'
    })
    .subscribe(res => {
      // console.log(res);
      this.matSnackBar.open('日记提交成功', '',{duration: 1500, verticalPosition: 'top'})
      history.back();
    })
  }

  imageHandler = () => {
    const Imageinput = document.createElement('input');
    Imageinput.setAttribute('type', 'file');
    Imageinput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp'); // 可改上传图片格式
    Imageinput.classList.add('ql-image');
    Imageinput.addEventListener('change', () => {
      const file = Imageinput.files[0];
      if (Imageinput.files != null && Imageinput.files[0] != null) {
          /* 自定义代码 */
          // .......
          // .......
          // 下面这句话必填，成功后执行 （imageUrl 为上传成功后的图片完整路径）
          const formData = new FormData();
          formData.append(file.name, file);
          
          console.log(file, formData)
          this.commonService.uploadImg(formData)
            .subscribe(res => {
              console.log(res, '我去')
              this.editor.insertEmbed(this.editor.getSelection(true).index, 'image', res.data.path);
            })

          // alert(Imageinput.files[0])
      }
    });
    Imageinput.click();
  }

  onEditorCreated = (quill: any) => {
    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler.bind(this));
    this.editor = quill;
  }

}
