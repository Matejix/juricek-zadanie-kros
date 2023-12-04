import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleInterface } from '../../assets/article.interface';
import { UsersInterface } from '../../assets/users.interface';
import { CommentsInterface } from '../../assets/comments.interface';
@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
})
export class ArticleComponent {
  parameterValue: number;
  private routeSubscription: Subscription;
  @Input() articles: ArticleInterface[] = [];
  @Input() users: UsersInterface[] = [];
  @Input() comments: CommentsInterface[] = [];

  specificArticle: ArticleInterface = null;
  specificComments: CommentsInterface[] = [];
  userName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.parameterValue = parseInt(params['id']);
      this.specificArticle = this.filterArticlesArr(this.parameterValue);
      this.userName = this.getAuthorName(this.specificArticle.user_id);
      this.specificComments = this.filterCommentsArr(this.parameterValue);
    });
  }

  filterArticlesArr(articleId: number): ArticleInterface {
    const article = this.articles.find((article) => article?.id === articleId);
    return article;
  }

  filterCommentsArr(articleId: number): CommentsInterface[] {
    let comment = this.comments.filter((cmt) => cmt?.post_id === articleId);
    console.log(comment);
    return comment;
  }
  getAuthorName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown author';
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
