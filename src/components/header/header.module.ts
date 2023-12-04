import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SearchModule } from '../searchBar/search.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SearchModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
