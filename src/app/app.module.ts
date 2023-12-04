import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../components/header/header.module';
import { ListBoxModule } from '../components/listBox/listBox.module';
import { ArticleModule } from '../components/article/article.module';
import { SearchModule } from '../components/searchBar/search.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    ListBoxModule,
    ArticleModule,
    SearchModule,
  ],
  providers: [provideClientHydration(), HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
