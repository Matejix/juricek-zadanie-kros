import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ArticleInterface } from '../assets/article.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  articles: ArticleInterface[] = [];
  filteredUsers: ArticleInterface[] = [];
  isDisplayed: boolean = true;
  page: number = 1;
  per_page: number = 5;

  constructor(private articleService: ArticleService, private router: Router) {
    this.articleService.getArticles(this.page, this.per_page);

    this.articleService.articles$.subscribe((articles) => {
      this.articles = articles;
      this.filteredUsers = articles;
    });
  }
  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.isDisplayed = currentUrl === '/';
    });
  }

  searchUsers(author: string) {
    if (this.articles.length === 0 || author === '') {
      this.filteredUsers = this.articles;
    } else {
      this.filteredUsers = this.articles.filter((user) => {
        return user.title
          .toLocaleLowerCase()
          .includes(author.toLocaleLowerCase());
      });
    }
  }
}
