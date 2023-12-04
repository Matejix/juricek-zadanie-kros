import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, BrowserModule],
  exports: [ArticleComponent],
})
export class ArticleModule {}
