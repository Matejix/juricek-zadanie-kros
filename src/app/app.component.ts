import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ArticleInterface } from '../assets/article.interface';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ObjectOfUsers } from '../assets/users.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  articles: ArticleInterface[] = [];
  users: ObjectOfUsers = undefined;
  filteredArticles: ArticleInterface[] = [];
  isDisplayed: boolean = true;
  page: number = 1;
  per_page: number = 5;
  authorQuery: string = '';

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private userService: UserService
  ) {
    this.articleService.getArticles(this.page, this.per_page);

    this.articleService.articles$.subscribe((articles) => {
      this.articles = articles;

      if (this.authorQuery.length === 0) {
        this.filteredArticles = articles;
      }
    });

    this.userService.users$.subscribe((users) => {
      this.users = users;
    });
  }
  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.isDisplayed = currentUrl === '/';
    });
  }

  searchUsers(authorQuery: string) {
    this.authorQuery = authorQuery;

    if (this.articles.length === 0 || this.authorQuery === '') {
      this.filteredArticles = this.articles;
    } else {
      this.filteredArticles = this.articles.filter(({ user_id }) => {
        const authorOfArticle = this.users[user_id];

        if (authorOfArticle === undefined) {
          return false;
        }
        return authorOfArticle.name
          .toLocaleLowerCase()
          .includes(this.authorQuery.toLocaleLowerCase());
      });
    }
  }
}
