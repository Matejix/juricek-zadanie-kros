import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { ArticleInterface } from '../../assets/article.interface';
import { UsersInterface } from '../../assets/users.interface';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-listBox',
  templateUrl: 'listBox.component.html',
})
export class ListBoxComponent {
  @ViewChildren('lastList', { read: ElementRef })
  lastList: QueryList<ElementRef>;
  @Input() articles: ArticleInterface[] = [];
  @Input() users: UsersInterface[] = [];
  @Input() currentPage: number = 0;
  totalPage: number = 10;
  observer: any;

  constructor(private router: Router, private articleService: ArticleService) {}

  getAuthorName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown author';
  }

  onSelect(article: ArticleInterface) {
    this.router.navigate([{ outlets: { text: ['articles', article.id] } }]);
  }

  ngOnInit() {
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    this.lastList.changes.subscribe((res) => {
      console.log(res);
      if (res.last) this.observer.observe(res.last.nativeElement);
    });
  }
  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.currentPage < this.totalPage) {
          this.currentPage++;
          this.articleService.getArticles(this.currentPage);
        }
      }
    }, options);
  }
}
