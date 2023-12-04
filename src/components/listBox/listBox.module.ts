import { NgModule } from '@angular/core';
import { ListBoxComponent } from './listBox.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [ListBoxComponent],
  imports: [CommonModule, RouterLink],
  exports: [ListBoxComponent],
})
export class ListBoxModule {}
