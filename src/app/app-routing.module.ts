import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from '../components/article/article.component';
import { ListBoxComponent } from '../components/listBox/listBox.component';

const routes: Routes = [
  {
    path: '',
    component: ListBoxComponent,
  },
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
