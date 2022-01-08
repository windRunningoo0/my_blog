import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BlogPreview } from 'src/app/app.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private http: HttpClient ) { }

  getPreviewPosts = () => {
    return this.http.get<{data: BlogPreview[]}>('/api/posts/previewList');
  }

  getPost = (id: string) => {
    return this.http.get<{data: BlogPreview}>('/api/posts/detail/' + id)
  }

  savePost = (params) => {
    return this.http.post('/api/posts/save', params);
  }

}
