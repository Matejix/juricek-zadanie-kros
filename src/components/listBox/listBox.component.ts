import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleInterface } from '../../assets/article.interface';
import { UsersInterface } from '../../assets/users.interface';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-listBox',
  templateUrl: 'listBox.component.html',
})
export class ListBoxComponent {
  articles: ArticleInterface[] = [];
  users: UsersInterface[] = [];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.articleService
      .getArticles()
      .subscribe((articles: ArticleInterface[]) => {
        this.articles = articles;
      });

    this.articleService.getUser().subscribe((users: UsersInterface[]) => {
      this.users = users;
    });
  }

  getAuthorName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown author';
  }

  onSelect(article: ArticleInterface) {
    this.router.navigate([{ outlets: { text: ['articles', article.id] } }]);
  }
}
