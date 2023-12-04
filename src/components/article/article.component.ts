import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
})
export class ArticleComponent {
  parameterValue: string;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.parameterValue = params['id'];
    });
    // this.parameterValue = this.route.snapshot.paramMap.get('id');
    // console.log(this.parameterValue);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
