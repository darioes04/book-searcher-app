import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'no-books-found',
  imports: [],
  templateUrl: './no-books-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoBooksFoundComponent { }
