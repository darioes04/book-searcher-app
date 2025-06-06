import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { Book } from '../../../interfaces/book-interface';
import { BookService } from '../../../books/services/book.service';
import { BookById } from '../../../interfaces/book-by-id-interface';
import { parseResponseBookByIdtoBook } from '../../../data-parsing';
import { Router } from '@angular/router';


@Component({
  selector: 'book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {

  constructor(private router: Router) {}


  bookCard = input.required<Book>();

  bookDataById = signal<BookById>;

  bookService = inject(BookService);

 
  onMoreInfo(id: string) {
    this.bookService.showBookById(id).subscribe(item => {
      const parsedItem = parseResponseBookByIdtoBook(item);
      this.router.navigate(['/search', id], { state: { book: parsedItem } });
    });
  } 

    

    
 



   // window.open(`https://books.google.com/ebooks?id=${id}&dq=holmes&as_brr=4&source=webstore_bookcard`)
  

 }
