import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(author: string) {
    this.searchEvent.emit(author);
  }
}
