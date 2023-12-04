import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleInterface } from '../assets/article.interface';
import { UsersInterface } from '../assets/users.interface';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  constructor(private http: HttpClient) {}
  getArticles(): Observable<ArticleInterface[]> {
    return this.http.get<ArticleInterface[]>(
      'https://gorest.co.in/public/v2/posts'
    );
  }

  getUser(): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(
      'https://gorest.co.in/public/v2/users'
    );
  }
}
