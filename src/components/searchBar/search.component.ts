import { Component, Output, EventEmitter } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: `search.component.html`,
})
export class SearchComponent {
  private searchSubject = new Subject<string>();
  @Output() searchAuthor = new EventEmitter<string>();

  ngOnInit() {
    this.searchSubject.pipe(debounceTime(500)).subscribe((searchValue) => {
      this.searchAuthor.emit(searchValue);
    });
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;

    this.searchSubject.next(input.value);
  }

  ngOnDestroy() {
    this.searchSubject.complete();
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
