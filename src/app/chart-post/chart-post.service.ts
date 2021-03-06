import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChartPostService {
  constructor(private http: HttpClient) {}
  fetchClient(): Observable<Object> {
    return this.http.get('https://rails-api-venturads.c9users.io/posts.json');
  //  return this.http.get('https://rails-api-venturads.c9users.io/posts/1.json');
  }

}