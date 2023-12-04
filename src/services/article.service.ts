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

  getArticles() {
    this.http
      .get<ArticleInterface[]>('https://gorest.co.in/public/v2/posts')
      .subscribe((articles) => {
        this.articles.next(articles);

        articles.forEach(({ user_id }) => {
          this.userService.getUser(user_id);
        });
      });
  }
}
