import { TopBarComponent } from './top-bar/top-bar.component';
import { Component, inject, signal, effect } from '@angular/core';

import { BookService } from '../../books/services/book.service';
import { BookResponse } from '../../interfaces/book-raw-response';
import { parseResponsetoBookArray } from '../../data-parsing';
import { Book } from '../../interfaces/book-interface';
import SearchBarComponent from './search-bar/search-bar.component';
import { BookCardComponent } from "./book-card/book-card.component";

@Component({
  selector: 'search-page-component',
  templateUrl: './search-page.component.html',
  imports: [TopBarComponent, SearchBarComponent, BookCardComponent, BookCardComponent],
})
  export default class SearchPageComponent {

    bookService = inject(BookService);
    bookListResponse = signal<BookResponse[]>([]);

 
    bookList = signal<Book[]>([]);


   
  constructor() {
    // Cargar desde localStorage
    const saved = localStorage.getItem('bookList');
    if (saved) {
      this.bookList.set(JSON.parse(saved));
    }

    // Guardar cada vez que bookList cambia
    effect(() => {
      localStorage.setItem('bookList', JSON.stringify(this.bookList()));
    });
  }

  getSearchedBook(query: string) {
    if (query != '') {
      this.bookService.showBooks(query).subscribe((data) => {
        this.bookList.set(parseResponsetoBookArray(data.items));
        console.log(this.bookList());
        return this.bookList;
       
      });
    } 
    else {
      this.bookList.set([]);
    }
  }

  onMoreInfo(arg0: string) {

  }
}
