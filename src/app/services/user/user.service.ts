import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserInfo = (userId: string) => {
    return this.http.get<any>('/api/users/info', {params: {userId}})
  }
}
