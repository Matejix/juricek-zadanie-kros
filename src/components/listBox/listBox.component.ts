import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleInterface } from '../../assets/article.interface';
import { UsersInterface } from '../../assets/users.interface';

@Component({
  selector: 'app-listBox',
  templateUrl: 'listBox.component.html',
})
export class ListBoxComponent {
  @Input() articles: ArticleInterface[] = [];
  @Input() users: UsersInterface[] = [];

  constructor(private router: Router) {}

  getAuthorName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown author';
  }

  onSelect(article: ArticleInterface) {
    this.router.navigate([{ outlets: { text: ['articles', article.id] } }]);
  }
}
