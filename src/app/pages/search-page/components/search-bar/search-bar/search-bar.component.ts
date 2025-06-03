import { ChangeDetectionStrategy, Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchBarComponent {


  @Output() query = new EventEmitter<string>();

  onSearchBook(query: string){
    this.query.emit(query);
  }

 }
