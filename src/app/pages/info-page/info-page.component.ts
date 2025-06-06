import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../interfaces/book-interface';

@Component({
  selector: 'info-page',
  imports: [],
  templateUrl: './info-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InfoPageComponent {

  book: Book;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.book = nav?.extras.state?.['book'];
    console.log('Libro recibido:', this.book);
  }
}