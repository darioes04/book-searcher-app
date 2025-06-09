import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { Component, inject, signal, effect } from '@angular/core';


import { BookResponse } from '../../interfaces/book-raw-response';

import { Book } from '../../interfaces/book-interface';
import SearchBarComponent from './search-bar/search-bar.component';
import { BookCardComponent } from "./book-card/book-card.component";
import { FilterBookComponent } from "./filter-book/filter-book.component";
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { parseResponseBookByIdtoBook, parseResponsetoBookArray } from '../../data-processing/data-parsing';

@Component({
  selector: 'search-page-component',
  templateUrl: './search-page.component.html',
  imports: [TopBarComponent, SearchBarComponent, BookCardComponent, FilterBookComponent],
})
  export default class SearchPageComponent {

    bookService = inject(BookService);
    bookListResponse = signal<BookResponse[]>([]);
    bookList = signal<Book[]>([]);

    filteredAuthor: string = '';
    filteredPublisher: string = '';

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

    getSearchedBook(query: string) {
        this.bookService.showBooks(query,this.filteredAuthor, this.filteredPublisher).subscribe((data) => {
          this.bookList.set(parseResponsetoBookArray(data.items));
          console.log(this.bookList());
          return this.bookList;       
        });
      
    }

    getSearchedBookById(id: string){
      this.bookService.showBookById(id).subscribe(item => {
        const parsedItem = parseResponseBookByIdtoBook(item);
        this.router.navigate(['/search', id], { state: { book: parsedItem } });
      }); 
    }
}
