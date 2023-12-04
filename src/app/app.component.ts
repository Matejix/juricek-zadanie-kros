import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ArticleInterface } from '../assets/article.interface';
import { UsersInterface } from '../assets/users.interface';
import { ArticleComponent } from '../components/article/article.component';
import { Router } from '@angular/router';
import { CommentsInterface } from '../assets/comments.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  articles: ArticleInterface[] = [];
  users: UsersInterface[] = [];
  comments: CommentsInterface[] = [];
  filteredUsers: ArticleInterface[] = [];

  constructor(private articleService: ArticleService, private router: Router) {}
  ngOnInit() {
    this.router.navigate(['']);
    this.articleService
      .getArticles()
      .subscribe((articles: ArticleInterface[]) => {
        this.articles = articles;
        this.filteredUsers = articles;
      });

    this.articleService.getUser().subscribe((users: UsersInterface[]) => {
      this.users = users;
    });

    this.articleService
      .getComments()
      .subscribe((comments: CommentsInterface[]) => {
        this.comments = comments;
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
  onOutletLoaded(component: ArticleComponent) {
    component.articles = this.articles;
    component.comments = this.comments;
    component.users = this.users;
  }
}
