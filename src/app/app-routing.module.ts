import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from '../components/article/article.component';

const routes: Routes = [
  {
    path: 'articles/:id',
    component: ArticleComponent,
    outlet: 'text',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
