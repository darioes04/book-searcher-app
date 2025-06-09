import { ChangeDetectionStrategy, Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'filter-book',
  imports: [],
  templateUrl: './filter-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBookComponent {

  bookAuthor = output<string>();
  bookPublisher = output<string>();
}
