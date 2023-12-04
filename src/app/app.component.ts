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

  constructor(private articleService: ArticleService, private router: Router) {}
  ngOnInit() {
    this.router.navigate(['']);
    this.articleService
      .getArticles()
      .subscribe((articles: ArticleInterface[]) => {
        this.articles = articles;
        console.log('App komponent ', articles);
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
  onOutletLoaded(component: ArticleComponent) {
    component.articles = this.articles;
  }
}
