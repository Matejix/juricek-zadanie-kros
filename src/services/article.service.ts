import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArticleInterface } from '../assets/article.interface';
import { UserService } from './user.service';
@Injectable({ providedIn: 'root' })
export class ArticleService {
  private articles = new BehaviorSubject<ArticleInterface[]>([]);
  public articles$ = this.articles.asObservable();

  constructor(private http: HttpClient, private userService: UserService) {}

  getArticles(page: number, per_page: number = 5) {
    this.http
      .get<ArticleInterface[]>(
        `https://gorest.co.in/public/v2/posts?page=${page}}&per_page=${per_page}`
      )
      .subscribe((articles) => {
        this.articles.next([...this.articles.value, ...articles]);

        articles.forEach(({ user_id }) => {
          this.userService.getUser(user_id);
        });
      });
  }
}
