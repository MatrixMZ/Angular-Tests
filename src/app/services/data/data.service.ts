import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public ROOT_URl = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.ROOT_URl}/posts`);
  }
}
