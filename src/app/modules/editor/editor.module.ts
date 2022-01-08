import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule} from 'ngx-quill';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuillModule.forRoot()
  ],
  exports: [
    QuillModule
  ]
})
export class EditorModule { }
