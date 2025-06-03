import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Book } from '../../../interfaces/book-interface';

@Component({
  selector: 'book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
onMoreInfo(arg0: any) {
throw new Error('Method not implemented.');
}

  bookCard = input.required<Book>();

 }
