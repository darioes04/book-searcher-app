import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter-book',
  imports: [],
  templateUrl: './filter-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBookComponent {


  
  @Output() bookAuthor = new EventEmitter<string>();
  @Output() bookPublisher = new EventEmitter<string>();

  onSearchByAuthor(author: string) {
    this.bookAuthor.emit(author);
  }

  onSearchByPublisher(publisher: string) {
    this.bookPublisher.emit(publisher);
  }

  
}
