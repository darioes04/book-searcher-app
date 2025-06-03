import { TopBarComponent } from './top-bar/top-bar.component';
import { Component, inject, signal } from '@angular/core';

import { BookService } from '../../books/services/book.service';
import { BookResponse } from '../../interfaces/book-raw-response';
import { parseResponsetoBookArray } from '../../data-parsing';
import { Book } from '../../interfaces/book-interface';
import SearchBarComponent from './search-bar/search-bar.component';
import { BookCardComponent } from "./book-card/book-card.component";

@Component({
  selector: 'app-root',
  templateUrl: './search-page.component.html',
  imports: [TopBarComponent, SearchBarComponent, BookCardComponent, BookCardComponent],
})
export default class SearchPageComponent {

  bookService = inject(BookService);
  bookListResponse = signal<BookResponse[]>([]);
  bookList = signal<Book[]>([]);

  getSearchedBook(query: string) {
    if (query != '') {
      this.bookService.showBooks(query).subscribe((data) => {
        return this.bookList.set(parseResponsetoBookArray(data.items));
      });
    } else {
      this.bookList.set([]);
    }
  }

  onMoreInfo(arg0: string) {

  }
}
