import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleInterface } from '../../assets/article.interface';
import { ObjectOfUsers } from '../../assets/users.interface';
import { CommentsInterface } from '../../assets/comments.interface';
import { ArticleService } from '../../services/article.service';
import { CommentService } from '../../services/comment.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.scss'],
})
export class ArticleComponent {
  private parameterValue: number;
  private articles: ArticleInterface[] = [];
  private users: ObjectOfUsers = {};

  specificArticle: ArticleInterface | undefined = undefined;
  specificComments: CommentsInterface[] = [];
  userName: string = 'Unknown author';

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private commentService: CommentService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.articleService.articles$.subscribe((articles) => {
      this.articles = articles;
      this.onArticleChange();
    });

    this.commentService.comments$.subscribe((comments) => {
      this.specificComments = comments;
    });

    this.userService.users$.subscribe((users) => {
      this.users = users;
    });

    this.route.params.subscribe((params) => {
      this.parameterValue = parseInt(params['id']);
      this.commentService.getComments(this.parameterValue);

      this.onArticleChange();
    });
  }

  onArticleChange() {
    this.specificArticle = this.filterArticlesArr(this.parameterValue);

    if (this.specificArticle !== undefined) {
      this.userName = this.getAuthorName(this.specificArticle.user_id);
    }
  }

  filterArticlesArr(articleId: number) {
    return this.articles.find((article) => article?.id === articleId);
  }

  getAuthorName(userId: number): string {
    return this.users[userId]?.name || 'Unknown author';
  }
}
