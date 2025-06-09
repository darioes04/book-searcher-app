import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { Component, inject, signal, effect } from '@angular/core';

import { BookResponse } from '../../interfaces/book-raw-response';

import { Book } from '../../interfaces/book-interface';

import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import {
  parseResponseBookByIdtoBook,
  parseResponsetoBookArray,
} from '../../data-processing/data-parsing';
import SearchBarComponent from '../../components/search-bar/search-bar.component';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { FilterBookComponent } from '../../components/filter-book/filter-book.component';
import { NoBooksFoundComponent } from '../../components/no-books-found/no-books-found.component';

@Component({
  selector: 'search-page-component',
  templateUrl: './search-page.component.html',
  imports: [
    TopBarComponent,
    SearchBarComponent,
    BookCardComponent,
    FilterBookComponent,
    NoBooksFoundComponent,
  ],
})
export default class SearchPageComponent {
  bookService = inject(BookService);
  bookListResponse = signal<BookResponse[]>([]);
  bookList = signal<Book[]>([]);

  filteredAuthor: string = '';
  filteredPublisher: string = '';

  noResults = false;

  router = inject(Router);

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

  getSearchedBook(query: string): void {
    localStorage.setItem('lastSearchQuery', query);

    this.bookService
      .showBooks(query, this.filteredAuthor, this.filteredPublisher)
      .subscribe((data) => {
        const items = data.items || [];

        this.noResults = items.length === 0;
        this.bookList.set(parseResponsetoBookArray(items));

        console.log(this.bookList());
      });
  }

  getSearchedBookById(id: string): void {
    this.bookService.showBookById(id).subscribe((item) => {
      const parsedItem = parseResponseBookByIdtoBook(item);
      this.router.navigate(['/search', id], { state: { book: parsedItem } });
    });
  }
}
