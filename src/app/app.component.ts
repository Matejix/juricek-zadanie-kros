import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ArticleInterface } from '../assets/article.interface';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  articles: ArticleInterface[] = [];
  filteredUsers: ArticleInterface[] = [];
  isDisplayed: boolean = false;

  constructor(private articleService: ArticleService, private router: Router) {
    this.articleService.getArticles();

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

  searchUsers(author: string): ArticleInterface[] {
    console.log(author);
    if (this.articles.length === 0 || author === '') {
      return this.articles;
    } else {
      console.log(this.articles);
      return (this.filteredUsers = this.articles.filter((user) => {
        return user.title
          .toLocaleLowerCase()
          .includes(author.toLocaleLowerCase());
      }));
    }
  }
}
