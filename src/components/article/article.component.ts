import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleInterface } from '../../assets/article.interface';
import { UsersInterface } from '../../assets/users.interface';
@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
})
export class ArticleComponent {
  parameterValue: number;
  private routeSubscription: Subscription;
  @Input() articles: ArticleInterface[] = [];
  @Input() users: UsersInterface[] = [];
  specificArticle: ArticleInterface = null;
  userName: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.parameterValue = parseInt(params['id']);
      this.specificArticle = this.filterArticlesArr(this.parameterValue);
      this.userName = this.getAuthorName(this.specificArticle.user_id);
    });
  }

  filterArticlesArr(articleId: number): ArticleInterface {
    const article = this.articles.find((article) => article?.id === articleId);
    console.log('Filter: ', this.articles);
    return article;
  }

  getAuthorName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown author';
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
