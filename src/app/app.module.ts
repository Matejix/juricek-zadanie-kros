import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../components/header/header.module';
import { ListBoxModule } from '../components/listBox/listBox.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    ListBoxModule,
  ],
  providers: [provideClientHydration(), HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
