import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: `search.component.html`,
})
export class SearchComponent {
  author: string = '';
  @Output() searchAuthor = new EventEmitter<string>();

  search() {
    this.searchAuthor.emit(this.author);
  }
  // filterUsersByName(term: string) {
  //   if (this.users.length === 0 || term === '') {
  //     return this.users;
  //   } else {
  //     console.log(this.users);
  //     return this.users.filter((user) => {
  //       return user.name.toLocaleLowerCase() === term.toLocaleLowerCase();
  //     });
  //   }
  // }
}
