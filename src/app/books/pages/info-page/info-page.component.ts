import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../interfaces/book-interface';

@Component({
  selector: 'info-page',
  imports: [],
  templateUrl: './info-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InfoPageComponent {

  router = inject(Router);
  book = this.router.getCurrentNavigation()?.extras.state?.['book'] as Book;
}