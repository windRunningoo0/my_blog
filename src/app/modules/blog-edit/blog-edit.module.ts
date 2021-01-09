import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogEditComponent } from '../../containers/blog-edit/blog-edit.component';
import { SharedModule } from '../shared/shared.module'
import {QuillModule} from 'ngx-quill';
import 'quill/themes/base.js'

@NgModule({
  declarations: [
    BlogEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuillModule
  ]
})
export class BlogEditModule { }