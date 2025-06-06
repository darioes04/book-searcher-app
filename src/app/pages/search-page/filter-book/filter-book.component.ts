import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'filter-book',
  imports: [],
  templateUrl: './filter-book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBookComponent {



  onSearchByPublisher(arg0: string) {
    // todo
  }
  onSearchByAuthor(arg0: string) {
    // todo
  }
}
