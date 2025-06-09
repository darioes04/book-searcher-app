import { ChangeDetectionStrategy, Component, EventEmitter, inject, input, output, Output, signal } from '@angular/core';
import { Book } from '../../interfaces/book-interface';

import { BookById } from '../../interfaces/book-by-id-interface';

import { Router } from '@angular/router';
import { UnsubscriptionError } from 'rxjs';


@Component({
  selector: 'book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {

  bookId = output<string>();
  bookCard = input.required<Book>();

  bookDataById = signal<BookById>;

   /* this.bookService.showBookById(id).subscribe(item => {
      const parsedItem = parseResponseBookByIdtoBook(item);
      this.router.navigate(['/search', id], { state: { book: parsedItem } });
    }); */

   // window.open(`https://books.google.com/ebooks?id=${id}&dq=holmes&as_brr=4&source=webstore_bookcard`)
  

 }
